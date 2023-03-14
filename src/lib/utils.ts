import type { Namespace, Ontology, Triple } from '$lib/assets/types';
import indexes from './assets/index.json';
import {
	OWL_CLASS,
	OWL_DATATYPE_PROPERTY,
	OWL_IMPORTS,
	OWL_OBJECT_PROPERTY,
	RDFS_SUBCLASS_OF,
	RDF_TYPE
} from './uri';

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

export function getAllOntologies(): Promise<Ontology>[] {
	return Object.values(indexes).map((dir) => import(`./assets/${dir}.json`));
}

export const ontologies: Triple[] = (await Promise.all(getAllOntologies()))
	.map((el) => el['default'])
	.flat();

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
export class TripleSorter implements Sorter<Triple> {
	private triples: Triple[];
	constructor(triples: Triple[]) {
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
	public getResult(): Triple[] {
		return this.triples;
	}
}

export function isURI(sequence: string): boolean {
	try {
		new URL(sequence);
		return true;
	} catch {
		return false;
	}
}

export function getRootsURI(triples: Triple[]): string[] {
	const subClasses = triples
		.filter((el) => el.predicate === RDFS_SUBCLASS_OF)
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

export function compactURI(uri: string, namespaces: Namespace, sep: string = ''): string {
	if (!isURI(uri)) {
		return uri;
	}
	let tmp = uri;
	for (const [elUri, alias] of Object.entries(namespaces)) {
		tmp = tmp.replace(elUri, alias + sep);
	}
	return tmp;
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

export function getOntologiesTriples(ontologies: Ontology) {
	let result = new Set<string>();
	for (const triples of Object.values(ontologies)) {
		for (const triple of triples) {
			result.add(JSON.stringify(triple));
		}
	}
	return Array.from(result).map((r: string) => JSON.parse(r));
}
