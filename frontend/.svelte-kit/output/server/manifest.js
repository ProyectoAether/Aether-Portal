export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-e376330c.js","imports":["_app/immutable/start-e376330c.js","_app/immutable/chunks/index-60976d40.js","_app/immutable/chunks/singletons-f9e844ba.js","_app/immutable/chunks/preload-helper-41c905a7.js","_app/immutable/chunks/paths-596d0288.js","_app/immutable/chunks/control-e7f5239e.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
