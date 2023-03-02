import type { Namespace, Ontology, OWLType, Triple, TypesURI } from '$lib/assets/types';

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

type MetadataFieldPredicate = {
	[key in MetadataField | Statistic]: string;
};

const fields: MetadataFieldPredicate = {
	Title: 'http://purl.org/dc/terms/title',
	Publisher: 'http://purl.org/dc/terms/publisher',
	Creator: 'http://purl.org/dc/terms/creator',
	Created: 'http://purl.org/dc/terms/created',
	Rights: 'http://purl.org/dc/terms/rights',
	URI: 'http://www.w3.org/2002/07/owl#versionIRI',
	Description: 'http://purl.org/dc/terms/description',
	Imports: 'http://www.w3.org/2002/07/owl#imports',
	'Number of classes': 'http://www.w3.org/2002/07/owl#Class',
	'Number of datatype properties': 'http://www.w3.org/2002/07/owl#DatatypeProperty',
	'Number of object properties': 'http://www.w3.org/2002/07/owl#ObjectProperty'
};

export type OntologyMetadata<T, K> = Map<T, K>;

export class MetadataExtractor {
	private data: Ontology;
	private baseURI: string;
	private imported: string[];
	public constructor(data: Ontology, baseURI: string) {
		this.baseURI = baseURI;
		this.data = data;
		this.imported = [];
	}
	public updateImported(imported: string[]): this {
		this.imported = imported;
		return this;
	}

	public getMetadata(
		fieldsToShow: MetadataFieldPredicate = fields
	): OntologyMetadata<MetadataField, string[] | number> {
		const metadata: OntologyMetadata<MetadataField, string[] | number> = new Map<
			MetadataField,
			string[] | number
		>();
		const baseTriples = this.data[this.baseURI];
		const allTriples = this.getTiples();
		for (const [field, predicate] of Object.entries(fieldsToShow)) {
			if (isMetadataField(field)) {
				metadata.set(
					field as MetadataField,
					baseTriples.filter((x) => x.predicate === predicate).map((x) => x.object)
				);
			} else if (isStatistic(field)) {
				metadata.set(
					field as MetadataField,
					// in this case it's the object
					allTriples.filter((x) => x.object === predicate).map((x) => x.object).length
				);
			}
		}
		return metadata;
	}
	public getTiples(): Triple[] {
		const imported = this.getImportedOntologies(this.data, this.imported);
		return [...Object.values(imported).flat(), ...this.data[this.baseURI]];
	}
	private getImportedOntologies(data: Ontology, imported: string[]): Ontology {
		return Object.entries(data)
			.filter(([uri, _]) => imported.includes(uri))
			.reduce((acc, [uri, triples]) => {
				acc[uri] = triples;
				return acc;
			}, {} as Ontology);
	}
}
export class URIFormatter {
	private namespaces: Namespace;
	private triples: Triple[];
	constructor(triples: Triple[], namespaces: Namespace) {
		this.namespaces = namespaces;
		this.triples = triples;
	}

	public getCompactedURI(): Triple[] {
		return this.triples.map((d) => {
			return {
				subject: compactURI(d.subject, this.namespaces),
				predicate: compactURI(d.predicate, this.namespaces),
				object: compactURI(d.object, this.namespaces)
			};
		});
	}
	public getExpandedURI(): Triple[] {
		return this.triples.map((d) => {
			return {
				subject: expandURI(d.subject, this.namespaces),
				predicate: expandURI(d.predicate, this.namespaces),
				object: expandURI(d.object, this.namespaces)
			};
		});
	}
}
interface Filter<T> {
	filterByType(typeToShow: TypesURI, typesUris: TypesURI, typePredicate: string): this;
	filterByQuery(searchQuery: string): this;
	getResult(): T[];
}
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
			(a.subject + a.predicate + a.object).toLowerCase() >=
			(b.subject + b.predicate + b.object).toLowerCase()
				? 1
				: -1
		);
		return this;
	}
	public reverseAlphabeticalSort(): this {
		this.triples = this.triples.sort((a, b) =>
			(a.subject + a.predicate + a.object).toLowerCase() <
			(b.subject + b.predicate + b.object).toLowerCase()
				? 1
				: -1
		);
		return this;
	}
	public getResult(): Triple[] {
		return this.triples;
	}
}

export type TypesFilter = {
	[keys in keyof OWLType]: boolean;
};

export class SearchFilter implements Filter<Triple> {
	triples: Triple[];
	constructor(triples: Triple[]) {
		this.triples = triples;
	}
	public filterByQuery(searchQuery: string): this {
		this.triples = this.triples.filter(
			(el) =>
				el.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
				el.predicate.toLowerCase().includes(searchQuery.toLowerCase()) ||
				el.object.toLowerCase().includes(searchQuery.toLowerCase())
		);
		return this;
	}
	public filterByType(typeToShow: TypesFilter, typesUris: TypesURI, typePredicate: string): this {
		const elements = this.triples.reduce((acc, curr) => {
			if (!acc.has(curr.subject)) {
				acc.set(curr.subject, true);
			}
			return acc;
		}, new Map<string, boolean>());
		for (const curr of this.triples) {
			for (const type of Object.keys(typesUris)) {
				if (
					!typeToShow[type as OWLType] &&
					curr.object === typesUris[type as OWLType] &&
					curr.predicate === typePredicate
				) {
					elements.delete(curr.subject);
				}
			}
		}
		this.triples = this.triples.filter((d) => elements.has(d.subject));
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
	const classes = triples.filter((el) => el.object === 'http://www.w3.org/2002/07/owl#Class');
	return classes
		.filter(
			(c) =>
				triples.find(
					(t) =>
						t.subject === c.subject &&
						t.predicate === 'http://www.w3.org/2000/01/rdf-schema#subClassOf'
				) === undefined
		)
		.map((el) => el.subject);
}
export function getChildren(classURI: string, triples: Triple[]): string[] {
	return triples
		.filter(
			(el) =>
				el.predicate === 'http://www.w3.org/2000/01/rdf-schema#subClassOf' && el.object === classURI
		)
		.map((el) => el.subject);
}

export function compactURI(uri: string, namespaces: Namespace): string {
	if (!isURI(uri)) {
		return uri;
	}
	let tmp = uri;
	for (const [elUri, alias] of Object.entries(namespaces)) {
		tmp = tmp.replace(elUri, alias + ':');
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
