import hashlib
import json
import logging
from pathlib import Path
from rdflib.namespace import NamespaceManager

import tqdm
from rdflib import Graph
from ontoserpy.cmd_parser import args_parser
from ontoserpy.lib import (
    IndexBuilder,
    MetadataBuilder,
    MissingMetadataException,
    NamespaceBuilder,
    SearchBuilder,
    StatsBuilder,
    build_metadata,
)
from urllib.error import URLError


def main():
    logging.basicConfig(level=logging.DEBUG)
    args = args_parser.parse_args()

    namespace_builder = NamespaceBuilder()
    stats_builder = StatsBuilder()
    index_builder = IndexBuilder()
    search_builder = SearchBuilder()
    parsed_uris = set()
    g = Graph()
    with open(args.input_file, "r") as fd:
        for owl_uri in tqdm.tqdm(fd.readlines()):
            logging.info(f"Serializing: {owl_uri}")
            # Ignore blank lines and already parsed URIs
            if owl_uri == "\n" or owl_uri in parsed_uris:
                continue
            owl_uri = owl_uri.strip()
            # Since `g.parse()` may read part of the ontology file and store it at `g`
            # We create a new `g = rdflib.Graph()` to remove any added garbage
            num_retries = 0
            MAX_RETRIES = 5
            while num_retries < MAX_RETRIES:
                try:
                    g.remove((None,None,None))
                # Remove all namespace bindings
                    g.namespace_manager = NamespaceManager(Graph(), bind_namespaces="none")
                    g.parse(owl_uri, format="xml")
                    num_retries += 1
                except URLError as e:
                    if num_retries < MAX_RETRIES:
                        pass
            num_retries = 0
            parsed_uris.add(owl_uri)
            metadata_builder = MetadataBuilder(owl_uri)
            try:
                obj = build_metadata(g, metadata_builder, stats_builder)
                metadata = metadata_builder.build()
                search_builder.add(g, metadata["uri"])
                namespace_builder.add(metadata["prefix"], g.namespaces())
                hasher = hashlib.sha256()
                hasher.update(metadata["uri"].encode())
                index_builder.add(hasher.hexdigest(), metadata)
                with open(
                    Path(args.output_directory, hasher.hexdigest() + ".json"), "w+"
                ) as fd:
                    json.dump(obj, fd)
            except MissingMetadataException as e:
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
