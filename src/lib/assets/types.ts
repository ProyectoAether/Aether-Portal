interface OntologyContext {
    brick: string;
    cdterms: string;
    csvw: string;
    dc: string;
    dcam: string;
    dcat: string;
    dcmitype: string;
    doap: string;
    foaf: string;
    geo: string;
    odrl: string;
    org: string;
    owl: string;
    prof: string;
    prov: string;
    qb: string;
    rdf: string;
    rdfs: string;
    sdo: string;
    sh: string;
    skos: string;
    sosa: string;
    ssn: string;
    time: string;
    vann: string;
    void: string;
    xsd: string;
}

export interface JsonLdDocument {
    '@context': OntologyContext;
    '@graph': OntologyGraph[];
}
interface OntologyGraph {
    '@graph': (
        | NamedIndividual
        | OwlOntology
        | OwlClass
        | OwlObjectProperty
        | OwlTransitiveProperty
        | OwlDataProperty
    )[];
    '@id': string;
}
interface Property {
    '@id': string;
    'rdfs:domain': string;
    'rdfs:range': string;
    '@type': 'owl:DatatypeProperty' | 'owl:ObjectProperty' | 'owl:TransitiveProperty';
}
interface NamedIndividual {
    '@id': string;
    '@type': ['owl:NamedIndividual', string];
}
interface OwlOntology {
    '@id': string;
    '@type'?: 'owl:Ontology' | string;
    'cdterms:created'?: CdTermsCreated;
    'cdterms:citation'?: CdTermsCitation;
    'cdterms:creator'?: CdTermsCreator;
    'cdterms:issued'?: CdTermsIssued;
    'cdterms:license'?: CdTermsLicense;
    'cdterms:modified'?: CdTermsModified;
    'cdterms:publisher'?: CdTermsPublisher;
    'cdterms:rights'?: CdTermsRights;
    'cdterms:title'?: CdTermsTitle;
    'owl:versionIRI'?: OwlVersionIRI;
    'rdfs:comment'?: RdfsComment;
    'rdfs:label'?: RdfsLabel;
    'vann:preferredNamespacePrefix'?: VannPreferredNamespacePrefix;
}

interface OntologyMetadata {
    '@type': string;
    '@value': string;
}

type CdTermsCitation = string | OntologyMetadata;
type RdfsLabel = string | string[];
type CdTermsTitle = string;
type CdTermsPublisher = string;
type CdTermsRights = string | OntologyMetadata[] | (string | OntologyMetadata)[];
type CdTermsCreated = OntologyMetadata;
type CdTermsCreator = OntologyMetadata[] | string[] | string;
type CdTermsIssued = OntologyMetadata;
type CdTermsLicense = OntologyMetadata;
type CdTermsModified = OntologyMetadata;
type RdfsComment = string | OntologyMetadata;
type VannPreferredNamespacePrefix = string | OntologyMetadata[] | OntologyMetadata;

interface OwlVersionIRI {
    '@id': string;
}

interface OwlDataProperty extends Property {
    '@type': 'owl:DatatypeProperty';
}
interface OwlObjectProperty extends Property {
    '@type': 'owl:ObjectProperty';
}
interface OwlTransitiveProperty extends Property {
    '@type': 'owl:TransitiveProperty';
}

interface OwlClass {
    '@id': string;
    '@type': 'owl:Class' | string[];
    'rdfs:subClassOf'?: string | string[];
}
