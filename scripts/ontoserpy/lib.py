# -*- coding: utf-8 -*-

import builtins
import logging
import typing
from typing_extensions import Self

from rdflib import DC, DCTERMS, OWL, RDF, SDO, VANN, Graph, URIRef
from rdflib._type_checking import _NamespaceSetString
from rdflib.namespace import NamespaceManager
from rdflib.term import _is_valid_uri
from ontoserpy.type_checking import (
    IndexFile,
    MetadataField,
    MetadataFile,
    NamespaceFile,
    OptionalMetadataField,
    ParsedURL,
    Searchable,
    SearchableType,
    StatField,
    TemporalFields,
)

_URIREF_TO_METADATA_FIELDS: dict[URIRef, MetadataField] = {
    VANN.preferredNamespacePrefix: "prefix",
    SDO.logo: "logo",
    VANN.preferredNamespaceUri: "uri",
    DCTERMS.description: "descriptions",
    DCTERMS.title: "titles",
    DCTERMS.publisher: "publisher",
    DCTERMS.creator: "creator",
    DCTERMS.created: "created",
    DCTERMS.rights: "rights",
    DC.description: "descriptions",
    DC.title: "titles",
    DC.publisher: "publisher",
    DC.creator: "creator",
    DC.rights: "rights",
    OWL.imports: "imports",
}


_URIREF_TO_STATS_FIELDS: dict[URIRef, StatField] = {
    OWL.Class: "numClasses",
    OWL.DatatypeProperty: "numDatatypeProperties",
    OWL.ObjectProperty: "numObjectProperties",
}


_URIREF_TO_SEARCHEABLE: dict[URIRef, SearchableType] = {
    OWL.Class: "class",
    OWL.DatatypeProperty: "datatype_property",
    OWL.ObjectProperty: "object_property",
    OWL.NamedIndividual: "named_individual",
}


class StatsBuilder:
    """Ontologies collection's statistics builder"""

    def __init__(self) -> None:
        self._stats: dict[StatField, int] = {
            "numClasses": 0,
            "numDatatypeProperties": 0,
            "numObjectProperties": 0,
        }

    def build(self) -> dict[StatField, int]:
        """Builds the stats dictionary

        Returns:
            dict[StatField, int]: The stats dictionary
        """
        return self._stats

    def add(self, field: str) -> Self:
        """Updates stats count, it will not do anything if the field does not exist

        Args:
            field: A possible stat field

        Returns:
            StatsBuilder: With the updated count
        """
        if not _is_valid_uri(field):
            return self
        _field = _URIREF_TO_STATS_FIELDS.get(URIRef(field), None)
        if _field:
            self._stats[_field] = self._stats[_field] + 1
        return self


class MissingMetadataException(Exception):
    """Raised when the ontology lacks some metadata field

    Args:
        field: Field that is missing
    """

    def __init__(self, field: MetadataField) -> None:
        self.field: MetadataField = field
        self.message = f"Missing `{self.field}` field value"
        super().__init__(self.message)


class InvalidMetadataValueException(Exception):
    """Raised when the metadata value is invalid

    Args:
        field: Field of the value
        value: Metadata value
    """

    def __init__(self, field: MetadataField, value: str | list) -> None:
        self.field = field
        self.value = value
        self.message = f"Field {self.field} has wrong value {self.value}"
        super().__init__(self.message)


class MetadataValidator:
    """Validates metadata fields"""

    def __init__(self) -> None:
        ...

    def validate(self, field: MetadataField, value: str) -> None:
        """Validates metadata fields by checking field and its correspondent value

        Args:
            field: Metadata field
            value: Metadata field's value

        Raises:
            InvalidMetadataValueException: if the metadata value is wrong
        """
        match field:
            case "imports":
                if not _is_valid_uri(value):
                    raise InvalidMetadataValueException(field, value)
            case "uri":
                if type(value) is not builtins.str or not _is_valid_uri(value):
                    raise InvalidMetadataValueException(field, value)


