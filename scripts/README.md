# OntoSerPy

[![Code style: black](https://img.shields.io/badge/code%20style-black-000000.svg)](https://github.com/psf/black)
![PyPI - Python Version](https://img.shields.io/pypi/pyversions/rdflib)

This is a script used for serializing OWL ontology into multiple non standard
format JSON files. It will calculate multiple ontologies' statistics,
compute their metadata and collection of triples.

THIS SCRIPT IS INTENDED to be used in conjunction with Aether Portal frontend
page, but it may be useful for other projects as well as it provides a naive
interface for consuming ontologies' data.

## :package: Dependencies

```bash
# a) using venv module
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt

# b) using pyenv
pyenv virtualenv venv
pyenv activate venv
pip install -r requirements.txt
```

## :computer: Development

### :test_tube: Testing

```bash
pytest
```

### :star2: Formatting and linting

```bash
black ontoserpy && mypy ontoserpy
```
