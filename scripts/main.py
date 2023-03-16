import json
from pathlib import Path
from typing import Generator

from rdflib import Graph, URIRef
from rdflib.namespace import NamespaceManager
from rdflib.namespace._DCTERMS import DCTERMS
from rdflib.namespace._OWL import OWL
from rdflib.namespace._RDFS import RDFS
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
# def add_more_namespaces(namespaces: dict[str, str]) -> None:
#     """REMOVE this when ontologies' namespaces are properly added to each ontology"""
#     to_add = {
#         "http://www.e-lico.eu/ontologies/dmo/DMOP/DMOP.owl#": "DMOP",
#         "http://purl.org/dc/terms/": "dcterms",
#     }
#
#     for key, value in to_add.items():
#         namespaces[key] = value


def get_my_namespace_uri(namespaces: Generator[tuple[str, URIRef], None, None]):
    for nm, uri in namespaces:
        if not nm:
            return uri
    return ""


def get_uri(graph: Graph):
    for _, p, o in graph:
        if URIRef(str(p)) == VANN.preferredNamespaceUri:
            return str(o)


OPTIONS = {
    VANN.preferredNamespacePrefix: (
        lambda result, value: result.update({"prefix": value[2]})
    ),
    SDO.logo: (lambda result, value: result.update({"logo": value[2]})),
    DCTERMS.description: (
        lambda result, value: result.update({"description": value[2]})
    ),
    DCTERMS.title: (lambda result, value: result.update({"title": value[2]})),
    DCTERMS.publisher: (lambda result, value: result.update({"publisher": value[2]})),
    DCTERMS.creator: (lambda result, value: result.update({"creator": value[2]})),
    DCTERMS.created: (lambda result, value: result.update({"created": value[2]})),
    VANN.preferredNamespaceUri: lambda result, value: result.update({"uri": value[2]}),
    DCTERMS.rights: lambda result, value: result.get("rights", []).append(value[2]),
    OWL.imports: lambda result, value: result.get("imports", []).append(value[2]),
    RDFS.label: (
        lambda result, value: result.get("label", {}).update({value[0]: value[2]})
    ),
}


def get_metadata(graph: Graph):
    metadata = {
        "imports": [],
        "rights": [],
        "label": {},
        "creator": "",
        "created": "",
        "publisher": "",
        "title": "",
        "description": "",
        "logo": "",
        "prefix": "",
        "uri": "",
    }
    obj = []
    for s, p, o in graph:
        obj.append({"subject": s, "predicate": p, "object": o})
        update_func = OPTIONS.get(URIRef(str(p)), None)
        if not update_func:
            continue
        update_func(metadata, (s, p, o))
    return obj, metadata


def main():
    project_root = Path().cwd().parent
    input_dir = Path(project_root, "static", "public")
    owl_files = input_dir.glob("*.owl")
    indexes = {}
    namespaces = get_default_namespace()
    # output_dir = Path(project_root, "src", "lib", "assets")
    output_dir = Path(project_root, "src", "lib", "assets", "ontologies")

    for file in owl_files:
        g = Graph()
        g.parse(file.as_uri(), format="application/rdf+xml")
        namespace_uri = get_my_namespace_uri(g.namespaces())
        obj, metadata = get_metadata(g)
        uri = metadata["uri"]
        namespaces[namespace_uri] = metadata["prefix"]
        label = metadata["label"].get(uri, "")
        with open(Path(output_dir, metadata["prefix"] + ".json"), "w+") as fd:
            json.dump(obj, fd)
        indexes[uri] = {"filename": Path(file.name).stem, **metadata, "label": label}
    with open(Path(output_dir, "index.json"), "w+") as fd:
        json.dump(indexes, fd)
    with open(Path(output_dir, "namespaces.json"), "w+") as fd:
        json.dump(namespaces, fd)


if __name__ == "__main__":
    main()
