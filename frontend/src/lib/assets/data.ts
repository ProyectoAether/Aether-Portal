import index from '$lib/assets/ontologies/index.json';
import namespaces from '$lib/assets/ontologies/namespaces.json';
import stats from '$lib/assets/ontologies/stats.json';
import searchable from '$lib/assets/ontologies/searchable.json';
import { fromJSON } from 'arquero';

export interface Triple {
	subject: string;
	predicate: string;
	object: string;
}
export interface Quad {
	subject: string;
	predicate: string;
	object: string;
	ontologyID: OntologyID;
}
export type OntologyID = keyof typeof index;
export type NamespaceURI = keyof typeof namespaces;

export type OntologyData = {
	[uri in OntologyID]: Triple[];
};
export type Index = typeof index;
export type Namespace = typeof namespaces;
export type Stat = typeof stats;

export const namespacesFile: Namespace = namespaces;
export const indexFile: Index = index;
const uris = Object.values(index).map((el) => el.uri);
export type OntologyURI = (typeof uris)[number];
export const statsFile: Stat = stats;

export type Searchable = {
	uri: string[];
	ontology: string[];
	data_type: string[];
	compacted: string[];
};

export const searchableFile = fromJSON(JSON.stringify(searchable), {});

export type OntologyMetadata =
	(typeof indexFile)['ce17f638d8bc00c2db21000a07fad4871422bbed869096a824abd62d325dec72'];

export const RDF_TYPE = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#type';
export const RDFS_SUBCLASS_OF = 'http://www.w3.org/2000/01/rdf-schema#subClassOf';
export const RDFS_DATATYPE = 'http://www.w3.org/2000/01/rdf-schema#Datatype';
export const TERMS_DESCRIPTION = 'http://purl.org/dc/terms/description';
export const OWL_CLASS = 'http://www.w3.org/2002/07/owl#Class';
export const OWL_DATATYPE_PROPERTY = 'http://www.w3.org/2002/07/owl#DatatypeProperty';
export const OWL_OBJECT_PROPERTY = 'http://www.w3.org/2002/07/owl#ObjectProperty';
export const OWL_NAMED_INDIVIDUAL = 'http://www.w3.org/2002/07/owl#NamedIndividual';
export const OWL_ONTOLOGY = 'http://www.w3.org/2002/07/owl#Ontology';
export const OWL_IMPORTS = 'http://www.w3.org/2002/07/owl#imports';
export const OWL_THING = 'http://www.w3.org/2002/07/owl#Thing';
export const OTHERS = 'OTHERS';

export type OWLType =
	| typeof OWL_NAMED_INDIVIDUAL
	| typeof OWL_DATATYPE_PROPERTY
	| typeof OWL_OBJECT_PROPERTY
	| typeof OWL_CLASS
	| typeof OTHERS;
