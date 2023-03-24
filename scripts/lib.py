# -*- coding: utf-8 -*-

import builtins
import hashlib
import logging
import typing

from rdflib import DCTERMS, OWL, RDFS, SDO, VANN, Graph, URIRef
from rdflib._type_checking import _NamespaceSetString
from rdflib.namespace import NamespaceManager
from rdflib.term import _is_valid_uri
from type_checking import (
    IndexFile,
    MetadataField,
    MetadataFile,
    NamespaceFile,
    OptionalMetadataField,
    StatField,
)

_URIREF_TO_METADATA_FIELDS: dict[URIRef, MetadataField] = {
    VANN.preferredNamespacePrefix: "prefix",
    SDO.logo: "logo",
    DCTERMS.description: "description",
    DCTERMS.title: "title",
    VANN.preferredNamespaceUri: "uri",
    DCTERMS.publisher: "publisher",
    DCTERMS.creator: "creator",
    DCTERMS.created: "created",
    DCTERMS.rights: "rights",
    OWL.imports: "imports",
    RDFS.label: "labels",
}


_URIREF_TO_STATS_FIELDS: dict[URIRef, StatField] = {
    OWL.Class: "numClasses",
    OWL.DatatypeProperty: "numDatatypeProperties",
    OWL.ObjectProperty: "numObjectProperties",
    OWL.Ontology: "numOntologies",
}


class StatsBuilder:
    """Ontologies collection's statistics builder"""

    def __init__(self) -> None:
        self._stats: dict[StatField, int] = {
            "numOntologies": 0,
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

    def add(self, field: str) -> typing.Self:
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


class MetadataBuilder:
    """Ontology's metadata builder"""

    def __init__(self) -> None:
        self._metadata: MetadataFile = {
            # this `labels` field  is only used to get the ontology's label
            "labels": {},
            "label": "",
            "imports": [],
            "rights": [],
            "creator": [],
            "created": "",
            "publisher": [],
            "filename": "",
            "title": "",
            "description": "",
            "logo": "",
            "prefix": "",
            "uri": "",
        }
        self._validator = MetadataValidator()

    def build(self) -> MetadataFile:
        """Builds the Ontology's metadata dictionary

        Returns:
            dict[MetadataField, str]: Metadata dictionary

        Raises:
            MissingMetadataException: If any field is missing
        """
        self._metadata["label"] = self._metadata["labels"].get(
            self._metadata["uri"], ""
        )
        self._metadata["filename"] = self._metadata["title"]
        for k, v in self._metadata.items():
            # TODO: modify it later to take commandline argument into account
            if k in typing.get_args(OptionalMetadataField):
                if not v and v != "imports":
                    logging.warning(f"MISSING {k}")
                continue
            if not v:
                raise MissingMetadataException(k)
        # this `labels` field  is only used to get the ontology's label
        del self._metadata["labels"]
        return self._metadata

    def add(self, field: str, value: str, uri: str) -> typing.Self:
        """Updates the Ontology's metadata dictionary, it will ignore any field
        that does not exist in the MetadataField Literal

        Args:
            field: Field to be updated
            value: Value used to update the field
            uri: Ontology's URI

        Returns:
            MetadataBuilder: Metadata Builder

        Raises:
            InvalidMetadataValueException
        """
        _field = _URIREF_TO_METADATA_FIELDS.get(URIRef(field), None)
        if not _field:
            return self
        m = self._metadata[_field]
        self._validator.validate(_field, value)
        match type(m):
            case builtins.dict:
                m.update({uri: value})
            case builtins.list:
                m.append(value)
            case builtins.str:
                self._metadata[_field] = value
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

    def add(self, uri: str, metadata: MetadataFile) -> typing.Self:
        """Updates the index

        Args:
            uri: The Ontology's URI
            metadata: The MetadataFile's content

        Returns:
            IndexBuilder
        """
        hasher = hashlib.sha256()
        hasher.update(uri.encode())
        self._index[hasher.hexdigest()] = metadata
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
    ) -> typing.Self:
        """Updates the collection of namespaces

        Args:
            ontology_prefix: vann:preferredNamespacePrefix of the Ontology
            namespaces: An generator with (namespace, prefix) tuple value, this can
                        be obtained from rdflib.Graph.namespaces()

        Returns:
            NamespaceBuilder
        """
        for prefix, uri in namespaces:
            if str(prefix) != "":
                self._namespaces.update({str(uri): prefix})
            else:
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
