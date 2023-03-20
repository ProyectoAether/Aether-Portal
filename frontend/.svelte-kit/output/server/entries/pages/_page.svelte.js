import { c as create_ssr_component, e as escape, v as validate_component, h as each } from "../../chunks/index3.js";
import { s as statsFile, i as indexFile } from "../../chunks/data.js";
import { A as AetherPortalLogo } from "../../chunks/aetherPortalLogo.js";
import { O as OntologyCard } from "../../chunks/ontologyCard.js";
let urlAlphabet = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
let nanoid = (size = 21) => {
  let id = "";
  let i = size;
  while (i--) {
    id += urlAlphabet[Math.random() * 64 | 0];
  }
  return id;
};
Promise.resolve();
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const id = nanoid();
  let { value } = $$props;
  let { initial = 0 } = $$props;
  let { duration: duration2 = 3e3 } = $$props;
  let { step = 1 } = $$props;
  let { roundto = 1 } = $$props;
  let { format = true } = $$props;
  function formatNumber(input) {
    if (format) {
      return Math.round(input).toLocaleString();
    }
    return input;
  }
  const counterResult = [];
  const max = parseInt(value);
  while (duration2 / ((max - initial) / step) < 2) {
    step++;
  }
  counterResult[id] = initial;
  setInterval(
    () => {
    },
    duration2 / ((max - initial) / step)
  );
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.initial === void 0 && $$bindings.initial && initial !== void 0)
    $$bindings.initial(initial);
  if ($$props.duration === void 0 && $$bindings.duration && duration2 !== void 0)
    $$bindings.duration(duration2);
  if ($$props.step === void 0 && $$bindings.step && step !== void 0)
    $$bindings.step(step);
  if ($$props.roundto === void 0 && $$bindings.roundto && roundto !== void 0)
    $$bindings.roundto(roundto);
  if ($$props.format === void 0 && $$bindings.format && format !== void 0)
    $$bindings.format(format);
  return `<span>${escape(formatNumber(counterResult[id]))}</span>`;
});
const duration = 1200;
const Stats = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"stats shadow-lg stats-vertical lg:stats-horizontal text-sm md:text-lg"}"><div class="${"stat"}"><div class="${"stat-title"}">Number of Ontologies</div>
		<div data-testid="${"num-ontologies"}" class="${"stat-value text-primary"}">${validate_component(Component, "Countup").$$render($$result, { value: statsFile.numOntologies, duration }, {}, {})}</div></div>
	<div class="${"stat"}"><div class="${"stat-title"}">Number of Classes</div>
		<div data-testid="${"num-classes"}" class="${"stat-value text-primary"}">${validate_component(Component, "Countup").$$render($$result, { value: statsFile.numClasses, duration }, {}, {})}</div></div>
	<div class="${"stat"}"><div class="${"stat-title"}">Number of Datatype Properties</div>
		<div data-testid="${"num-triples"}" class="${"stat-value text-primary"}">${validate_component(Component, "Countup").$$render(
    $$result,
    {
      value: statsFile.numDatatypeProperties,
      duration
    },
    {},
    {}
  )}</div></div>

	<div class="${"stat"}"><div class="${"stat-title"}">Number of Object Properties</div>
		<div data-testid="${"num-triples"}" class="${"stat-value text-primary"}">${validate_component(Component, "Countup").$$render(
    $$result,
    {
      value: statsFile.numObjectProperties,
      duration
    },
    {},
    {}
  )}</div></div></div>`;
});
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { show = false } = $$props;
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  return `<div class="${"hero min-h-screen py-12 md:py-0"}"><div class="${"max-w-md flex flex-col justify-center items-center gap-5 text-center"}">${validate_component(AetherPortalLogo, "AetherPortalLogo").$$render($$result, { height: "", width: "" }, {}, {})}
		<div class="${"h-32"}">${show ? `<p class="${"italic mb-10 md:text-xl text-[#1E1D82] bg-gradient-to-r from-purple-600 via-blue-600 to-red-600 bg-clip-text text-transparent"}">This is an ontology portal that allows for quick search and preview of the most relevant
					ontologies of the Aether project.
				</p>` : ``}</div>
		${validate_component(Stats, "Stats").$$render($$result, {}, {}, {})}</div></div>`;
});
function getMax(indexFile2) {
  const entries = Object.entries(indexFile2);
  if (entries.length === 0) {
    return [];
  }
  let max = entries[0];
  for (let i = 1; i < entries.length; ++i) {
    const mostRecentDate = new Date(max[1].created).getTime();
    const currDate = new Date(entries[i][1].created).getTime();
    if (mostRecentDate < currDate) {
      max = entries[i];
    }
  }
  return max;
}
function getMostRecent(indexFile2, maxResult = 10) {
  const clonedIndex = structuredClone(indexFile2);
  const result = [];
  for (let i = 0; i < maxResult; ++i) {
    const max = getMax(clonedIndex);
    if (max.length === 0) {
      break;
    }
    result.push(max);
    delete clonedIndex[max[0]];
  }
  return result;
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-j9f2rr_START -->${$$result.title = `<title>Aether Portal</title>`, ""}<!-- HEAD_svelte-j9f2rr_END -->`, ""}

<main class="${"min-h-screen px-6"}">${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})}
	<div class="${"my-12 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-10"}">${each(getMostRecent(indexFile, 10), ([uri, file]) => {
    return `${validate_component(OntologyCard, "OntologyCard").$$render(
      $$result,
      {
        uri,
        description: file.description,
        label: file.label,
        title: file.title,
        logo: file.logo
      },
      {},
      {}
    )}`;
  })}</div></main>`;
});
export {
  Page as default
};
