import index from '$lib/assets/ontologies/index.json';
import namespaces from '$lib/assets/ontologies/namespaces.json';
export interface Triple {
	subject: string;
	predicate: string;
	object: string;
}
export interface Quad {
	subject: string;
	predicate: string;
	object: string;
	ontology: string;
}
export interface OntologyMetadata {
	filename: string;
	logo: string;
	description: string;
	label: string;
	imports: string[];
	title: string;
	publisher: string[];
	creator: string[];
	created: string;
	rights: string[];
	uri: string;
}
export interface OntologyData {
	[uri: string]: Triple[];
}
export interface IndexFile {
	[key: string]: OntologyMetadata;
}
export interface Namespace {
	[key: string]: string;
}
export const namespacesFile: Namespace = namespaces;
export const indexFile: IndexFile = index;

export const RDF_TYPE = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#type';
export const RDFS_SUBCLASS_OF = 'http://www.w3.org/2000/01/rdf-schema#subClassOf';
export const RDFS_DATATYPE = 'http://www.w3.org/2000/01/rdf-schema#Datatype';
export const RDFS_LABEL = 'http://www.w3.org/2000/01/rdf-schema#label';
export const TERMS_DESCRIPTION = 'http://purl.org/dc/terms/description';
export const OWL_CLASS = 'http://www.w3.org/2002/07/owl#Class';
export const OWL_DATATYPE_PROPERTY = 'http://www.w3.org/2002/07/owl#DatatypeProperty';
export const OWL_OBJECT_PROPERTY = 'http://www.w3.org/2002/07/owl#ObjectProperty';
export const OWL_NAMED_INDIVIDUAL = 'http://www.w3.org/2002/07/owl#NamedIndividual';
export const OWL_ONTOLOGY = 'http://www.w3.org/2002/07/owl#Ontology';
export const OWL_IMPORTS = 'http://www.w3.org/2002/07/owl#imports';
export const OWL_THING = 'http://www.w3.org/2002/07/owl#Thing';
