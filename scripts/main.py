# -*- coding: utf-8 -*-

"""OntoSerPy

This is a script used for serializing OWL ontology into multiple non standard 
format JSON files. It will calculate multiple ontologies' statistics,
compute their metadata and collection of triples.

THIS SCRIPT IS INTENDED to be used in conjunction with Aether Portal frontend
page, but it may be useful for other projects as well as it provides a naive
interface for consuming ontologies' data.
"""

import hashlib
import json
import logging
from pathlib import Path

import cmd_parser
import lib
import tqdm
from rdflib import Graph


def main():
    logging.basicConfig(level=logging.DEBUG)
    args = cmd_parser.args_parser.parse_args()

    namespace_builder = lib.NamespaceBuilder()
    stats_builder = lib.StatsBuilder()
    index_builder = lib.IndexBuilder()
    search_builder = lib.SearchBuilder()
    parsed_uris = set()
    with open(args.input_file, "r") as fd:
        for owl_uri in tqdm.tqdm(fd.readlines()):
            logging.info(f"Serializing: {owl_uri}")
            # Ignore blank lines and already parsed URIs
            if owl_uri == "\n" or owl_uri in parsed_uris:
                continue
            owl_uri = owl_uri.strip()
            # Since `g.parse()` may read part of the ontology file and store it at `g`
            # We create a new `g = rdflib.Graph()` to remove any added garbage
            g = Graph()
            g.parse(owl_uri, format="xml")
            parsed_uris.add(owl_uri)
            metadata_builder = lib.MetadataBuilder(owl_uri)
            try:
                obj = lib.build_metadata(g, metadata_builder, stats_builder)
                metadata = metadata_builder.build()
                g = Graph()
                g.parse(owl_uri, format="xml")
                search_builder.add(g, metadata["uri"])
                namespace_builder.add(metadata["prefix"], g.namespaces())
                hasher = hashlib.sha256()
                hasher.update(metadata["uri"].encode())
                index_builder.add(hasher.hexdigest(), metadata)
                with open(
                    Path(args.output_directory, hasher.hexdigest() + ".json"), "w+"
                ) as fd:
                    json.dump(obj, fd)
            except lib.MissingMetadataException as e:
                if e.field in ("uri", "title"):
                    logging.warning(f"{owl_uri}: {e.message}")
                    raise e
    logging.info(
        "Serializing `searchable.json`, `namespaces.json`, `stats.json` and `index.json`."
    )
    for data, filename in tqdm.tqdm(
        [
            (search_builder.build(), "searchable.json"),
            (namespace_builder.build(), "namespaces.json"),
            (
                {**stats_builder.build(), "numOntologies": len(parsed_uris)},
                "stats.json",
            ),
            (index_builder.build(), "index.json"),
        ]
    ):
        with open(Path(args.output_directory, filename), "w+") as fd:
            json.dump(data, fd)


if __name__ == "__main__":
    main()
