import { c as create_ssr_component, e as escape, d as add_attribute } from "./index3.js";
import { b as base } from "./paths.js";
import { f as formatURI } from "./utils.js";
const OntologyCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { uri } = $$props;
  let { logo } = $$props;
  let { title } = $$props;
  let { label } = $$props;
  let { description } = $$props;
  if ($$props.uri === void 0 && $$bindings.uri && uri !== void 0)
    $$bindings.uri(uri);
  if ($$props.logo === void 0 && $$bindings.logo && logo !== void 0)
    $$bindings.logo(logo);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  return `<a href="${escape(base, true) + "/ontologies/previews?uri=" + escape(formatURI(uri), true)}" class="${"card shadow-xl hover:shadow-sm hover:bg-base-200"}">${logo ? `<figure class="${"px-10 pt-10"}"><img${add_attribute("src", logo, 0)} height="${"100px"}" width="${"100px"}" alt="${"ontology-icon"}" class="${"rounded-xl"}"></figure>` : ``}
	<div class="${"card-body items-center text-center"}"><h2 class="${"card-title"}">${escape(title)}</h2>
		<div class="${"p-4 line-clamp-6"}"><span>${escape(label || "")}</span>
			<span class="${"italic text-base-content line-clamp-6"}">${escape(description || "")}</span></div></div></a>`;
});
export {
  OntologyCard as O
};
