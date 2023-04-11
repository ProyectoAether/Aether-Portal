import typing
from urllib.parse import urlparse


class ParsedURL:
    """Used for URL comparison, it checks the underlying resource instead of
    the string content"""

    def __init__(self, url: str):
        _parsed = urlparse(url)
        self._uri = url
        self._netloc = _parsed.netloc
        self._path = _parsed.path if url[-1] == "/" else _parsed.path + "/"

    def __hash__(self):
        return hash((self._netloc, self._path))

    def __eq__(self, other):
        return isinstance(other, ParsedURL) and hash(self) == hash(other)

    @property
    def uri(self):
        return self._uri

    @property
    def netloc(self):
        return self._netloc

    @property
    def path(self):
        return self._path


RequiredMetadataField = typing.Literal[
    "title",
    "uri",
]

SearchableType = typing.Literal[
    "class", "object_property", "datatype_property", "named_individual"
]


class Searchable(typing.TypedDict):
    uri: list[str]
    compacted: list[str]
    ontology: list[str]
    data_type: list[SearchableType]


TemporalFields = typing.Literal[
    "titles",
    "descriptions",
]

OptionalMetadataField = typing.Literal[
    "prefix",
    "logo",
    "description",
    "publisher",
    "creator",
    "created",
    "rights",
    "imports",
]

MetadataField = typing.Literal[
    OptionalMetadataField, RequiredMetadataField, TemporalFields
]

MetadataFile = dict[MetadataField, typing.Any]
IndexFile = dict[str, MetadataFile]
NamespaceFile = dict[str, str]

StatField = typing.Literal["numClasses", "numDatatypeProperties", "numObjectProperties"]


RDFLIB_FORMATS = typing.Literal[
    "turtle", "xml", "json-ld", "nt", "trix", "nquads", "n3", "hext", "json-ld"
]
"""This could be a issue if rdflib maintainers decides to remove some formats, 
but right now there is no type declared for these formats in rdflib, so it is hard coded
right now"""
