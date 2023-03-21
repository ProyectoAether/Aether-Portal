export { matchers } from './matchers.js';

export const nodes = [() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6')];

export const server_loads = [];

export const dictionary = {
	"/": [2],
	"/help": [3],
	"/ontologies": [4],
	"/ontologies/[id]": [5],
	"/search": [6]
};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};