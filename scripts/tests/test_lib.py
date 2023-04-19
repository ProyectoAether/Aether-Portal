import pytest
from ontoserpy.lib import (
    MetadataBuilder,
    NamespaceBuilder,
    StatsBuilder,
    _compact_uri,
    build_metadata,
)
from rdflib import Graph, Literal, URIRef
from rdflib.namespace._DCTERMS import DCTERMS
from rdflib.namespace._OWL import OWL
from rdflib.namespace._RDF import RDF
from rdflib.namespace._RDFS import RDFS
from rdflib.namespace._VANN import VANN


@pytest.fixture
def ontology() -> Graph:
    graph = Graph()
    ontology_uri = URIRef("http://example.org/ontology/foo")
    preferred_uri = URIRef("http://example.org/ontology/foo")
    preferred_prefix = Literal("foo")
    title = Literal("FOO")
    description = Literal("FooBaz")
    creator = Literal("Nicolas Zhao")
    publisher = Literal("Nicolas Zhao")
    rights = Literal("some rights")

    graph.add((ontology_uri, VANN.preferredNamespaceUri, preferred_uri))
    graph.add((ontology_uri, VANN.preferredNamespacePrefix, preferred_prefix))
    graph.add((ontology_uri, DCTERMS.rights, rights))
    graph.add((ontology_uri, DCTERMS.publisher, publisher))
    graph.add((ontology_uri, DCTERMS.creator, creator))
    graph.add((ontology_uri, DCTERMS.title, title))
    graph.add((ontology_uri, DCTERMS.description, description))
    graph.bind("", ontology_uri)
    return graph


def test_namespacebuilder(ontology: Graph):
    builder = NamespaceBuilder()
    ontology_uri = "http://example.org/ontology/foo"
    preferred_prefix = "foo"
    builder.add(preferred_prefix, ontology.namespaces())
    namespaces = builder.build()
    assert namespaces[ontology_uri] == "foo"
    assert namespaces[DCTERMS._NS] == "dcterms"
    assert namespaces[VANN._NS] == "vann"
    assert namespaces[RDFS._NS] == "rdfs"
    assert namespaces[RDF._NS] == "rdf"
    assert namespaces[OWL._NS] == "owl"


def test_build_metadata(ontology: Graph):
    stats_builder = StatsBuilder()
    metadata_builder = MetadataBuilder("http://example.org/ontology/foo")
    metadata = build_metadata(ontology, metadata_builder, stats_builder)
    assert len(metadata) > 0
    stats = stats_builder.build()
    assert stats["numClasses"] == 0
    assert stats["numObjectProperties"] == 0
    assert stats["numDatatypeProperties"] == 0

    ontology.add((VANN.preferredNamespaceUri, RDF.type, OWL.ObjectProperty))
    ontology.add((VANN.preferredNamespacePrefix, RDF.type, OWL.DatatypeProperty))
    ontology.add((DCTERMS.title, RDF.type, OWL.Class))

    metadata = build_metadata(ontology, metadata_builder, stats_builder)
    assert len(metadata) > 0
    stats = stats_builder.build()

    assert stats["numClasses"] == 1
    assert stats["numObjectProperties"] == 1
    assert stats["numDatatypeProperties"] == 1


def test_compact_uri(ontology: Graph):
    assert (
        _compact_uri(URIRef("http://example.org/ontology/foo"), ontology)
        == "http://example.org/ontology/foo"
    )
    assert (
        _compact_uri(URIRef("http://example.org/ontology/foo/something"), ontology)
        == "something"
    )
