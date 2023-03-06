export interface Triple {
	subject: string;
	predicate: string;
	object: string;
}
export interface Ontology {
	[key: string]: Triple[];
}
export interface Namespace {
	[key: string]: string;
}
export const typeURI =  {
	owlClass: 'http://www.w3.org/2002/07/owl#Class',
	owlDatatypeProperty: 'http://www.w3.org/2002/07/owl#DatatypeProperty',
	owlObjectProperty: 'http://www.w3.org/2002/07/owl#ObjectProperty',
	owlNamedIndividual: 'http://www.w3.org/2002/07/owl#NamedIndividual'
};
