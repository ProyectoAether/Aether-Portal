import { c as create_ssr_component, e as escape } from "./index3.js";
const Pagination = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { offset } = $$props;
  let { total } = $$props;
  let { limit } = $$props;
  if ((offset + 1) * limit > total) {
    offset = 0;
  }
  if ($$props.offset === void 0 && $$bindings.offset && offset !== void 0)
    $$bindings.offset(offset);
  if ($$props.total === void 0 && $$bindings.total && total !== void 0)
    $$bindings.total(total);
  if ($$props.limit === void 0 && $$bindings.limit && limit !== void 0)
    $$bindings.limit(limit);
  return `<ul class="${"inline-flex items-center -space-x-px"}">${offset + 1 > 1 ? `<li><button data-testid="${"go-to-start-btn"}" class="${"block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"}"><svg aria-hidden="${"true"}" class="${"w-5 h-5 mr-2"}" fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" d="${"M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"}" clip-rule="${"evenodd"}"></path></svg></button></li>
		<li><button data-testid="${"go-back-btn"}" class="${"block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"}">Prev</button></li>` : ``}
	${offset - 1 >= 0 ? `<li><button class="${"block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"}">${escape(offset)}</button></li>` : ``}
	<button class="${"block px-3 py-2 ml-0 leading-tight border border-gray-300 bg-gray-200 text-gray-700"}">${escape(offset + 1)}</button>
	${offset + 2 <= Math.floor(total / limit) + 1 ? `<li><button class="${"block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"}">${escape(offset + 2)}</button></li>` : ``}
	${offset + 1 <= total / limit ? `<li><button data-testid="${"go-next-btn"}" class="${"block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"}">Next</button></li>

		<li><button data-testid="${"go-to-end-btn"}" class="${"block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"}"><svg aria-hidden="${"true"}" class="${"w-5 h-5 ml-2"}" fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" d="${"M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg></button></li>` : ``}</ul>`;
});
export {
  Pagination as P
};
