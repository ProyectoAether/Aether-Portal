import {
	indexFile,
	type IndexFile,
	type OntologyData,
	type OntologyMetadata,
	type Triple
} from '$lib/assets/data';
import type { PageLoad } from './$types';

async function getOntology(uri: string, indexes: IndexFile): Promise<OntologyData> {
	return { [uri]: await import(`../../../lib/assets/ontologies/${indexes[uri].filename}.json`) };
}
async function getOntologies(
	uri: string,
	imports: string[],
	indexes: IndexFile
): Promise<OntologyData> {
	const base = getOntology(uri, indexes);
	const promises = imports.map((el) => getOntology(el, indexes));
	promises.push(base);
	try {
		const datas = await Promise.all(promises);

		const ontologyData: OntologyData = {};
		for (const data of datas) {
			ontologyData[Object.keys(data)[0]] = Object.values(data)[0].default;
		}
		return ontologyData;
	} catch {
		throw Error('Failed fetching ontology data');
	}
}
export interface OntologyPageResponse {
	metadata?: OntologyMetadata;
	ontologies?: OntologyData;
	uri?: string;
	statusCode: number;
}
export const load = (async ({ url }) => {
	let result: OntologyPageResponse = {
		statusCode: 200
	};
	let uri = url.searchParams.get('uri');
	if (uri === null || uri === undefined) {
		result.statusCode = 404;
		return result;
	}
	if (url.searchParams.get('hasTag') === '') {
		uri = uri + '#';
	}
	if (!Object.keys(indexFile).includes(uri)) {
		result.statusCode = 404;
		return result;
	}
	result.uri = uri;
	const imports = indexFile[uri].imports;

	result.ontologies = await getOntologies(uri, imports, indexFile);
	result.metadata = indexFile[uri];
	return result;
}) satisfies PageLoad;
