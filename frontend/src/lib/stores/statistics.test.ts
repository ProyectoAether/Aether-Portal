import { numTotalClasses, numTotalTriples, numOntologies } from './statistics';
import { get } from 'svelte/store';

it('has 116 classes', async () => {
	expect(get(numTotalClasses)).toEqual(116);
});

it('has 836 triples', async () => {
	expect(get(numTotalTriples)).toEqual(836);
});

it('has 7 ontologies', async () => {
	expect(get(numOntologies)).toEqual(7);
});
