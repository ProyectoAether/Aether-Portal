import { namespacesFile, type Namespace, type NamespaceURI, type Triple } from '$lib/assets/data';
import { OWL_CLASS, OWL_THING, RDFS_SUBCLASS_OF, RDF_TYPE } from '$lib/assets/data';


export function getUniformURI(uri: string) {
	if (uri[uri.length - 1] === '/' || uri[uri.length - 1] === '#') {
		return uri.slice(0, -1);
	}
	return uri;
}

//https://www.freecodecamp.org/news/how-to-validate-urls-in-javascript/
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

export function getRootsURI(triples: Triple[], compacted = true): string[] {
	const subclassOf = compacted
		? compactURI(RDFS_SUBCLASS_OF, namespacesFile, ':')
		: RDFS_SUBCLASS_OF;
	const owlThing = compacted ? compactURI(OWL_THING, namespacesFile, ':') : OWL_THING;
	const rdfType = compacted ? compactURI(RDF_TYPE, namespacesFile, ':') : RDF_TYPE;
	const owlClass = compacted ? compactURI(OWL_CLASS, namespacesFile, ':') : OWL_CLASS;
	const subClasses = triples
		.filter((el) => el.predicate === subclassOf && el.object !== owlThing)
		.map((el) => el.subject);
	const classes = triples
		.filter((el) => el.predicate === rdfType && el.object === owlClass)
		.map((el) => el.subject);
	return classes.filter((el) => !subClasses.includes(el));
}
export function getChildren(classURI: string, triples: Triple[], compacted = true): string[] {
	const subclassOf = compacted
		? compactURI(RDFS_SUBCLASS_OF, namespacesFile, ':')
		: RDFS_SUBCLASS_OF;
	return triples
		.filter((el) => el.predicate === subclassOf && el.object === classURI)
		.map((el) => el.subject);
}
export function compactURI(uri: string, namespaces: Namespace, sep = ''): string {
	if (!isURI(uri) || uri.length === 0) {
		return uri;
	}
	if (uri[uri.length - 1] !== '/') {
		uri += '/';
	}
	const isOntology = Object.keys(namespaces).find((el) => el === uri);
	if (isOntology) {
		return uri.replace(isOntology, namespaces[isOntology as NamespaceURI]);
	}
	const nm = Object.keys(namespaces).find((el) => uri.includes(el));
	if (!nm) {
		return uri.slice(0, -1);
	}
	return uri.replace(nm, namespaces[nm as NamespaceURI] + sep).slice(0, -1);
}
