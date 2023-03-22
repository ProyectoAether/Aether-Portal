import index from '$lib/assets/ontologies/index.json';
import namespaces from '$lib/assets/ontologies/namespaces.json';
import stats from '$lib/assets/ontologies/stats.json';

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
export type OntologyURI = keyof typeof index;
export type NamespaceURI = keyof typeof namespaces;

export type OntologyData = {
	[uri in OntologyURI]: Triple[];
};
export type Index = typeof index;
export type Namespace = typeof namespaces;
export type Stat = typeof stats;

export const namespacesFile: Namespace = namespaces;
export const indexFile: Index = index;
export const statsFile: Stat = stats;

export type OntologyMetadata = (typeof index)['https://w3id.org/BIGOWL'];

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

export type OWLType =
	| typeof OWL_NAMED_INDIVIDUAL
	| typeof OWL_DATATYPE_PROPERTY
	| typeof OWL_OBJECT_PROPERTY
	| typeof OWL_CLASS;
