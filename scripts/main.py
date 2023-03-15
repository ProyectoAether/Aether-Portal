import json
from difflib import SequenceMatcher
from pathlib import Path
from typing import Generator

from rdflib import RDFS, Graph, URIRef
from rdflib.namespace import NamespaceManager
from rdflib.namespace._DCTERMS import DCTERMS
from rdflib.namespace._SDO import SDO
from rdflib.namespace._VANN import VANN


def get_default_namespace():
    return {
        str(uri): namespace
        for namespace, uri in NamespaceManager(
            Graph(), bind_namespaces="rdflib"
        ).namespaces()
    }


# TODO
def add_more_namespaces(namespaces: dict[str, str]) -> None:
    """REMOVE this when ontologies' namespaces are properly added to each ontology"""
    to_add = {
        "http://www.e-lico.eu/ontologies/dmo/DMOP/DMOP.owl#": "DMOP",
        "http://purl.org/dc/terms/": "dcterms",
    }

    for key, value in to_add.items():
        namespaces[key] = value


def get_my_namespace_uri(namespaces: Generator[tuple[str, URIRef], None, None]):
    for nm, uri in namespaces:
        if not nm:
            return uri
    return ""


def get_uri(graph: Graph):
    for _, p, o in graph:
        if URIRef(str(p)) == VANN.preferredNamespaceUri:
            return str(o)


def main():
    project_root = Path().cwd().parent
    input_dir = Path(project_root, "static", "public")
    owl_files = input_dir.glob("*.owl")
    indexes = {}
    namespaces = get_default_namespace()
    # TODO
    add_more_namespaces(namespaces)
    output_dir = Path(project_root, "src", "lib", "assets", "ontologies")

    for file in owl_files:
        g = Graph()
        g.parse(file.as_uri(), format="application/rdf+xml")
        obj = []
        prefix = ""
        namespace_uri = get_my_namespace_uri(g.namespaces())
        uri = get_uri(g)
        logo = ""
        description = ""
        label = ""
        for s, p, o in g:
            obj.append({"subject": s, "predicate": p, "object": o})
            match URIRef(str(p)):
                case VANN.preferredNamespacePrefix:
                    prefix = str(o)
                    continue
                case SDO.logo:
                    logo = str(o)
                    continue
                case DCTERMS.description:
                    description = str(o)
                    continue
                case RDFS.label:
                    if str(s) == uri:
                        label = str(o)
                    continue
        namespaces[namespace_uri] = prefix
        with open(Path(output_dir, prefix + ".json"), "w+") as fd:
            json.dump(obj, fd)
        indexes[uri] = {
            "filename": Path(file.name).stem,
            "logo": logo,
            "description": description,
            "label": label,
        }
    with open(Path(output_dir, "index.json"), "w+") as fd:
        json.dump(indexes, fd)
    with open(Path(output_dir, "namespaces.json"), "w+") as fd:
        json.dump(namespaces, fd)


if __name__ == "__main__":
    main()
