const index = {
  "https://w3id.org/BIGOWLWorkflows": {
    label: "BIGOWLWorkflows Ontology",
    imports: [
      "https://w3id.org/BIGOWLAlgorithms",
      "https://w3id.org/BIGOWLData"
    ],
    rights: [
      "Aether",
      "(c) Aether Group"
    ],
    creator: [
      "Aether Group"
    ],
    created: "2022-07-14T09:00:00",
    publisher: [
      "Aether Group"
    ],
    filename: "BIGOWLWorkflows",
    title: "BIGOWLWorkflows",
    description: " This ontology is used tto guide the correct orchestration of a workflow, including elements like tasks, components, parameters, etc. This ontology imports BIGOWLData and BIGOWLAlgorithms to define all the pieces in a workflow.",
    logo: "",
    prefix: "BIGOWLWorkflows",
    uri: "https://w3id.org/BIGOWLWorkflows"
  },
  "https://w3id.org/moody#": {
    label: "",
    imports: [],
    rights: [],
    creator: [
      "José F. Aldana-Martín"
    ],
    created: "2022-12-16T23:59:59",
    publisher: [],
    filename: "moody - Multi-objective Optimization Ontology",
    title: "moody - Multi-objective Optimization Ontology",
    description: "moody (Multi-Objective Optimization ontologY) is a OWL2 ontology aiming to provide the ontology model to allow the semantic consolidation of the data related to multi-objective optimization experiments, including algorithms, problems and quality indicators.",
    logo: "https://gitlab.com/jfaldanam-phd/moody/-/raw/master/assets/icon.svg",
    prefix: "moody",
    uri: "https://w3id.org/moody#"
  },
  "https://w3id.org/BIGOWLData": {
    label: "BIGOWLData Ontology",
    imports: [],
    rights: [
      "(c) Aether Group",
      "Aether"
    ],
    creator: [
      "Aether Group"
    ],
    created: "2022-07-14T09:00:00",
    publisher: [
      "Aether Group"
    ],
    filename: "BIGOWLData",
    title: "BIGOWLData",
    description: " This ontology contains all the classes and properties related to data. Data is devoted to annotating all the data flowing throughout the analytic workflow. It is declared as EquivalentTo IO-Class of DMOP. This aligning enables datatypes defined by third parties’ ontologies to be contextualised in the analysis. BIGOWLData contains the main data properties defined for this class, namely: path, to annotate the origin of data; and hasDataType, which establishes the relationship with class DataType. This last is used to define the data type, i.e. PrimitiveType (Double, Integer, Boolean, etc.) or StructuredType (Graph, Tree, Matrix, Vector, Tuple, etc.).",
    logo: "",
    prefix: "BIGOWLData",
    uri: "https://w3id.org/BIGOWLData"
  },
  "https://w3id.org/BIGOWL": {
    label: "BIGOWL Ontology",
    imports: [
      "https://w3id.org/BIGOWLData",
      "https://w3id.org/BIGOWLProblems",
      "https://w3id.org/BIGOWLWorkflows",
      "https://w3id.org/BIGOWLAlgorithms"
    ],
    rights: [
      "(c) Aether Group",
      "Aether"
    ],
    creator: [
      "Aether Group"
    ],
    created: "2022-07-14T09:00:00",
    publisher: [
      "Aether Group"
    ],
    filename: "BIGOWL",
    title: "BIGOWL",
    description: " BIGOWL (BIG data analytics OWL2 ontology) acts as a formal schema for representing and consolidating knowledge in Big Data analytics. Knowledge incorporation is, in turn, beneficial for efficient algorithmic performance by taking part in the operator’s design, parameter selection, and human interactive and decision-making strategies.",
    logo: "",
    prefix: "BIGOWL",
    uri: "https://w3id.org/BIGOWL"
  },
  "https://w3id.org/BIGOWLAlgorithms": {
    label: "BIGOWLAlgorithms Ontology",
    imports: [
      "https://w3id.org/BIGOWLData",
      "https://w3id.org/BIGOWLProblems"
    ],
    rights: [
      "(c) Aether Group",
      "Aether"
    ],
    creator: [
      "Aether Group"
    ],
    created: "2022-07-14T09:00:00",
    publisher: [
      "Aether Group"
    ],
    filename: "BIGOWLAlgorithms",
    title: "BIGOWLAlgorithms",
    description: " This ontology covers all possible kinds. It has two main subclasses: DataMiningAlgorithm and OptimizationAlgorithm, which are used to distinguish between these two families of algorithms. The former is included in the form of equivalence with the class DM-Algorithm, which is linked from DMOP.",
    logo: "",
    prefix: "BIGOWLAlgorithms",
    uri: "https://w3id.org/BIGOWLAlgorithms"
  },
  "https://w3id.org/BIGOWLProblems": {
    label: "BIGOWLProblems Ontology",
    imports: [
      "https://w3id.org/BIGOWLData"
    ],
    rights: [
      "Aether",
      "(c) Aether Group"
    ],
    creator: [
      "Aether Group"
    ],
    created: "2022-07-14T09:00:00",
    publisher: [
      "Aether Group"
    ],
    filename: "BIGOWLProblems",
    title: "BIGOWLProblems",
    description: " This ontology is used to represent the problem class and its properties. Problem is oriented to the specific problem domain (Smart Cities, Biology, etc.).",
    logo: "",
    prefix: "BIGOWLProblems",
    uri: "https://w3id.org/BIGOWLProblems"
  }
};
const index$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: index
}, Symbol.toStringTag, { value: "Module" }));
const namespaces = {
  "https://brickschema.org/schema/Brick#": "brick",
  "http://www.w3.org/ns/csvw#": "csvw",
  "http://purl.org/dc/elements/1.1/": "dc",
  "http://www.w3.org/ns/dcat#": "dcat",
  "http://purl.org/dc/dcmitype/": "dcmitype",
  "http://purl.org/dc/terms/": "terms",
  "http://purl.org/dc/dcam/": "dcam",
  "http://usefulinc.com/ns/doap#": "doap",
  "http://xmlns.com/foaf/0.1/": "foaf",
  "http://www.opengis.net/ont/geosparql#": "geo",
  "http://www.w3.org/ns/odrl/2/": "odrl",
  "http://www.w3.org/ns/org#": "org",
  "http://www.w3.org/ns/dx/prof/": "prof",
  "http://www.w3.org/ns/prov#": "prov",
  "http://purl.org/linked-data/cube#": "qb",
  "https://schema.org/": "schema",
  "http://www.w3.org/ns/shacl#": "sh",
  "http://www.w3.org/2004/02/skos/core#": "skos",
  "http://www.w3.org/ns/sosa/": "sosa",
  "http://www.w3.org/ns/ssn/": "ssn",
  "http://www.w3.org/2006/time#": "time",
  "http://purl.org/vocab/vann/": "vann",
  "http://rdfs.org/ns/void#": "void",
  "http://www.w3.org/2002/07/owl#": "owl",
  "http://www.w3.org/1999/02/22-rdf-syntax-ns#": "rdf",
  "http://www.w3.org/2000/01/rdf-schema#": "rdfs",
  "http://www.w3.org/2001/XMLSchema#": "xsd",
  "http://www.w3.org/XML/1998/namespace": "xml",
  "https://w3id.org/BIGOWLWorkflows/": "BIGOWLWorkflows",
  "https://w3id.org/obda/vocabulary#": "obda",
  "https://w3id.org/moody#": "moody",
  "http://creativecommons.org/ns#": "cc",
  "https://doi.org/": "doi",
  "http://purl.org/ontology/bibo/": "bibo",
  "http://www.e-lico.eu/ontologies/dmo/DMOP/DMOP.owl#": "dmop",
  "http://www.w3.org/2003/11/swrl#": "swrl",
  "http://swrl.stanford.edu/ontologies/3.3/swrla.owl#": "swrla",
  "http://www.w3.org/2003/11/swrlb#": "swrlb",
  "https://w3id.org/BIGOWLAlgorithms/": "BIGOWLAlgorithms",
  "https://w3id.org/BIGOWLProblems/Problem": "bigowlp",
  "https://w3id.org/BIGOWLData/": "BIGOWLData",
  "https://w3id.org/BIGOWL/": "BIGOWL",
  "https://w3id.org/BIGOWLProblems/": "BIGOWLProblems"
};
const namespaces$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: namespaces
}, Symbol.toStringTag, { value: "Module" }));
const numOntologies = 6;
const numClasses = 145;
const numDatatypeProperties = 134;
const numObjectProperties = 30;
const stats = {
  numOntologies,
  numClasses,
  numDatatypeProperties,
  numObjectProperties
};
const stats$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: stats,
  numClasses,
  numDatatypeProperties,
  numObjectProperties,
  numOntologies
}, Symbol.toStringTag, { value: "Module" }));
const namespacesFile = namespaces;
const indexFile = index;
const statsFile = stats;
const RDF_TYPE = "http://www.w3.org/1999/02/22-rdf-syntax-ns#type";
const RDFS_SUBCLASS_OF = "http://www.w3.org/2000/01/rdf-schema#subClassOf";
const OWL_CLASS = "http://www.w3.org/2002/07/owl#Class";
const OWL_DATATYPE_PROPERTY = "http://www.w3.org/2002/07/owl#DatatypeProperty";
const OWL_OBJECT_PROPERTY = "http://www.w3.org/2002/07/owl#ObjectProperty";
const OWL_NAMED_INDIVIDUAL = "http://www.w3.org/2002/07/owl#NamedIndividual";
const OWL_ONTOLOGY = "http://www.w3.org/2002/07/owl#Ontology";
const OWL_THING = "http://www.w3.org/2002/07/owl#Thing";
export {
  OWL_THING as O,
  RDFS_SUBCLASS_OF as R,
  RDF_TYPE as a,
  OWL_CLASS as b,
  OWL_ONTOLOGY as c,
  OWL_NAMED_INDIVIDUAL as d,
  OWL_DATATYPE_PROPERTY as e,
  OWL_OBJECT_PROPERTY as f,
  namespacesFile as g,
  index$1 as h,
  indexFile as i,
  namespaces$1 as j,
  stats$1 as k,
  namespaces as n,
  statsFile as s
};
