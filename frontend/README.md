# Svelte Frontend

![node-current](https://img.shields.io/node/v/@sveltejs/kit)

This is the frontend for the Aether Portal. It is developed with Sveltekit,
which is used for SSG. It's main purpose is for providing a nice preview of the
most relevant ontologies from the Aether Project.

Consumed JSON files are located at `src/lib/assets/ontologies`

## :package: Install dependencies

```bash
npm install
pnpm install
yarn install
```

## :hammer: Build configuration

At `svelte.config.js` routes needs to be specify EXPLICITLY to allow prerendering of
dynamic routes. Note that importing JSON files is still experimental in Node.

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
