export const manifest = {
	appDir: "_app",
	appPath: "Aether-Portal/_app",
	assets: new Set([".nojekyll","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-28fc1312.js","imports":["_app/immutable/start-28fc1312.js","_app/immutable/chunks/index-6b1a46d4.js","_app/immutable/chunks/singletons-f2c43e84.js","_app/immutable/chunks/paths-324d59c6.js","_app/immutable/chunks/preload-helper-41c905a7.js","_app/immutable/chunks/control-e7f5239e.js"],"stylesheets":[],"fonts":[]},
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
