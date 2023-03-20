import { c as create_ssr_component, f as each, d as add_attribute, e as escape, v as validate_component } from "../../../../chunks/index3.js";
import { e as error } from "../../../../chunks/index.js";
import { a as RDF_TYPE, d as OWL_NAMED_INDIVIDUAL, b as OWL_CLASS, e as OWL_DATATYPE_PROPERTY, f as OWL_OBJECT_PROPERTY, g as namespacesFile, n as namespaces, i as indexFile } from "../../../../chunks/data.js";
import { c as compactURI, g as getChildren, a as getRootsURI, b as getUniformURI, i as isURI } from "../../../../chunks/utils.js";
import { L as LinkIcon } from "../../../../chunks/linkIcon.js";
import { P as Pagination } from "../../../../chunks/pagination.js";
const MetadataTableRow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { value } = $$props;
  let { field } = $$props;
  let { imports } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.field === void 0 && $$bindings.field && field !== void 0)
    $$bindings.field(field);
  if ($$props.imports === void 0 && $$bindings.imports && imports !== void 0)
    $$bindings.imports(imports);
  return `${Array.isArray(value) ? `${each(value, (v) => {
    return `${field === "imports" ? `<div class="${"form-control"}"><label class="${"cursor-pointer label justify-start gap-2"}"><input type="${"checkbox"}"${add_attribute("value", v, 0)} name="${"imported"}" class="${"checkbox checkbox-primary"}"${~imports.indexOf(v) ? add_attribute("checked", true, 1) : ""}>
					<span class="${"label-text"}">${escape(v)}</span></label>
			</div>` : `<p>${escape(v)}</p>`}`;
  })}` : `<p>${escape(value)}</p>`}`;
});
const metadataTable_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "table.svelte-ltcn9p{font-size:clamp(0.5rem, -0.875rem + 8.333vw, 1rem)}",
  map: null
};
const MetadataTable = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let stats;
  let { metadata } = $$props;
  let { triples } = $$props;
  let { imports } = $$props;
  const stringFields = [
    "title",
    "uri",
    "label",
    "prefix",
    "description",
    "creator",
    "publisher",
    "created",
    "rights",
    "imports"
  ];
  function getStats(imported) {
    let stats2 = {
      numIndividuals: 0,
      numClasses: 0,
      numDatatypeProperties: 0,
      numObjecProperties: 0
    };
    const options = {
      [OWL_NAMED_INDIVIDUAL]: () => stats2.numIndividuals = ++stats2.numIndividuals,
      [OWL_CLASS]: () => stats2.numClasses = ++stats2.numClasses,
      [OWL_DATATYPE_PROPERTY]: () => stats2.numDatatypeProperties = ++stats2.numDatatypeProperties,
      [OWL_OBJECT_PROPERTY]: () => stats2.numObjecProperties = ++stats2.numObjecProperties
    };
    for (const { predicate, object } of imported) {
      if (predicate !== RDF_TYPE) {
        continue;
      }
      const adder = options[object];
      if (adder) {
        adder();
      }
    }
    return stats2;
  }
  if ($$props.metadata === void 0 && $$bindings.metadata && metadata !== void 0)
    $$bindings.metadata(metadata);
  if ($$props.triples === void 0 && $$bindings.triples && triples !== void 0)
    $$bindings.triples(triples);
  if ($$props.imports === void 0 && $$bindings.imports && imports !== void 0)
    $$bindings.imports(imports);
  $$result.css.add(css$2);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    stats = getStats(triples);
    $$rendered = `<table class="${"table table-normal svelte-ltcn9p"}"><tbody>${each(stringFields, (field) => {
      return `<tr><th class="${"whitespace-pre-wrap bg-base-200 uppercase"}">${escape(field)}</th>
				<td class="${"whitespace-pre-wrap"}">${validate_component(MetadataTableRow, "MetadataTableRow").$$render(
        $$result,
        { field, value: metadata[field], imports },
        {
          imports: ($$value) => {
            imports = $$value;
            $$settled = false;
          }
        },
        {}
      )}</td>
			</tr>`;
    })}
		<tr><th class="${"whitespace-pre-wrap bg-base-200 uppercase"}">Number of classes</th>
			<td class="${"whitespace-pre-wrap"}">${validate_component(MetadataTableRow, "MetadataTableRow").$$render(
      $$result,
      {
        field: "Number of classes",
        value: stats.numClasses,
        imports
      },
      {
        imports: ($$value) => {
          imports = $$value;
          $$settled = false;
        }
      },
      {}
    )}</td></tr>
		<tr><th class="${"whitespace-pre-wrap bg-base-200 uppercase"}">Number of datatype properties</th>
			<td class="${"whitespace-pre-wrap"}">${validate_component(MetadataTableRow, "MetadataTableRow").$$render(
      $$result,
      {
        field: "Number of datatype properties",
        value: stats.numDatatypeProperties,
        imports
      },
      {
        imports: ($$value) => {
          imports = $$value;
          $$settled = false;
        }
      },
      {}
    )}</td></tr>
		<tr><th class="${"whitespace-pre-wrap bg-base-200 uppercase"}">Number of object properties</th>
			<td class="${"whitespace-pre-wrap"}">${validate_component(MetadataTableRow, "MetadataTableRow").$$render(
      $$result,
      {
        field: "Number of object properties",
        value: stats.numObjecProperties,
        imports
      },
      {
        imports: ($$value) => {
          imports = $$value;
          $$settled = false;
        }
      },
      {}
    )}</td></tr>

		<tr><th class="${"whitespace-pre-wrap bg-base-200 uppercase"}">Number of named individuals</th>
			<td class="${"whitespace-pre-wrap"}">${validate_component(MetadataTableRow, "MetadataTableRow").$$render(
      $$result,
      {
        field: "Number of named individuals",
        value: stats.numIndividuals,
        imports
      },
      {
        imports: ($$value) => {
          imports = $$value;
          $$settled = false;
        }
      },
      {}
    )}</td></tr></tbody>
</table>`;
  } while (!$$settled);
  return $$rendered;
});
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const id = crypto.randomUUID();
  let { value } = $$props;
  let { title } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  return `<a${add_attribute("href", "#" + id, 0)} class="${"italic inline-block w-[200px] md:w-[260px] 2xl:w-[300px]"}"><p class="${"truncate"}">${escape(value)}</p></a>
<div class="${"modal"}"${add_attribute("id", id, 0)}><div class="${"modal-box"}"><h3 class="${"font-semibold text-lg whitespace-pre-wrap"}">${escape(compactURI(title, namespacesFile))}</h3>
		<p class="${"py-4 whitespace-pre-wrap"}">${escape(value)}</p>
		<div class="${"modal-action"}"><a${add_attribute("href", "#ontology-input", 0)} class="${"btn"}">OK</a></div></div></div>`;
});
function isURL(target) {
  try {
    new URL(target);
    return true;
  } catch {
    return false;
  }
}
const TriplesTable = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { compacted } = $$props;
  let { offset } = $$props;
  let { limit: limit2 } = $$props;
  let { triples } = $$props;
  if ($$props.compacted === void 0 && $$bindings.compacted && compacted !== void 0)
    $$bindings.compacted(compacted);
  if ($$props.offset === void 0 && $$bindings.offset && offset !== void 0)
    $$bindings.offset(offset);
  if ($$props.limit === void 0 && $$bindings.limit && limit2 !== void 0)
    $$bindings.limit(limit2);
  if ($$props.triples === void 0 && $$bindings.triples && triples !== void 0)
    $$bindings.triples(triples);
  return `<div class="${"overflow-x-auto my-10"}"><table id="${"data"}" data-testid="${"triples-table"}" class="${"table table-compact w-full"}"><thead><tr><th></th>
				<th>Subject</th>
				<th>Predicate</th>
				<th>Object</th></tr></thead>
		<tbody>${each(triples.slice(offset * limit2, (offset + 1) * limit2), (triple, index) => {
    return `<tr><th>${escape(index + 1 + limit2 * offset)}</th>
					<td><div class="${"flex items-center gap-3"}"><span>${escape(compacted.compacted ? compactURI(triple.subject, namespaces, compacted.sep) : triple.subject)}</span>
							<a${add_attribute("href", triple.subject, 0)} class="${"link link-primary whitespace-nowrap bg-primary-focus p-2 rounded-md hover:bg-base-300 transition-colors"}" rel="${"noreferrer"}" target="${"_blank"}">${validate_component(LinkIcon, "LinkIcon").$$render($$result, {}, {}, {})}</a>
						</div></td>
					<td><div class="${"flex items-center gap-3"}"><span>${escape(compacted.compacted ? compactURI(triple.predicate, namespaces, compacted.sep) : triple.predicate)}</span>
						</div></td>
					<td class="${"whitespace-nowrap"}">${isURL(triple["object"]) ? `<div class="${"flex items-center gap-3"}"><span>${escape(compacted.compacted ? compactURI(triple.object, namespaces, compacted.sep) : triple.object)}</span>
								<a${add_attribute("href", triple.object, 0)} rel="${"noreferrer"}" class="${"link link-primary whitespace-nowrap bg-primary-focus p-2 rounded-md hover:bg-base-300 transition-colors"}" target="${"_blank"}">${validate_component(LinkIcon, "LinkIcon").$$render($$result, {}, {}, {})}</a>
							</div>` : `${triple.object.length > 30 && compactURI(triple.subject, namespaces, compacted.sep) != null ? `${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        value: triple.object,
        title: compacted.compacted ? compactURI(triple.subject, namespaces, compacted.sep) : triple.subject
      },
      {},
      {}
    )}` : `${escape(compacted.compacted ? compactURI(triple.object, namespaces, compacted.sep) : triple.object)}`}`}</td>
				</tr>`;
  })}</tbody></table></div>`;
});
const node_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "input.svelte-1voywva.svelte-1voywva{clip:rect(0, 0, 0, 0)}input.svelte-1voywva:checked~ul.svelte-1voywva{display:block}label.tree-label.svelte-1voywva.svelte-1voywva:before{background:#0af;color:#fff;position:relative;z-index:1;float:left;margin:0 1em 0 -2em;width:1em;height:1em;border-radius:1em;content:'+';text-align:center;line-height:0.9em}.svelte-1voywva:checked~label.tree-label.svelte-1voywva:before{content:'–'}li.svelte-1voywva.svelte-1voywva:before{position:absolute;top:0;bottom:0;left:-0.5em;display:block;width:0;border-left:1px dashed #777;content:''}.tree-label.svelte-1voywva.svelte-1voywva:after{position:absolute;top:0;left:-1.45em;display:block;height:0.5em;width:1em;border-bottom:1px dashed #777;border-left:1px dashed #777;border-radius:0 0 0 0.3em;content:''}label.tree-label.svelte-1voywva.svelte-1voywva:after{border-bottom:0}.svelte-1voywva:checked~label.tree-label.svelte-1voywva:after{border-radius:0 0.3em 0 0;border-top:1px dashed #777;border-right:1px dashed #777;border-bottom:0;border-left:0;bottom:2px;top:0.5em}li.svelte-1voywva.svelte-1voywva:last-child:before{height:1em}",
  map: null
};
const Node = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { triples } = $$props;
  let { show = true } = $$props;
  let { compacted } = $$props;
  const children = getChildren(data, triples);
  let { visited } = $$props;
  const id = crypto.randomUUID();
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.triples === void 0 && $$bindings.triples && triples !== void 0)
    $$bindings.triples(triples);
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  if ($$props.compacted === void 0 && $$bindings.compacted && compacted !== void 0)
    $$bindings.compacted(compacted);
  if ($$props.visited === void 0 && $$bindings.visited && visited !== void 0)
    $$bindings.visited(visited);
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    data = compacted.compacted ? compactURI(data, namespaces, compacted.sep) : data;
    $$rendered = `<input class="${"absolute svelte-1voywva"}" type="${"checkbox"}"${add_attribute("id", id, 0)}${add_attribute("checked", show, 1)}>
${children.length > 0 ? `<label${add_attribute("for", id, 0)} class="${"tree-label cursor-pointer relative inline-block svelte-1voywva"}">${escape(data)}</label>` : `<span class="${"tree-label relative inline-block svelte-1voywva"}">${escape(data)}</span>`}
${show ? `${visited.has(data) ? `<ul class="${"svelte-1voywva"}">${each(children, (d, i) => {
      return `<li class="${"py-4 leading-5 relative pl-4 pb-4 svelte-1voywva"}">${validate_component(Node, "svelte:self").$$render(
        $$result,
        {
          data: d,
          id: id + children.length + i,
          triples,
          compacted,
          visited
        },
        {
          triples: ($$value) => {
            triples = $$value;
            $$settled = false;
          },
          compacted: ($$value) => {
            compacted = $$value;
            $$settled = false;
          },
          visited: ($$value) => {
            visited = $$value;
            $$settled = false;
          }
        },
        {}
      )}
				</li>`;
    })}</ul>` : ``}` : ``}`;
  } while (!$$settled);
  return $$rendered;
});
const hierarchy_svelte_svelte_type_style_lang = "";
const css = {
  code: "li.svelte-b3tyhm:before{position:absolute;top:0;bottom:0;left:-0.5em;display:block;width:0;border-left:1px dashed #777;content:''}",
  map: null
};
const Hierarchy = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let roots;
  let { compacted } = $$props;
  let visited = /* @__PURE__ */ new Set();
  let { triples } = $$props;
  if ($$props.compacted === void 0 && $$bindings.compacted && compacted !== void 0)
    $$bindings.compacted(compacted);
  if ($$props.triples === void 0 && $$bindings.triples && triples !== void 0)
    $$bindings.triples(triples);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    roots = getRootsURI(triples);
    $$rendered = `${roots.length > 0 ? `<ul data-testid="${"hierarchy-tree"}">${each(roots, (root) => {
      return `<li class="${"py-4 leading-5 relative pl-4 pb-4 svelte-b3tyhm"}">${validate_component(Node, "HierarchyNode").$$render(
        $$result,
        { data: root, triples, compacted, visited },
        {
          compacted: ($$value) => {
            compacted = $$value;
            $$settled = false;
          },
          visited: ($$value) => {
            visited = $$value;
            $$settled = false;
          }
        },
        {}
      )}
			</li>`;
    })}</ul>` : `<div class="${"container"}"><h2 class="${"text-2xl"}">No Classes</h2></div>`}`;
  } while (!$$settled);
  return $$rendered;
});
const PreviewOptions = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { view } = $$props;
  let { compacted } = $$props;
  let disable = false;
  if ($$props.view === void 0 && $$bindings.view && view !== void 0)
    $$bindings.view(view);
  if ($$props.compacted === void 0 && $$bindings.compacted && compacted !== void 0)
    $$bindings.compacted(compacted);
  disable = view === 2 ? false : true;
  return `<div class="${"my-6 p-6 grid grid-cols-1 place-items-start gap-10 md:grid-cols-4"}"><label for="${"table-view"}" class="${"flex justify-center items-center gap-4"}"><input type="${"radio"}" id="${"table-view"}" data-testid="${"table-view"}" class="${"radio radio-info"}"${add_attribute("value", 0, 0)}${0 === view ? add_attribute("checked", true, 1) : ""}>
		<span>Table</span></label>

	<label for="${"hierarchy-view"}" class="${"flex justify-center items-center gap-4"}"><input type="${"radio"}" id="${"hierarchy-view"}" data-testid="${"hierarchy-view"}" class="${"radio radio-info"}"${add_attribute("value", 1, 0)}${1 === view ? add_attribute("checked", true, 1) : ""}>

		<span>Class Hierarchy</span></label>

	<label for="${"mappings"}" class="${"flex justify-center items-center gap-4"}"><input type="${"radio"}" data-testid="${"mappings-toggle"}" id="${"mappings"}" class="${"radio radio-info"}"${add_attribute("value", 2, 0)}${2 === view ? add_attribute("checked", true, 1) : ""}>
		<span>Mappings</span></label>
	${disable ? `<label for="${"compact"}" class="${"flex justify-center items-center gap-4"}"><span>Compact</span>
			<input type="${"checkbox"}" data-testid="${"compact-toggle"}" id="${"compact"}" class="${"toggle toggle-accent"}"${add_attribute("checked", compacted.compacted, 1)}></label>` : ``}</div>`;
});
const Mappings = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let mappings;
  let { triples } = $$props;
  let { excludedURI } = $$props;
  function getOntology(uri) {
    let result;
    for (let i = uri.length - 1; i > 0; i--) {
      if (uri[i] === "/" || uri[i] === "#") {
        result = uri.slice(0, i);
        break;
      }
    }
    return isURI(result) ? result : void 0;
  }
  function getMappings(data) {
    const count = /* @__PURE__ */ new Map();
    for (const d of data) {
      for (const s of ["object", "predicate", "subject"]) {
        let ontology = getOntology(d[s]);
        if (ontology === void 0 || ontology === getUniformURI(excludedURI)) {
          continue;
        }
        if (new URL(ontology).pathname === "/") {
          ontology = d[s];
        }
        let currSet = count.get(ontology);
        if (currSet !== void 0) {
          count.set(ontology, currSet.add(d[s]));
        } else {
          count.set(ontology, /* @__PURE__ */ new Set());
        }
      }
    }
    return count;
  }
  if ($$props.triples === void 0 && $$bindings.triples && triples !== void 0)
    $$bindings.triples(triples);
  if ($$props.excludedURI === void 0 && $$bindings.excludedURI && excludedURI !== void 0)
    $$bindings.excludedURI(excludedURI);
  mappings = Array.from(getMappings(triples)).filter(([, count]) => count.size > 0);
  return `<div class="${"overflow-x-auto"}"><table class="${"table w-full"}"><thead><tr><th></th>
				<th>Ontology</th>
				<th>Mappings</th></tr></thead>
		<tbody>${mappings.length > 0 ? `${each(mappings, ([ontology, count], i) => {
    return `<tr><th>${escape(i + 1)}</th>
						<td><a${add_attribute("href", ontology, 0)} target="${"_blank"}" rel="${"noreferrer"}" class="${"link link-primary"}">${escape(ontology)}
							</a></td>
						<td>${escape(count.size)}</td>
					</tr>`;
  })}` : `<div class="${"flex justify-center items-center"}"><h2 class="${"text-2xl"}">No Mappings</h2></div>`}</tbody></table></div>`;
});
let limit = 10;
function getAllTriples(uris, ontologies2) {
  return uris.reduce(
    (acc, curr) => {
      acc.push(...ontologies2[curr]);
      return acc;
    },
    []
  );
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let allTriples;
  let { data } = $$props;
  if (data.statusCode === 404 || !data.ontologies || !data.metadata || !data.uri) {
    throw error(data.statusCode, "Resource Not Found");
  }
  let ontologies = data.ontologies;
  const uri = data.uri;
  const metadata = data.metadata;
  let view = 0;
  let compacted = { compacted: true, sep: ":" };
  let offset = 0;
  let imports = structuredClone(metadata.imports);
  const title = indexFile[uri].title;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    allTriples = getAllTriples([...imports, uri], ontologies);
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-1az6e94_START -->${$$result.title = `<title>${escape(title)}</title>`, ""}<!-- HEAD_svelte-1az6e94_END -->`, ""}
<main class="${"container min-h-screen py-6"}">
	
	
	
	
	
	
	
	
	
	

	<section class="${"container"}">${validate_component(MetadataTable, "MetadataTable").$$render(
      $$result,
      { metadata, triples: allTriples, imports },
      {
        imports: ($$value) => {
          imports = $$value;
          $$settled = false;
        }
      },
      {}
    )}
		${validate_component(PreviewOptions, "PreviewOptions").$$render(
      $$result,
      { view, compacted },
      {
        view: ($$value) => {
          view = $$value;
          $$settled = false;
        },
        compacted: ($$value) => {
          compacted = $$value;
          $$settled = false;
        }
      },
      {}
    )}
		${view === 0 ? `${validate_component(TriplesTable, "TriplesTable").$$render(
      $$result,
      {
        triples: allTriples,
        compacted,
        offset,
        limit
      },
      {},
      {}
    )}
			<div class="${"px-4"}">${validate_component(Pagination, "Pagination").$$render(
      $$result,
      { limit, total: allTriples.length, offset },
      {
        offset: ($$value) => {
          offset = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>` : `${view === 1 ? `${validate_component(Hierarchy, "Hierarchy").$$render(
      $$result,
      { triples: allTriples, compacted },
      {
        compacted: ($$value) => {
          compacted = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${view === 2 ? `${validate_component(Mappings, "Mappings").$$render($$result, { excludedURI: uri, triples: allTriples }, {}, {})}` : ``}`}`}</section></main>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
