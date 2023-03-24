import typing

RequiredMetadataField = typing.Literal[
    "prefix",
    "title",
    "uri",
]


OptionalMetadataField = typing.Literal[
    "filename",
    "logo",
    "description",
    "publisher",
    "creator",
    "created",
    "rights",
    "imports",
    "labels",
    "label",
]

MetadataField = typing.Literal[OptionalMetadataField, RequiredMetadataField]

MetadataFile = dict[MetadataField, typing.Any]
IndexFile = dict[str, MetadataFile]
NamespaceFile = dict[str, str]

StatField = typing.Literal[
    "numClasses", "numDatatypeProperties", "numObjectProperties", "numOntologies"
]


RDFLIB_FORMATS = typing.Literal[
    "turtle", "xml", "json-ld", "nt", "trix", "nquads", "n3", "hext", "json-ld"
]
"""This could be a issue if rdflib maintainers decides to remove some formats, 
but right now there is no type declared for these formats in rdflib, so it is hard coded
right now"""
