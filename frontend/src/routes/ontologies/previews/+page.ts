import {
	indexFile,
	type Index,
	type OntologyData,
	type OntologyMetadata,
	type OntologyURI,
	type Triple
} from '$lib/assets/data';
import type { PageLoad } from './$types';

async function getOntology(
	uri: OntologyURI,
	indexes: Index
): Promise<{
	[x: string]: Triple[];
}> {
	return {
		[uri]: (await import(
			`../../../lib/assets/ontologies/${indexes[uri].filename}.json`
		)) as Triple[]
	};
}
async function getOntologies(
	uri: OntologyURI,
	imports: OntologyURI[],
	indexes: Index
): Promise<OntologyData> {
	const base = getOntology(uri, indexes);
	const promises = imports.map((el) => getOntology(el, indexes));
	promises.push(base);
	try {
		const datas = await Promise.all(promises);
		const ontologyData = {};
		for (const data of datas) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
			ontologyData[Object.keys(data)[0]] = Object.values(data)[0].default;
		}
		return ontologyData as OntologyData;
	} catch {
		throw Error('Failed fetching ontology data');
	}
}
export interface OntologyPageResponse {
	metadata?: OntologyMetadata;
	ontologies?: OntologyData;
	uri?: OntologyURI;
	statusCode: number;
}
export const load = (async ({ url }) => {
	const result: OntologyPageResponse = {
		statusCode: 200
	};
	let uri = url.searchParams.get('uri') as OntologyURI;
	if (uri === null || uri === undefined) {
		result.statusCode = 404;
		return result;
	}
	if (url.searchParams.get('hasTag') === '') {
		uri = (uri + '#') as OntologyURI;
	}
	if (!Object.keys(indexFile).includes(uri)) {
		result.statusCode = 404;
		return result;
	}
	result.uri = uri;
	const imports = indexFile[uri].imports as OntologyURI[];

	result.ontologies = await getOntologies(uri, imports, indexFile);
	result.metadata = indexFile[uri];
	return result;
}) satisfies PageLoad;
