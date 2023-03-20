import { R as RDFS_SUBCLASS_OF, O as OWL_THING, a as RDF_TYPE, b as OWL_CLASS } from "./data.js";
function formatURI(uri) {
  if (uri[uri.length - 1] === "#") {
    uri = uri.slice(0, -1) + "&hasTag";
  }
  return uri;
}
class QuadSorter {
  triples;
  constructor(triples) {
    this.triples = triples;
  }
  alphabeticalSort() {
    this.triples = this.triples.sort(
      (a, b) => a.subject.toLowerCase() >= b.subject.toLowerCase() ? 1 : -1
    );
    return this;
  }
  reverseAlphabeticalSort() {
    this.triples = this.triples.sort(
      (a, b) => a.subject.toLowerCase() < b.subject.toLowerCase() ? 1 : -1
    );
    return this;
  }
  getResult() {
    return this.triples;
  }
}
function getUniformURI(uri) {
  if (uri[uri.length - 1] === "/" || uri[uri.length - 1] === "#") {
    return uri.slice(0, -1);
  }
  return uri;
}
function isURI(sequence) {
  if (sequence === void 0) {
    return false;
  }
  try {
    new URL(sequence);
    return true;
  } catch {
    return false;
  }
}
function getRootsURI(triples) {
  const subClasses = triples.filter((el) => el.predicate === RDFS_SUBCLASS_OF && el.object !== OWL_THING).map((el) => el.subject);
  const classes = triples.filter((el) => el.predicate === RDF_TYPE && el.object === OWL_CLASS).map((el) => el.subject);
  return classes.filter((el) => !subClasses.includes(el));
}
function getChildren(classURI, triples) {
  return triples.filter((el) => el.predicate === RDFS_SUBCLASS_OF && el.object === classURI).map((el) => el.subject);
}
function compactURI(uri, namespaces, sep = "") {
  if (!isURI(uri) || uri.length === 0) {
    return uri;
  }
  if (uri[uri.length - 1] !== "/") {
    uri += "/";
  }
  const isOntology = Object.keys(namespaces).find((el) => el === uri);
  if (isOntology) {
    return uri.replace(isOntology, namespaces[isOntology]);
  }
  const nm = Object.keys(namespaces).find((el) => uri.includes(el));
  if (!nm) {
    return uri.slice(0, -1);
  }
  return uri.replace(nm, namespaces[nm] + sep).slice(0, -1);
}
export {
  QuadSorter as Q,
  getRootsURI as a,
  getUniformURI as b,
  compactURI as c,
  formatURI as f,
  getChildren as g,
  isURI as i
};
