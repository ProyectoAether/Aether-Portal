# Aether Portal ![](https://img.shields.io/twitter/follow/aether_social?style=social)

[![Code style: black](https://img.shields.io/badge/code%20style-black-000000.svg)](https://github.com/psf/black)
![node-current](https://img.shields.io/node/v/@sveltejs/kit)
![PyPI - Python Version](https://img.shields.io/pypi/pyversions/rdflib)
![](https://github.com/ProyectoAether/Aether-Portal/actions/workflows/deploy.yml/badge.svg)

_`Aether Portal` is an ontology repository for visualizing and previewing the most relevant
ontologies from the [Aether Project](https://aether.es/)._

## Quickstart

[ProyectoAether.github.io/Aether-Portal](https://ProyectoAether.github.io/Aether-Portal)

## :computer: Development

### :package: Install dependencies

```bash
# Frontend
cd frontend
npm install

# Scripts
cd scripts

# a) using venv module
python -m venv ontserpy
source ontserpy/bin/activate

# b) using pyenv
pyenv virtualenv ontserpy
pyenv activate ontserpy
pip install -r requirements.txt
```

### :star2: Lint and format

```bash
# Frontend
cd frontend
npm run format && npm run lint

# Scripts
cd scripts
black . && mypy .
```

### :test_tube: Testing

```bash
# Frontend
npm run test:unit

# Script
cd scripts
pytest
```

### :globe_with_meridians: Dev server

```bash
npm run dev
```

### :whale: Try out production build

```bash
# https://docs.docker.com/get-docker/
docker build -t aether-portal .
docker run -p 5000:80 -d --rm --name AetherPortal aether-portal
docker stop AetherPortal
```

## More information about AETHER

[Aether Project](aether.es/)

[El proyecto nacional 'Aether', punto de encuentro de cinco de los principales grupos de I+D en análisis de datos y Big Data](https://www.uma.es/sala-de-prensa/noticias/el-proyecto-nacional-aether-punto-de-encuentro-de-cinco-de-los-principales-grupos-de-id-en-analisis-de-datos-y-big-data/)

[Aether-US:Una aproximación holística de smart data para el análisis de datos guiado por el contexto: procesos de negocio inteligentes](https://investigacion.us.es/sisius/sis_proyecto.php?idproy=33855)
