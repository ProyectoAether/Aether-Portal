import type { Namespace, Ontology, OWLType, Triple, TypesURI } from '$lib/assets/types';

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
}

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
	return Object.values(ontologies).reduce((acc, curr) => {
		acc.push(...curr);
		return acc;
	}, []);
}