class SearchBuilder:
    def __init__(self) -> None:
        self._data: Searchable = {
            "uri": [],
            "ontology": [],
            "data_type": [],
            "compacted": [],
        }

    def build(self) -> Searchable:
        return self._data

    def add(self, graph: Graph, ontology_uri: str) -> Self:
        for s, p, o in graph:
            if URIRef(str(p)) != RDF.type:
                continue
            data_type = _URIREF_TO_SEARCHEABLE.get(URIRef(str(o)), None)
            if data_type:
                self._data["uri"].append(str(s))
                self._data["ontology"].append(ontology_uri)
                self._data["data_type"].append(data_type)
                self._data["compacted"].append(_compact_uri(URIRef(str(s)), graph))

        return self


def _compact_uri(uri: URIRef, graph: Graph) -> str:
    try:
        result = graph.compute_qname(uri)[-1]
        return result if result else str(uri)
    except ValueError:
        return str(uri)


class MetadataBuilder:
    """Ontology's metadata builder"""

    def __init__(self, ontology_uri: str) -> None:
        self._provided_ontology_uri = ParsedURL(ontology_uri)
        self._computed_ontology_uris: set[ParsedURL] = set()
        self._metadata: MetadataFile = {
            "titles": {},
            "descriptions": {},
            "title": "",
            "description": "",
            "uri": "",
            "logo": "",
            "prefix": "",
            "imports": set(),
            "rights": set(),
            "creator": set(),
            "created": set(),
            "publisher": set(),
        }
        self._validator = MetadataValidator()

    def build(self) -> MetadataFile:
        """Builds the Ontology's metadata dictionary

        Returns:
            dict[MetadataField, str]: Metadata dictionary

        Raises:
            MissingMetadataException: If any field is missing
        """

        if not self._metadata["uri"]:
            if len(self._computed_ontology_uris) > 0:
                computed_uri = self._computed_ontology_uris - self._metadata["imports"]
                if len(computed_uri) > 0:
                    self._metadata["uri"] = next(iter(computed_uri))
            else:
                logging.warning(
                    f"For {self._provided_ontology_uri.uri}, the provided Ontology URI is used instead of the vann:preferredNamespaceUri."
                )
                self._metadata["uri"] = self._provided_ontology_uri

        if not self._metadata["titles"]:
            logging.warning(
                f"For {self._provided_ontology_uri.uri}, the provided URI is used instead of the dc:title or dcterms:title"
            )
            self._metadata["title"] = self._metadata["uri"]
        elif len(self._metadata["titles"]) == 1:
            self._metadata["title"] = next(iter(self._metadata["titles"].values()))
        else:
            self._metadata["title"] = self._metadata["titles"].get(
                self._metadata["uri"], ""
            )
            if not self._metadata["title"]:
                self._metadata["title"] = self._metadata["uri"]
        self._metadata["description"] = self._metadata["descriptions"].get(
            self._metadata["uri"], ""
        )
        for k in typing.get_args(TemporalFields):
            del self._metadata[k]
            continue

        for k, v in self._metadata.items():
            if k in ("rights", "creator", "created", "publisher"):
                self._metadata[k] = list(v)
            if isinstance(v, ParsedURL):
                self._metadata[k] = v.uri
            if k == "imports" and type(v) == builtins.set:
                self._metadata[k] = [x.uri for x in v]
            if k in typing.get_args(OptionalMetadataField):
                if not v and k != "imports":
                    logging.warning(f"MISSING {k}")
                continue
            if not v:
                raise MissingMetadataException(k)

        return self._metadata

    def add(self, field: str, value: str, uri: str) -> Self:
        """Updates the Ontology's metadata dictionary, it will ignore any field
        that does not exist in the MetadataField Literal

        Args:
            field: Field to be updated
            value: Value used to update the field
            uri: Subject value of the triple, it is used internally for
                computing the ontology URI, in case that the correct URI is not provided.

        Returns:
            MetadataBuilder: Metadata Builder

        Raises:
            InvalidMetadataValueException
        """
        # TODO: refactor
        if URIRef(field) == RDF.type and URIRef(value) == OWL.Ontology:
            self._computed_ontology_uris.add(ParsedURL(uri))

        _field = _URIREF_TO_METADATA_FIELDS.get(URIRef(field), None)
        if not _field:
            return self
        m = self._metadata[_field]
        self._validator.validate(_field, value)
        match type(m):
            case builtins.dict:
                m.update({ParsedURL(uri): value})
            case builtins.set:
                if _field != "imports":
                    m.add(value)
                else:
                    m.add(ParsedURL(value))
            case builtins.str:
                if _field != "uri":
                    self._metadata[_field] = value
                else:
                    self._metadata[_field] = ParsedURL(value)
        return self


