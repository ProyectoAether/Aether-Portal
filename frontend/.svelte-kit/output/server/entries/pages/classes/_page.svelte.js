import { c as create_ssr_component, f as each, e as escape, d as add_attribute, v as validate_component, a as subscribe } from "../../../chunks/index3.js";
import { P as Pagination } from "../../../chunks/pagination.js";
import { c as classSearchStore, f as filteredClasses, S as Searchbar, a as SearchOptions } from "../../../chunks/search.js";
import { b as base } from "../../../chunks/paths.js";
import { n as namespaces } from "../../../chunks/data.js";
import { L as LinkIcon } from "../../../chunks/linkIcon.js";
import { c as compactURI, f as formatURI } from "../../../chunks/utils.js";
const ClassSearchResult = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { compacted } = $$props;
  let { results } = $$props;
  let { offset } = $$props;
  let { limit } = $$props;
  if ($$props.compacted === void 0 && $$bindings.compacted && compacted !== void 0)
    $$bindings.compacted(compacted);
  if ($$props.results === void 0 && $$bindings.results && results !== void 0)
    $$bindings.results(results);
  if ($$props.offset === void 0 && $$bindings.offset && offset !== void 0)
    $$bindings.offset(offset);
  if ($$props.limit === void 0 && $$bindings.limit && limit !== void 0)
    $$bindings.limit(limit);
  return `${results.length > 0 ? `<div class="${"overflow-x-auto"}"><table class="${"table w-full"}"><thead><th></th>
				<th>Class Name</th>
				<th>Ontology</th>
				<th>Documentation</th></thead>
			<tbody>${each(results.slice(offset * limit, (offset + 1) * limit), (result, index) => {
    return `<tr class="${"hover"}"><th>${escape(index + 1 + limit * offset)}</th>
						<td><p class="${"whitespace-nowrap"}">${escape(compacted.compacted ? compactURI(result.uri, namespaces, compacted.sep) : result.uri)}
							</p></td>
						<td><a href="${escape(base, true) + "/ontologies/previews?uri=" + escape(formatURI(result.ontologyURI), true)}" class="${"link link-primary link-hover whitespace-nowrap"}">${escape(compacted.compacted ? compactURI(result.ontologyURI, namespaces, "") : result.ontologyURI)}</a></td>
						<td class="${"flex"}"><a${add_attribute("href", formatURI(result.uri), 0)} class="${"link link-primary whitespace-nowrap bg-primary-focus p-2 rounded-md hover:bg-base-300 transition-colors"}">${validate_component(LinkIcon, "LinkIcon").$$render($$result, {}, {}, {})}</a></td>
					</tr>`;
  })}</tbody></table></div>` : `${slots.fallback ? slots.fallback({}) : ``}`}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $classSearchStore, $$unsubscribe_classSearchStore;
  let $filteredClasses, $$unsubscribe_filteredClasses;
  $$unsubscribe_classSearchStore = subscribe(classSearchStore, (value) => $classSearchStore = value);
  $$unsubscribe_filteredClasses = subscribe(filteredClasses, (value) => $filteredClasses = value);
  let compactedClass = { compacted: true, sep: ":" };
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-1vnui9s_START -->${$$result.title = `<title>Classes</title>`, ""}<!-- HEAD_svelte-1vnui9s_END -->`, ""}

<main>${validate_component(Searchbar, "Searchbar").$$render(
      $$result,
      {
        title: "Search Classes",
        kbShortcut: "k",
        searchQuery: $classSearchStore.searchQuery
      },
      {
        searchQuery: ($$value) => {
          $classSearchStore.searchQuery = $$value;
          $$settled = false;
        }
      },
      {
        "search-results": () => {
          return `<section class="${"container"}" slot="${"search-results"}">${validate_component(ClassSearchResult, "ClassSearchResult").$$render(
            $$result,
            {
              results: $filteredClasses,
              offset: $classSearchStore.options.offset,
              limit: $classSearchStore.options.limit,
              compacted: compactedClass
            },
            {
              compacted: ($$value) => {
                compactedClass = $$value;
                $$settled = false;
              }
            },
            {
              fallback: () => {
                return `<h2 slot="${"fallback"}" class="${"p-10 italic font-bold text-3xl"}">No matching Classes</h2>`;
              }
            }
          )}
			${$filteredClasses.length > 0 ? `<div class="${"py-4"}">${validate_component(Pagination, "Pagination").$$render(
            $$result,
            {
              total: $filteredClasses.length,
              limit: $classSearchStore.options.limit,
              offset: $classSearchStore.options.offset
            },
            {
              offset: ($$value) => {
                $classSearchStore.options.offset = $$value;
                $$settled = false;
              }
            },
            {}
          )}</div>` : ``}</section>`;
        },
        "search-options": () => {
          return `<section class="${"container"}" slot="${"search-options"}">${validate_component(SearchOptions, "SearchOptions").$$render(
            $$result,
            {
              compacted: compactedClass.compacted,
              alphabeticalOrder: $classSearchStore.options.alphabeticalOrder,
              owlClass: $classSearchStore.options.owlClass,
              owlDatatypeProperty: $classSearchStore.options.owlDatatypeProperty,
              owlObjectProperty: $classSearchStore.options.owlObjectProperty,
              owlIndividuals: $classSearchStore.options.owlNamedIndividual
            },
            {
              compacted: ($$value) => {
                compactedClass.compacted = $$value;
                $$settled = false;
              },
              alphabeticalOrder: ($$value) => {
                $classSearchStore.options.alphabeticalOrder = $$value;
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
    )}</main>`;
  } while (!$$settled);
  $$unsubscribe_classSearchStore();
  $$unsubscribe_filteredClasses();
  return $$rendered;
});
export {
  Page as default
};
