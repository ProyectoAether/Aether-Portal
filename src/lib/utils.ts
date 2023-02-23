import namespaces from "$lib/assets/namespaces.json"

export function isURI(sequence: string): boolean {
	try {
		new URL(sequence);
		return true;
	} catch {
		return false;
	}
}

export function compactURI(uri: string): string {
	if (!isURI(uri)) {
		return uri;
	}
	let tmp = uri;
	for (const [elUri, alias] of Object.entries(namespaces)) {
		tmp = tmp.replace(elUri, alias + ":");
	}
	return tmp;
}
export function expandURI(uri: string): string {
	if (!isURI(uri)) {
		return uri;
	}
	let tmp = uri;
	for (const [elUri, alias] of Object.entries(namespaces)) {
		tmp = tmp.replace(alias + ':', elUri);
	}
	return tmp;
}
