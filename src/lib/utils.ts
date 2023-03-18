import type { Index, Namespace, Quad, Triple } from '$lib/assets/data';
import indexes from './assets/ontologies/index.json';
import {
	OWL_CLASS,
	OWL_DATATYPE_PROPERTY,
	OWL_IMPORTS,
	OWL_OBJECT_PROPERTY,
	OWL_THING,
	RDFS_SUBCLASS_OF,
	RDF_TYPE
} from '$lib/assets/data';

const metadataFields = [
	'Title',
	'Publisher',
	'Creator',
	'Created',
	'Rights',
	'URI',
	'Description',
	'Imports'
] as const;

export function formatURI(uri: string): string {
	if (uri[uri.length - 1] === '#') {
		uri = uri.slice(0, -1) + '&hasTag';
	}
	return uri;
}


export function isMetadataField(value: any): value is MetadataField {
	return metadataFields.includes(value);
}

export type MetadataField = (typeof metadataFields)[number];

const statistics = [
	'Number of classes',
	'Number of datatype properties',
	'Number of object properties'
] as const;
type Statistic = (typeof statistics)[number];

export function isStatistic(value: any): value is Statistic {
	return statistics.includes(value);
}

export type MetadataFieldPredicate = {
	[key in MetadataField | Statistic]: string;
};

export const fields: MetadataFieldPredicate = {
	Title: 'http://purl.org/dc/terms/title',
	Publisher: 'http://purl.org/dc/terms/publisher',
	Creator: 'http://purl.org/dc/terms/creator',
	Created: 'http://purl.org/dc/terms/created',
	Rights: 'http://purl.org/dc/terms/rights',
	URI: 'http://www.w3.org/2002/07/owl#versionIRI',
	Description: 'http://purl.org/dc/terms/description',
	'Number of classes': OWL_CLASS,
	'Number of datatype properties': OWL_DATATYPE_PROPERTY,
	'Number of object properties': OWL_OBJECT_PROPERTY,
	Imports: OWL_IMPORTS
};

export type OntologyMetadata<T, K> = Map<T, K>;

interface Sorter<T> {
	alphabeticalSort(): this;
	reverseAlphabeticalSort(): this;
	getResult(): T[];
}
export class QuadSorter implements Sorter<Quad> {
	private triples: Quad[];
	constructor(triples: Quad[]) {
		this.triples = triples;
	}
	public alphabeticalSort(): this {
		this.triples = this.triples.sort((a, b) =>
			a.subject.toLowerCase() >= b.subject.toLowerCase() ? 1 : -1
		);
		return this;
	}
	public reverseAlphabeticalSort(): this {
		this.triples = this.triples.sort((a, b) =>
			a.subject.toLowerCase() < b.subject.toLowerCase() ? 1 : -1
		);
		return this;
	}
	public getResult(): Quad[] {
		return this.triples;
	}
}
export function getUniformURI(uri: string) {
	if (uri[uri.length - 1] === '/' || uri[uri.length - 1] === '#') {
		return uri.slice(0, -1);
	}
	return uri;
}

export function isURI(sequence: string | undefined): boolean {
	if (sequence === undefined) {
		return false;
	}
	try {
		new URL(sequence);
		return true;
	} catch {
		return false;
	}
}

export function getRootsURI(triples: Triple[]): string[] {
	const subClasses = triples
		.filter((el) => el.predicate === RDFS_SUBCLASS_OF && el.object !== OWL_THING)
		.map((el) => el.subject);
	const classes = triples
		.filter((el) => el.predicate === RDF_TYPE && el.object === OWL_CLASS)
		.map((el) => el.subject);
	return classes.filter((el) => !subClasses.includes(el));
}
export function getChildren(classURI: string, triples: Triple[]): string[] {
	return triples
		.filter((el) => el.predicate === RDFS_SUBCLASS_OF && el.object === classURI)
		.map((el) => el.subject);
}
export interface CompactURIProps {
	compacted: boolean;
	sep: string;
}

export function compactURI(
	uri: string | null,
	namespaces: Namespace,
	sep: string = ''
): string | null {
	if (uri === null) {
		return null;
	}
	if (!isURI(uri) || uri.length === 0) {
		return uri;
	}
	if (uri[uri.length - 1] !== '/') {
		uri += '/';
	}
	const isOntology = Object.keys(namespaces).find((el) => el === uri);
	if (isOntology) {
		return uri.replace(isOntology, namespaces[isOntology]);
	}
	const nm = Object.keys(namespaces).find((el) => uri.includes(el));
	if (!nm) {
		return uri.slice(0, -1);
	}
	return uri.replace(nm, namespaces[nm] + sep).slice(0, -1);
}
export function expandURI(uri: string, namespaces: Namespace): string {
	if (!isURI(uri)) {
		return uri;
	}
	let tmp = uri;
	for (const [elUri, alias] of Object.entries(namespaces)) {
		tmp = tmp.replace(alias + ':', elUri);
	}
	return tmp;
}
