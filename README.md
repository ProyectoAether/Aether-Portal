#Aether Portal ![](https://img.shields.io/twitter/follow/aether_social?style=social)

![](https://github.com/ProyectoAether/Aether-Portal/actions/workflows/deploy.yml/badge.svg)

_`Aether Portal` is an ontology repository for visualizing and previewing the most relevant
ontologies from the [Aether Project](https://aether.es/)._

[ProyectoAether.github.io/Aether-Portal](https://ProyectoAether.github.io/Aether-Portal)

## :sparkles: Features

- Search for class
- Search for ontology
- Ontology's class hierarchy
- Ontology's metadata representation
- Ontology's related statistics

## :whale: Try out production build

_It uses docker and nginx to serve static content locally_

```bash
# https://docs.docker.com/get-docker/
docker build -t aether-portal .

# Deploy container locally on 127.0.0.1:5000
docker run -p 5000:80 -d --rm --name AetherPortal aether-portal

# Shutdown container
docker stop AetherPortal
```

## :computer: Development

This repository has 2 separate modules:

- [frontend](https://github.com/ProyectoAether/Aether-Portal/tree/main/frontend)
- [scripts](https://github.com/ProyectoAether/Aether-Portal/tree/main/scripts)

In order to run the development app:

```bash
# In the project root directory
# These steps should be performed after installing the dependencies

mkdir frontend/src/lib/assets/ontologies
PYTHONPATH=scripts python3 scripts/ontoserpy/main.py ontologies.txt frontend/src/lib/assets/ontologies
cd frontend
pnpm dev
```

## :newspaper: More information about AETHER

- [Aether Project](aether.es/)
- [El proyecto nacional 'Aether', punto de encuentro de cinco de los principales grupos de I+D en análisis de datos y Big Data](https://www.uma.es/sala-de-prensa/noticias/el-proyecto-nacional-aether-punto-de-encuentro-de-cinco-de-los-principales-grupos-de-id-en-analisis-de-datos-y-big-data/)
- [Aether-US:Una aproximación holística de smart data para el análisis de datos guiado por el contexto: procesos de negocio inteligentes](https://investigacion.us.es/sisius/sis_proyecto.php?idproy=33855)