def build_metadata(
    graph: Graph,
    metadata_builder: MetadataBuilder,
    stats_builder: StatsBuilder | None = None,
) -> list[dict[str, str]]:
    """Builds the metadata dictionary and optionally the stats dictionary

    Args:
        graph: The parsed rdflib.Graph
        metadata_builder: An MetadataBuilder class that will collect all the the
                          rdflib.Graph metadata

    Returns:
        list[dict[str,str]]: The rdflib.Graph triples as an list of `{subject: str,
                            predicate: str, object: str}` dictionaries
    """
    obj = []
    for s, p, o in graph:
        subject_str = str(s)
        predicate_str = str(p)
        object_str = str(o)
        obj.append(
            {"subject": subject_str, "predicate": predicate_str, "object": object_str}
        )
        metadata_builder.add(predicate_str, object_str, subject_str)
        if stats_builder:
            stats_builder.add(object_str)

    return obj


class IndexBuilder:
    """Index file builder"""

    def __init__(self) -> None:
        self._index: IndexFile = {}

    def build(self) -> IndexFile:
        """Builds the Ontology's index file

        Returns:
            IndexFile
        """
        return self._index

    def add(self, index: str, metadata: MetadataFile) -> Self:
        """Updates the index

        Args:
            uri: The Ontology's URI
            metadata: The MetadataFile's content

        Returns:
            IndexBuilder
        """
        self._index[index] = metadata
        return self


class NamespaceBuilder:
    """Namespace file builder"""

    def __init__(self, default_namespace: _NamespaceSetString = "rdflib") -> None:
        """Initializes the namespace with a rdflib default namespace collection

        Args:
            default_namespace: Name of the default namespace collection
        """
        self._namespaces: NamespaceFile = self._get_default_namespace(default_namespace)

    def build(self) -> NamespaceFile:
        """Builds the Ontology's namespace file

        Returns:
            NamespaceFile
        """

        return self._namespaces

    def add(
        self,
        ontology_preferred_prefix: str,
        namespaces: typing.Generator[tuple[str, str], None, None],
    ) -> Self:
        """Updates the collection of namespaces

        Args:
            ontology_prefix: vann:preferredNamespacePrefix's object of the Ontology
            namespaces: An generator with (namespace, prefix) tuple value, this can
                        be obtained from rdflib.Graph.namespaces()

        Returns:
            NamespaceBuilder
        """
        for prefix, uri in namespaces:
            if str(prefix) == "":
                # if str(prefix) == "" it means that this is the ontology's namespace tuple
                # rdflib specific thing
                self._namespaces.update({str(uri): ontology_preferred_prefix})
        return self

    def _get_default_namespace(
        self, default_namespaces: _NamespaceSetString
    ) -> dict[str, str]:
        """Gets the a default namespaces from rdflib library as a dictionary

        Returns:
            dict[str, str]: A `{uri: namespace}` dictionary
        """
        return {
            str(uri): namespace
            for namespace, uri in NamespaceManager(
                Graph(), bind_namespaces=default_namespaces
            ).namespaces()
        }
