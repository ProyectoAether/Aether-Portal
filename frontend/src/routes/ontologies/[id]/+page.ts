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
		const datas = await Promise.allSettled(promises);
		const ontologyData = {};
		for (const data of datas) {
			if (data.status === 'fulfilled') {
				const id = Object.keys(data.value)[0];
				// @ts-ignore
				ontologyData[id] = data.value[id].default;
			}
		}
	return ontologyData as OntologyData;
	} catch {
		throw error(500, {
			message: 'Failed fetching ontology data',
			code: 500
		});
	}

}

export type ImportResult = { uri: OntologyURI; status: boolean };
export interface OntologyPageResponse {
	metadata: OntologyMetadata;
	ontologies: OntologyData;
	uri: OntologyURI;
	imports: ImportResult[];
}

export enum _View {
	Table,
	Hierarchy,
	Mapping
}
export const load = (async ({ params }) => {
	const id = params.id as OntologyID;
	if (!Object.keys(indexFile).includes(id)) {
		throw error(404, {
			message: 'Not found',
			code: 404
		});
	}
	const expectedImports = indexFile[id].imports as OntologyURI[];
	const ontologiesURI = Object.values(indexFile).map((el) => el.uri);
	const failedImports = expectedImports.filter((x) => ontologiesURI.includes(x));
	const imports = expectedImports.map((x) => ({
		uri: x,
		status: failedImports.find((y) => y === x) ? true : false
	}));
	return {
		metadata: indexFile[id],
		ontologies: await getOntologies(id, expectedImports, indexFile),
		uri: indexFile[id].uri,
		imports
	};
}) satisfies PageLoad;
