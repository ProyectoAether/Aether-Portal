import type { Namespace, Triple } from '$lib/assets/data';
import { isURI, compactURI, expandURI } from '$lib/utils';
import { beforeEach, describe, expect, it } from 'vitest';

declare module 'vitest' {
	export interface TestContext {
		triples: Triple[];
		namespaces: Namespace;
		uriFormatter: URIFormatter;
	}
}

beforeEach(async (context) => {
	context.triples = [
		{ subject: 'http://someuri', predicate: 'http://someuri', object: 'http://someuri' },
		{ subject: 'http://bar', predicate: 'http://bar', object: 'http://bar' },
		{ subject: 'http://bar', predicate: 'http://foo', object: 'http://foo' }
	];
	context.namespaces = {
		'http://bar': 'baralias',
		'http://foo': 'fooalias'
	};
});
describe('isURI', async () => {
	it('returns true if isURI', async () => {
		expect(isURI('http://foo.com')).toBe(true);
	});
	it('returns false if is not URI', async () => {
		expect(isURI('foo')).toBe(false);
	});
});

describe('compactURI', async () => {
	it('compacts on if in namespaces object', async ({ namespaces }) => {
		expect(compactURI('http://foo', namespaces)).toBe('fooalias:');
	});
	it('does not compact if not in namespaces object', async ({ namespaces }) => {
		expect(compactURI('http://hello', namespaces)).toBe('http://hello');
	});
});
describe('expandURI', async () => {
	it('expand on if in namespaces object', async ({ namespaces }) => {
		expect(expandURI('fooalias:', namespaces)).toBe('http://foo');
	});
	it('does not expand if not in namespaces object', async ({ namespaces }) => {
		expect(expandURI('hello:', namespaces)).toBe('hello:');
	});
});
describe('URIFormatter', async () => {
	it('gets all triples', async ({ triples, namespaces }) => {
		const expected = [
			{ subject: 'http://someuri', predicate: 'http://someuri', object: 'http://someuri' },
			{ subject: 'http://bar', predicate: 'http://bar', object: 'http://bar' },
			{ subject: 'http://bar', predicate: 'http://foo', object: 'http://foo' }
		];
		const uriFormatter = new URIFormatter(triples, namespaces);
		expect(uriFormatter.triples).toStrictEqual(expected);
	});
	it('compacts URI', async ({ triples, namespaces }) => {
		const expected = [
			{ subject: 'http://someuri', predicate: 'http://someuri', object: 'http://someuri' },
			{ subject: 'baralias:', predicate: 'baralias:', object: 'baralias:' },
			{ subject: 'baralias:', predicate: 'fooalias:', object: 'fooalias:' }
		];

		const uriFormatter = new URIFormatter(triples, namespaces);
		expect(uriFormatter.getCompactedURI()).toStrictEqual(expected);
	});
});
