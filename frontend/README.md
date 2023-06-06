# Svelte Frontend

![node-current](https://img.shields.io/node/v/@sveltejs/kit)

This is the frontend for the Aether Portal. It is developed with Sveltekit,
which is used for SSG. It's main purpose is for providing a nice preview of the
most relevant ontologies from the Aether Project.

Consumed JSON files are located at `src/lib/assets/ontologies`

## :eyes: Preview without any installation needed

1. Create a pull request that contains the `build` label.

2. Download the `build` artifact from the actions tab.

```bash
mkdir app

mv build.zip app

cd app

unzip app

# Run a nginx container to host the static site
docker run --name preview-build -p 5000:80 --rm -v $(pwd):/usr/share/nginx/html:ro -d nginx

# Stop container, it will be removed due to the --rm option previously specified
docker stop preview-build
```

## :package: Install dependencies

```bash
npm install
pnpm install
yarn install
```

## :hammer: Build configuration

At [svelte.config.js](https://github.com/ProyectoAether/Aether-Portal/blob/main/frontend/svelte.config.js#L6-L7)
routes have to be EXPLICITLY specified to allow prerendering of dynamic routes.

```javascript
import indexFile from './src/lib/assets/ontologies/index.json' assert { type: 'json' };

const entries = Object.keys(indexFile).map((id) => `/ontologies/${id}`);
entries.push('/', '/submit', '/ontologies', '/search');

const config = {
	kit: {
		prerender: {
			entries
		}
	}
};

export default config;
```

## :sunglasses: Preview locally

```bash
npm run build && npm run preview
pnpm build && pnpm preview
yarn build && yarn preview
```

## :computer: Development

### :globe_with_meridians: Dev server

```bash
npm run dev
pnpm dev
yarn dev
```

### :star2: Lint and format

```bash
npm run format && npm run lint
pnpm format && pnpm lint
yarn format && yarn lint
```

### :test_tube: Testing

```bash
npm run test:unit
pnpm test:unit
yarn test:unit
```
