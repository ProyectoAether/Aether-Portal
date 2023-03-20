import { c as create_ssr_component, f as validate_store, a as subscribe, e as escape, d as add_attribute } from "./index3.js";
import { p as page } from "./stores.js";
import { _ as __variableDynamicImportRuntimeHelper } from "./dynamic-import-helper.js";
import { w as writable, d as derived } from "./index2.js";
import { i as indexFile, c as OWL_ONTOLOGY, d as OWL_NAMED_INDIVIDUAL, e as OWL_DATATYPE_PROPERTY, f as OWL_OBJECT_PROPERTY, b as OWL_CLASS } from "./data.js";
import fuzzysort from "fuzzysort";
import { Q as QuadSorter } from "./utils.js";
const Searchbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  validate_store(page, "page");
  $$unsubscribe_page = subscribe(page, (value) => value);
  let { searchQuery } = $$props;
  let { title } = $$props;
  let { kbShortcut } = $$props;
  let searchInput;
  if ($$props.searchQuery === void 0 && $$bindings.searchQuery && searchQuery !== void 0)
    $$bindings.searchQuery(searchQuery);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.kbShortcut === void 0 && $$bindings.kbShortcut && kbShortcut !== void 0)
    $$bindings.kbShortcut(kbShortcut);
  $$unsubscribe_page();
  return `<form class="${"container p-10"}"><h2 class="${"text-2xl font-semibold py-2 px-2"}">${escape(title)}</h2>
	<div data-testid="${"shortcut-hint"}" class="${"italic bg-gray-200 rounded-lg px-4 py-2 inline-block"}"><span class="${"text-black"}">Press</span>
		<kbd class="${"kbd"}">Ctrl</kbd>
		<span class="${"text-black"}">+</span>
		<kbd class="${"kbd"}">${escape(kbShortcut)}</kbd>
		<span class="${"text-black"}">to start searching</span></div>
	${slots["search-options"] ? slots["search-options"]({}) : ``}
	<div class="${"mb-4 flex items-center input input-bordered w-full max-w-x rounded-lg shadow"}"><div class="${"pl-2"}"><svg class="${"fill-current w-6 h-6"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 24 24"}"><path class="${"heroicon-ui"}" d="${"M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"}"></path></svg></div>
		<input data-testid="${"search-input"}" class="${"w-full focus:outline-none py-2 px-2"}" type="${"text"}" tabindex="${"0"}"${add_attribute("placeholder", title, 0)} autocomplete="${"off"}"${add_attribute("value", searchQuery, 0)}${add_attribute("this", searchInput, 0)}></div>
	${slots["search-results"] ? slots["search-results"]({}) : ``}</form>`;
});
const SearchOptions = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { compacted } = $$props;
  let { alphabeticalOrder } = $$props;
  if ($$props.compacted === void 0 && $$bindings.compacted && compacted !== void 0)
    $$bindings.compacted(compacted);
  if ($$props.alphabeticalOrder === void 0 && $$bindings.alphabeticalOrder && alphabeticalOrder !== void 0)
    $$bindings.alphabeticalOrder(alphabeticalOrder);
  return `<div class="${"flex flex-wrap gap-4 py-5"}">${compacted !== void 0 ? `<div class="${"form-control "}"><label class="${"cursor-pointer label"}"><span class="${"label-text ml-auto mr-2"}">Compact</span>
				<input type="${"checkbox"}" class="${"toggle toggle-primary"}"${add_attribute("checked", compacted, 1)}></label></div>` : ``}
	<div class="${"form-control "}"><label class="${"cursor-pointer label"}"><span class="${"label-text ml-auto mr-2"}">Z-A</span>
			<input type="${"checkbox"}" class="${"toggle toggle-primary"}"${add_attribute("checked", alphabeticalOrder, 1)}>
			<span class="${"label-text mr-auto ml-2"}">A-Z</span></label></div></div>`;
});
function filter(query, data, guard, keys) {
  return fuzzysort.go(query, data, { keys, all: true }).filter((el) => el[0] && guard(el.obj) && (el.score === -Infinity || el.score > -300)).map((el) => el.obj);
}
async function getAllOntologies(index) {
  const imports = Object.entries(index).map(async ([uri, file]) => {
    const module = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../assets/ontologies/BIGOWL.json": () => import("./BIGOWL.js"), "../assets/ontologies/BIGOWLAlgorithms.json": () => import("./BIGOWLAlgorithms.js"), "../assets/ontologies/BIGOWLData.json": () => import("./BIGOWLData.js"), "../assets/ontologies/BIGOWLProblems.json": () => import("./BIGOWLProblems.js"), "../assets/ontologies/BIGOWLWorkflows.json": () => import("./BIGOWLWorkflows.js"), "../assets/ontologies/Security Graph Databases Ontology.json": () => import("./Security Graph Databases Ontology.js"), "../assets/ontologies/index.json": () => import("./data.js").then((n) => n.h), "../assets/ontologies/moody - Multi-objective Optimization Ontology.json": () => import("./moody - Multi-objective Optimization Ontology.js"), "../assets/ontologies/namespaces.json": () => import("./data.js").then((n) => n.j), "../assets/ontologies/stats.json": () => import("./data.js").then((n) => n.k) }), `../assets/ontologies/${file.filename}.json`);
    const triples = module.default;
    return triples.map((el) => ({ ...el, ontology: uri }));
  });
  return Promise.all(imports);
}
const ontologies = (await Promise.all(await getAllOntologies(indexFile))).flat();
const defaultSearchOptions = {
  owlClass: true,
  owlDatatypeProperty: true,
  owlObjectProperty: true,
  owlNamedIndividual: true,
  alphabeticalOrder: true,
  limit: 10,
  offset: 0
};
const classSearchStore = writable({
  data: ontologies,
  searchQuery: "",
  options: structuredClone(defaultSearchOptions)
});
const ontologySearchStore = writable({
  data: ontologies,
  searchQuery: "",
  options: structuredClone(defaultSearchOptions)
});
const namespaces = [
  "https://brickschema.org/schema/Brick#",
  "http://www.w3.org/ns/csvw#",
  "http://purl.org/dc/elements/1.1/",
  "http://www.w3.org/ns/dcat#",
  "http://purl.org/dc/dcmitype/",
  "http://purl.org/dc/terms/",
  "http://purl.org/dc/dcam/",
  "http://purl.org/net/opmv/ns#",
  "http://usefulinc.com/ns/doap#",
  "http://xmlns.com/foaf/0.1/",
  "http://www.opengis.net/ont/geosparql#",
  "http://www.w3.org/ns/odrl/2/",
  "http://www.w3.org/ns/org#",
  "http://www.w3.org/ns/dx/prof/",
  "http://www.w3.org/ns/prov#",
  "http://purl.org/linked-data/cube#",
  "https://schema.org/",
  "http://www.w3.org/ns/shacl#",
  "http://www.w3.org/2004/02/skos/core#",
  "http://www.w3.org/ns/sosa/",
  "http://www.w3.org/ns/ssn/",
  "http://www.w3.org/2006/time#",
  "http://purl.org/vocab/vann/",
  "http://rdfs.org/ns/void#",
  "http://www.w3.org/2002/07/owl#",
  "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
  "http://www.w3.org/2000/01/rdf-schema#",
  "http://www.w3.org/2001/XMLSchema#",
  "http://www.w3.org/XML/1998/namespace"
];
const filteredClasses = derived(classSearchStore, classSearchHandler);
const filteredOntologies = derived(ontologySearchStore, ontologySearchHandler);
function isCommonVocab(element) {
  for (const n of namespaces) {
    if (element.includes(n)) {
      return true;
    }
  }
  return false;
}
function ontologySearchHandler(searchStore) {
  const { searchQuery, data: ontologies2, options } = searchStore;
  const queryFiltered = filter(
    searchQuery,
    ontologies2,
    (el) => (el.object === OWL_ONTOLOGY || el.object === OWL_NAMED_INDIVIDUAL || el.object === OWL_DATATYPE_PROPERTY || el.object === OWL_OBJECT_PROPERTY) && !isCommonVocab(el.subject),
    ["subject", "predicate", "object"]
  );
  const sorter = new QuadSorter(queryFiltered);
  const sortedResult = options.alphabeticalOrder ? sorter.alphabeticalSort().getResult() : sorter.reverseAlphabeticalSort().getResult();
  const uris = new Set(sortedResult.map((el) => el.ontology));
  const results = Array.from(uris).map((el) => ({
    uri: el
  }));
  return results;
}
function classSearchHandler(searchStore) {
  const { searchQuery, data: ontologies2, options } = searchStore;
  const queryFiltered = filter(
    searchQuery,
    ontologies2,
    (el) => el.object === OWL_CLASS && !isCommonVocab(el.subject),
    ["subject", "ontologyURI"]
  );
  const sorter = new QuadSorter(queryFiltered);
  const result = options.alphabeticalOrder ? sorter.alphabeticalSort().getResult() : sorter.reverseAlphabeticalSort().getResult();
  return Array.from(new Set(result.map((el) => ({ uri: el.subject, ontologyURI: el.ontology }))));
}
export {
  Searchbar as S,
  SearchOptions as a,
  filteredOntologies as b,
  classSearchStore as c,
  filteredClasses as f,
  ontologySearchStore as o
};
