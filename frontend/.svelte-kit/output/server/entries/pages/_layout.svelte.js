import { c as create_ssr_component, e as escape, v as validate_component, d as add_attribute } from "../../chunks/index3.js";
import { b as base } from "../../chunks/paths.js";
import { A as AetherPortalLogo } from "../../chunks/aetherPortalLogo.js";
const app = "";
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class="${"navbar bg-base-100 shadow-sm"}"><div class="${"navbar-start"}"><div class="${"dropdown"}"><a href="${"#navigation"}" class="${"btn btn-ghost lg:hidden"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-5 w-5"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M4 6h16M4 12h8m-8 6h16"}"></path></svg></a>
			<ul class="${"menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"}"><li><a data-testid="${"class-link"}" href="${escape(base, true) + "/classes#search"}">Classes</a></li>
				<li><a data-testid="${"ontologies-link"}" href="${escape(base, true) + "/ontologies#search"}">Ontologies</a></li>

				
				
				</ul></div>

		<a data-testid="${"home-link"}" class="${"text-2xl p-4 font-bold inline-block"}" href="${escape(base, true) + "/"}">${validate_component(AetherPortalLogo, "AetherPortalLogo").$$render($$result, {}, {}, {})}</a>
		<div class="${"navbar-start hidden lg:flex"}"><ul class="${"menu menu-horizontal px-1"}"><li><a data-testid="${"class-link"}" class="${"font-medium"}" href="${escape(base, true) + "/classes#search"}">Classes</a></li>
				<li><a data-testid="${"ontology-link"}" class="${"font-medium"}" href="${escape(base, true) + "/ontologies#search"}">Ontologies</a></li>

				
				
				</ul></div></div></nav>`;
});
const khaosLogo = "/_app/immutable/assets/khaos-logo-eae2f70b.png";
const aetherLogo = "/_app/immutable/assets/aether-logo-97a898e9.png";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="${"bg-white border-t border-t-gray-100"}"><div class="${"mx-auto w-full container p-4 sm:p-6"}"><div class="${"md:flex md:justify-between"}"><ul class="${"mb-6 md:mb-0 basis-2/3 flex md:justify-center items-center gap-2 menu md:menu-horizontal w-full"}"><li><a data-testid="${"home-link"}" href="${escape(base, true) + "/"}">${validate_component(AetherPortalLogo, "AetherPortalLogo").$$render($$result, { height: "45px" }, {}, {})}</a></li>
				<li><a href="${"https://aether.es"}" class="${"hover:underline"}"><img${add_attribute("src", aetherLogo, 0)} alt="${"Aether Logo"}" width="${"90px"}"></a></li>
				<li><a href="${"https://khaos.uma.es"}" class="${"hover:underline"}"><img${add_attribute("src", khaosLogo, 0)} alt="${"Aether Logo"}" width="${"75px"}"></a></li></ul>
			<ul class="${"mb-6 md:mb-0 flex justify-center items-center gap-2 menu menu-horizontal w-full"}"><li><a href="${"https://twitter.com/aether_social"}" class="${"text-blue-500"}"><svg class="${"w-8 h-8"}" fill="${"currentColor"}" viewBox="${"0 0 24 24"}" aria-hidden="${"true"}"><path d="${"M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"}"></path></svg>
						<span class="${"sr-only"}">Twitter page</span></a></li>
				<li><a href="${"https://github.com/ProyectoAether"}" class="${"text-gray-700"}"><svg class="${"w-8 h-8"}" fill="${"currentColor"}" viewBox="${"0 0 24 24"}" aria-hidden="${"true"}"><path fill-rule="${"evenodd"}" d="${"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"}" clip-rule="${"evenodd"}"></path></svg>
						<span class="${"sr-only"}">GitHub account</span></a></li>
				<li><a href="${"mailto:info@aether.es"}"><svg class="${"w-8 h-8 text-gray-500"}" fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"}"></path><path d="${"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"}"></path></svg></a></li></ul></div></div></footer>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
${slots.default ? slots.default({}) : ``}
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
