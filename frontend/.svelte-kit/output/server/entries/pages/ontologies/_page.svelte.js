import { c as create_ssr_component, f as each, v as validate_component, a as subscribe } from "../../../chunks/index3.js";
import { i as indexFile } from "../../../chunks/data.js";
import { O as OntologyCard } from "../../../chunks/ontologyCard.js";
import { P as Pagination } from "../../../chunks/pagination.js";
import { o as ontologySearchStore, b as filteredOntologies, c as classSearchStore, S as Searchbar, a as SearchOptions } from "../../../chunks/search.js";
const OntologySearchResult = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { results } = $$props;
  let { offset } = $$props;
  let { limit } = $$props;
  if ($$props.results === void 0 && $$bindings.results && results !== void 0)
    $$bindings.results(results);
  if ($$props.offset === void 0 && $$bindings.offset && offset !== void 0)
    $$bindings.offset(offset);
  if ($$props.limit === void 0 && $$bindings.limit && limit !== void 0)
    $$bindings.limit(limit);
  return `${results.length > 0 ? `<div class="${"my-12 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-10"}">${each(results.slice(offset * limit, (offset + 1) * limit), (result) => {
    return `${validate_component(OntologyCard, "OntologyCard").$$render(
      $$result,
      {
        uri: result.uri,
        description: indexFile[result.uri].description,
        label: indexFile[result.uri].label,
        title: indexFile[result.uri].title,
        logo: indexFile[result.uri].logo
      },
      {},
      {}
    )}`;
  })}</div>` : `${slots.fallback ? slots.fallback({}) : ``}`}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $ontologySearchStore, $$unsubscribe_ontologySearchStore;
  let $filteredOntologies, $$unsubscribe_filteredOntologies;
  let $classSearchStore, $$unsubscribe_classSearchStore;
  $$unsubscribe_ontologySearchStore = subscribe(ontologySearchStore, (value) => $ontologySearchStore = value);
  $$unsubscribe_filteredOntologies = subscribe(filteredOntologies, (value) => $filteredOntologies = value);
  $$unsubscribe_classSearchStore = subscribe(classSearchStore, (value) => $classSearchStore = value);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-e5vceh_START -->${$$result.title = `<title>Ontologies</title>`, ""}<!-- HEAD_svelte-e5vceh_END -->`, ""}

<main class="${"min-h-screen"}">${validate_component(Searchbar, "Searchbar").$$render(
      $$result,
      {
        title: "Search Ontologies",
        kbShortcut: "i",
        searchQuery: $ontologySearchStore.searchQuery
      },
      {
        searchQuery: ($$value) => {
          $ontologySearchStore.searchQuery = $$value;
          $$settled = false;
        }
      },
      {
        "search-results": () => {
          return `<section class="${"container"}" slot="${"search-results"}">${validate_component(OntologySearchResult, "OntologySearchResult").$$render(
            $$result,
            {
              results: $filteredOntologies,
              offset: $ontologySearchStore.options.offset,
              limit: $ontologySearchStore.options.limit
            },
            {},
            {
              fallback: () => {
                return `<h2 slot="${"fallback"}" class="${"p-10 italic font-bold text-3xl"}">No matching Ontologies</h2>`;
              }
            }
          )}
			${$filteredOntologies.length > 0 ? `${validate_component(Pagination, "Pagination").$$render(
            $$result,
            {
              total: $filteredOntologies.length,
              limit: $ontologySearchStore.options.limit,
              offset: $ontologySearchStore.options.offset
            },
            {
              offset: ($$value) => {
                $ontologySearchStore.options.offset = $$value;
                $$settled = false;
              }
            },
            {}
          )}` : ``}</section>`;
        },
        "search-options": () => {
          return `<section class="${"container"}" slot="${"search-options"}">${validate_component(SearchOptions, "SearchOptions").$$render(
            $$result,
            {
              alphabeticalOrder: $ontologySearchStore.options.alphabeticalOrder,
              owlClass: $classSearchStore.options.owlClass,
              owlDatatypeProperty: $classSearchStore.options.owlDatatypeProperty,
              owlObjectProperty: $classSearchStore.options.owlObjectProperty,
              owlIndividuals: $classSearchStore.options.owlNamedIndividual
            },
            {
              alphabeticalOrder: ($$value) => {
                $ontologySearchStore.options.alphabeticalOrder = $$value;
                $$settled = false;
              },
              owlClass: ($$value) => {
                $classSearchStore.options.owlClass = $$value;
                $$settled = false;
              },
              owlDatatypeProperty: ($$value) => {
                $classSearchStore.options.owlDatatypeProperty = $$value;
                $$settled = false;
              },
              owlObjectProperty: ($$value) => {
                $classSearchStore.options.owlObjectProperty = $$value;
                $$settled = false;
              },
              owlIndividuals: ($$value) => {
                $classSearchStore.options.owlNamedIndividual = $$value;
                $$settled = false;
              }
            },
            {}
          )}</section>`;
        }
      }
    )}
</main>`;
  } while (!$$settled);
  $$unsubscribe_ontologySearchStore();
  $$unsubscribe_filteredOntologies();
  $$unsubscribe_classSearchStore();
  return $$rendered;
});
export {
  Page as default
};
