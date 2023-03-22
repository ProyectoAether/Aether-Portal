import {
	indexFile,
	type Index,
	type OntologyData,
	type OntologyMetadata,
	type OntologyID,
	type Triple,
	type OntologyURI
} from '$lib/assets/data';
import { error } from '@sveltejs/kit';
import { sha256 } from 'js-sha256';
import type { PageLoad } from './$types';

async function getOntology(
	id: OntologyID,
	indexes: Index
): Promise<{
	[x: string]: Triple[];
}> {
	return {
		[id]: (await import(`../../../lib/assets/ontologies/${indexes[id].filename}.json`)) as Triple[]
	};
}
async function getOntologies(
	id: OntologyID,
	imports: OntologyURI[],
	indexes: Index
): Promise<OntologyData> {
	const base = getOntology(id, indexes);
	const promises = imports.map((el) => getOntology(sha256(el) as OntologyID, indexes));
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
		throw error(500, {
			message:
				'Failed fetching ontology data. Have you write down all imported ontologies at ontologies.txt?',
			code: 500
		});
	}
}
export interface OntologyPageResponse {
	metadata: OntologyMetadata;
	ontologies: OntologyData;
	uri: OntologyURI;
}
export const load = (async ({ params }) => {
	const id = params.id as OntologyID;
	if (!Object.keys(indexFile).includes(id)) {
		throw error(404, {
			message: 'Not found',
			code: 404
		});
	}
	const imports = indexFile[id].imports as OntologyURI[];
	return {
		metadata: indexFile[id],
		ontologies: await getOntologies(id, imports, indexFile),
		uri: indexFile[id].uri
	};
}) satisfies PageLoad;
