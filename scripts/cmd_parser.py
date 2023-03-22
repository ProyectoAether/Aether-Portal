import argparse
import typing

import pathtype
from rdflib import DCTERMS

LEVELS = typing.Literal["MINIMUM", "STRICT"]

args_parser = argparse.ArgumentParser(
    prog="OntoSerPy",
    description="""This is a script used for serializing RDF/XML format ontology to multiple non
standard format JSON files. It will calculate multiple ontologies' statistics,
compute their metadata and collection of triples.
""",
    epilog=f"Output files' name is taken from the `(subject, {str(DCTERMS.title)}, object)` triple.",
)
args_parser.add_argument(
    "input_file",
    help="Path of the file with the RDF/XML format ontologies' URI",
    type=pathtype.PathType(exists=True, type="file"),
)
args_parser.add_argument(
    "output_directory",
    help="Path of the output directory",
    type=pathtype.PathType(exists=True, type="dir"),
)

args_parser.add_argument(
    "-s",
    "--strictness",
    help="Level of strictness of the ontologies' file: available levels are MINIMUM and STRICT (default: MINIMUM)",
    required=False,
    choices=typing.get_args(LEVELS),
    default="MINIMUM",
)
