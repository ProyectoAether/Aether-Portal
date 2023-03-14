import type { Triple } from '$lib/assets/types';
import {
	isMetadataField,
	isStatistic,
	type MetadataField,
	type MetadataFieldPredicate
} from '$lib/utils';
import { readable } from 'svelte/store';

export function getMetadata(
	fields: MetadataFieldPredicate,
	ontology: Triple[],
	ontologies: Triple[]
) {
	const metadata = new Map<MetadataField, string[] | number>();
	for (const [field, predicate] of Object.entries(fields)) {
		if (isMetadataField(field)) {
			metadata.set(
				field as MetadataField,
				ontology.filter((x) => x.predicate === predicate).map((x) => x.object)
			);
		} else if (isStatistic(field)) {
			metadata.set(
				field as MetadataField,
				// in this case it's the object
				ontologies.filter((x) => x.object === predicate).map((x) => x.object).length
			);
		}
	}
	return metadata;
}

export const metadata = readable(
	(fields: MetadataFieldPredicate, ontology: Triple[], ontologies: Triple[]) =>
		getMetadata(fields, ontology, ontologies)
);
