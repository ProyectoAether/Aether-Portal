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
