# -*- coding: utf-8 -*-

"""OntoSerPy

This is a script used for serializing OWL ontology into multiple non standard 
format JSON files. It will calculate multiple ontologies' statistics,
compute their metadata and collection of triples.

THIS SCRIPT IS INTENDED to be used in conjunction with Aether Portal frontend
page, but it may be useful for other projects as well as it provides a naive
interface for consuming ontologies' data.
"""

import json
import logging
import typing
from pathlib import Path

import cmd_parser
import lib
import tqdm
import type_checking
from rdflib import Graph
from rdflib.exceptions import ParserError


def main():
    logging.basicConfig(level=logging.INFO)
    args = cmd_parser.args_parser.parse_args()

    namespace_builder = lib.NamespaceBuilder()
    stats_builder = lib.StatsBuilder()
    index_builder = lib.IndexBuilder()
    with open(args.input_file, "r") as fd:
        for owl_uri in tqdm.tqdm(fd.readlines()):
            if owl_uri == "\n":
                continue
            owl_uri = owl_uri.strip()
            logging.info(f"Serializing: {owl_uri}")
            g = Graph()
            for format in typing.get_args(type_checking.RDFLIB_FORMATS):
                try:
                    g.parse(owl_uri, format=format)
                    break
                except SyntaxError | ParserError:
                    continue
            else:
                logging.error(f"No rdflib parser was able to parse: {owl_uri}")
                logging.error(
                    f"rdflib parsers are: {typing.get_args(type_checking.RDFLIB_FORMATS)}"
                )
            metadata_builder = lib.MetadataBuilder()
            try:
                obj = lib.build_metadata(g, metadata_builder, stats_builder)
                metadata = metadata_builder.build()
                namespace_builder.add(metadata["prefix"], g.namespaces())
                index_builder.add(metadata["uri"], metadata)
                with open(
                    Path(args.output_directory, metadata["filename"] + ".json"), "w+"
                ) as fd:
                    json.dump(obj, fd)
            except lib.MissingMetadataException as e:
                match args.strictness:
                    case "MINIMUM":
                        if e.field in ("uri", "title"):
                            raise e
                        logging.warning(f"{owl_uri}: {e.message}")
                    case "STRICT":
                        raise e
    logging.info("Serializing `namespaces.json`, `stats.json` and `index.json`.")
    for data, filename in tqdm.tqdm(
        [
            (namespace_builder.build(), "namespaces.json"),
            (stats_builder.build(), "stats.json"),
            (index_builder.build(), "index.json"),
        ]
    ):
        with open(Path(args.output_directory, filename), "w+") as fd:
            json.dump(data, fd)


if __name__ == "__main__":
    main()
