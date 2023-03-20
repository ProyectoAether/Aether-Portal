import { _ as __variableDynamicImportRuntimeHelper } from "../../../../chunks/dynamic-import-helper.js";
import { i as indexFile } from "../../../../chunks/data.js";
async function getOntology(uri, indexes) {
  return {
    [uri]: await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../../lib/assets/ontologies/BIGOWL.json": () => import("../../../../chunks/BIGOWL.js"), "../../../lib/assets/ontologies/BIGOWLAlgorithms.json": () => import("../../../../chunks/BIGOWLAlgorithms.js"), "../../../lib/assets/ontologies/BIGOWLData.json": () => import("../../../../chunks/BIGOWLData.js"), "../../../lib/assets/ontologies/BIGOWLProblems.json": () => import("../../../../chunks/BIGOWLProblems.js"), "../../../lib/assets/ontologies/BIGOWLWorkflows.json": () => import("../../../../chunks/BIGOWLWorkflows.js"), "../../../lib/assets/ontologies/Security Graph Databases Ontology.json": () => import("../../../../chunks/Security Graph Databases Ontology.js"), "../../../lib/assets/ontologies/index.json": () => import("../../../../chunks/data.js").then((n) => n.h), "../../../lib/assets/ontologies/moody - Multi-objective Optimization Ontology.json": () => import("../../../../chunks/moody - Multi-objective Optimization Ontology.js"), "../../../lib/assets/ontologies/namespaces.json": () => import("../../../../chunks/data.js").then((n) => n.j), "../../../lib/assets/ontologies/stats.json": () => import("../../../../chunks/data.js").then((n) => n.k) }), `../../../lib/assets/ontologies/${indexes[uri].filename}.json`)
  };
}
async function getOntologies(uri, imports, indexes) {
  const base = getOntology(uri, indexes);
  const promises = imports.map((el) => getOntology(el, indexes));
  promises.push(base);
  try {
    const datas = await Promise.all(promises);
    const ontologyData = {};
    for (const data of datas) {
      ontologyData[Object.keys(data)[0]] = Object.values(data)[0].default;
    }
    return ontologyData;
  } catch {
    throw Error("Failed fetching ontology data");
  }
}
const load = async ({ url }) => {
  const result = {
    statusCode: 200
  };
  let uri = url.searchParams.get("uri");
  if (uri === null || uri === void 0) {
    result.statusCode = 404;
    return result;
  }
  if (url.searchParams.get("hasTag") === "") {
    uri = uri + "#";
  }
  if (!Object.keys(indexFile).includes(uri)) {
    result.statusCode = 404;
    return result;
  }
  result.uri = uri;
  const imports = indexFile[uri].imports;
  result.ontologies = await getOntologies(uri, imports, indexFile);
  result.metadata = indexFile[uri];
  return result;
};
export {
  load
};
