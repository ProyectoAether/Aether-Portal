import{S as W,i as F,s as J,d as S,v as Q,a as G,p as P,c as N,y as I,q as B,r as y,f as O,z as M,l as _,u as m,x as k,g as T,M as v,A as D,G as R,K as j,L as x,W as U,I as K}from"./index-60976d40.js";const E="src/lib/components/pagination/pagination.svelte";function C(o){let t,e,r,f,i,a,l,c,d,s;const b={c:function(){t=P("li"),e=P("button"),r=j("svg"),f=j("path"),i=N(),a=P("li"),l=P("button"),c=I("Prev"),this.h()},l:function(n){t=B(n,"LI",{});var w=y(t);e=B(w,"BUTTON",{"data-testid":!0,class:!0});var u=y(e);r=x(u,"svg",{"aria-hidden":!0,class:!0,fill:!0,viewBox:!0,xmlns:!0});var h=y(r);f=x(h,"path",{"fill-rule":!0,d:!0,"clip-rule":!0}),y(f).forEach(_),h.forEach(_),u.forEach(_),w.forEach(_),i=O(n),a=B(n,"LI",{});var p=y(a);l=B(p,"BUTTON",{"data-testid":!0,class:!0});var L=y(l);c=M(L,"Prev"),L.forEach(_),p.forEach(_),this.h()},h:function(){m(f,"fill-rule","evenodd"),m(f,"d","M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"),m(f,"clip-rule","evenodd"),k(f,E,27,6,718),m(r,"aria-hidden","true"),m(r,"class","w-5 h-5 mr-2"),m(r,"fill","currentColor"),m(r,"viewBox","0 0 20 20"),m(r,"xmlns","http://www.w3.org/2000/svg"),k(r,E,21,5,567),m(e,"data-testid","go-to-start-btn"),m(e,"class","block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"),k(e,E,17,3,342),k(t,E,16,2,334),m(l,"data-testid","go-back-btn"),m(l,"class","block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"),k(l,E,36,3,970),k(a,E,35,2,962)},m:function(n,w){T(n,t,w),v(t,e),v(e,r),v(r,f),T(n,i,w),T(n,a,w),v(a,l),v(l,c),d||(s=[U(e,"click",o[3],!1,!1,!1),U(l,"click",o[4],!1,!1,!1)],d=!0)},p:R,d:function(n){n&&_(t),n&&_(i),n&&_(a),d=!1,K(s)}};return S("SvelteRegisterBlock",{block:b,id:C.name,type:"if",source:"(16:1) {#if offset + 1 > 1}",ctx:o}),b}function z(o){let t,e,r,f,i;const a={c:function(){t=P("li"),e=P("button"),r=I(o[0]),this.h()},l:function(c){t=B(c,"LI",{});var d=y(t);e=B(d,"BUTTON",{class:!0});var s=y(e);r=M(s,o[0]),s.forEach(_),d.forEach(_),this.h()},h:function(){m(e,"class","block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"),k(e,E,45,3,1249),k(t,E,44,2,1241)},m:function(c,d){T(c,t,d),v(t,e),v(e,r),f||(i=U(e,"click",o[5],!1,!1,!1),f=!0)},p:function(c,d){d&1&&D(r,c[0])},d:function(c){c&&_(t),f=!1,i()}};return S("SvelteRegisterBlock",{block:a,id:z.name,type:"if",source:"(44:1) {#if offset - 1 >= 0}",ctx:o}),a}function H(o){let t,e,r=o[0]+2+"",f,i,a;const l={c:function(){t=P("li"),e=P("button"),f=I(r),this.h()},l:function(d){t=B(d,"LI",{});var s=y(t);e=B(s,"BUTTON",{class:!0});var b=y(e);f=M(b,r),b.forEach(_),s.forEach(_),this.h()},h:function(){m(e,"class","block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"),k(e,E,57,3,1662),k(t,E,56,2,1654)},m:function(d,s){T(d,t,s),v(t,e),v(e,f),i||(a=U(e,"click",o[6],!1,!1,!1),i=!0)},p:function(d,s){s&1&&r!==(r=d[0]+2+"")&&D(f,r)},d:function(d){d&&_(t),i=!1,a()}};return S("SvelteRegisterBlock",{block:l,id:H.name,type:"if",source:"(56:1) {#if offset + 2 <= Math.floor(total / limit) + 1}",ctx:o}),l}function q(o){let t,e,r,f,i,a,l,c,d,s;const b={c:function(){t=P("li"),e=P("button"),r=I("Next"),f=N(),i=P("li"),a=P("button"),l=j("svg"),c=j("path"),this.h()},l:function(n){t=B(n,"LI",{});var w=y(t);e=B(w,"BUTTON",{"data-testid":!0,class:!0});var u=y(e);r=M(u,"Next"),u.forEach(_),w.forEach(_),f=O(n),i=B(n,"LI",{});var h=y(i);a=B(h,"BUTTON",{"data-testid":!0,class:!0});var p=y(a);l=x(p,"svg",{"aria-hidden":!0,class:!0,fill:!0,viewBox:!0,xmlns:!0});var L=y(l);c=x(L,"path",{"fill-rule":!0,d:!0,"clip-rule":!0}),y(c).forEach(_),L.forEach(_),p.forEach(_),h.forEach(_),this.h()},h:function(){m(e,"data-testid","go-next-btn"),m(e,"class","block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"),k(e,E,65,3,1923),k(t,E,64,2,1915),m(c,"fill-rule","evenodd"),m(c,"d","M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"),m(c,"clip-rule","evenodd"),k(c,E,83,6,2562),m(l,"aria-hidden","true"),m(l,"class","w-5 h-5 ml-2"),m(l,"fill","currentColor"),m(l,"viewBox","0 0 20 20"),m(l,"xmlns","http://www.w3.org/2000/svg"),k(l,E,77,5,2411),m(a,"data-testid","go-to-end-btn"),m(a,"class","block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"),k(a,E,73,3,2164),k(i,E,72,2,2156)},m:function(n,w){T(n,t,w),v(t,e),v(e,r),T(n,f,w),T(n,i,w),v(i,a),v(a,l),v(l,c),d||(s=[U(e,"click",o[7],!1,!1,!1),U(a,"click",o[8],!1,!1,!1)],d=!0)},p:R,d:function(n){n&&_(t),n&&_(f),n&&_(i),d=!1,K(s)}};return S("SvelteRegisterBlock",{block:b,id:q.name,type:"if",source:"(64:1) {#if offset + 1 <= total / limit}",ctx:o}),b}function A(o){let t,e,r,f,i=o[0]+1+"",a,l,c=o[0]+2<=Math.floor(o[1]/o[2])+1,d,s=o[0]+1>1&&C(o),b=o[0]-1>=0&&z(o),g=c&&H(o),n=o[0]+1<=o[1]/o[2]&&q(o);const w={c:function(){t=P("ul"),s&&s.c(),e=N(),b&&b.c(),r=N(),f=P("button"),a=I(i),l=N(),g&&g.c(),d=N(),n&&n.c(),this.h()},l:function(h){t=B(h,"UL",{class:!0});var p=y(t);s&&s.l(p),e=O(p),b&&b.l(p),r=O(p),f=B(p,"BUTTON",{class:!0});var L=y(f);a=M(L,i),L.forEach(_),l=O(p),g&&g.l(p),d=O(p),n&&n.l(p),p.forEach(_),this.h()},h:function(){m(f,"class","block px-3 py-2 ml-0 leading-tight border border-gray-300 bg-gray-200 text-gray-700"),k(f,E,51,1,1470),m(t,"class","inline-flex items-center -space-x-px"),k(t,E,14,0,260)},m:function(h,p){T(h,t,p),s&&s.m(t,null),v(t,e),b&&b.m(t,null),v(t,r),v(t,f),v(f,a),v(t,l),g&&g.m(t,null),v(t,d),n&&n.m(t,null)},p:function(h,[p]){h[0]+1>1?s?s.p(h,p):(s=C(h),s.c(),s.m(t,e)):s&&(s.d(1),s=null),h[0]-1>=0?b?b.p(h,p):(b=z(h),b.c(),b.m(t,r)):b&&(b.d(1),b=null),p&1&&i!==(i=h[0]+1+"")&&D(a,i),p&7&&(c=h[0]+2<=Math.floor(h[1]/h[2])+1),c?g?g.p(h,p):(g=H(h),g.c(),g.m(t,d)):g&&(g.d(1),g=null),h[0]+1<=h[1]/h[2]?n?n.p(h,p):(n=q(h),n.c(),n.m(t,null)):n&&(n.d(1),n=null)},i:R,o:R,d:function(h){h&&_(t),s&&s.d(),b&&b.d(),g&&g.d(),n&&n.d()}};return S("SvelteRegisterBlock",{block:w,id:A.name,type:"component",source:"",ctx:o}),w}function V(o,t,e){let{$$slots:r={},$$scope:f}=t;Q("Pagination",r,[]);let{offset:i}=t,{total:a}=t,{limit:l}=t;(i+1)*l>a&&(i=0),G(()=>{a<i*l&&e(0,i=0)}),o.$$.on_mount.push(function(){i===void 0&&!("offset"in t||o.$$.bound[o.$$.props.offset])&&console.warn("<Pagination> was created without expected prop 'offset'"),a===void 0&&!("total"in t||o.$$.bound[o.$$.props.total])&&console.warn("<Pagination> was created without expected prop 'total'"),l===void 0&&!("limit"in t||o.$$.bound[o.$$.props.limit])&&console.warn("<Pagination> was created without expected prop 'limit'")});const c=["offset","total","limit"];Object.keys(t).forEach(u=>{!~c.indexOf(u)&&u.slice(0,2)!=="$$"&&u!=="slot"&&console.warn(`<Pagination> was created with unknown prop '${u}'`)});const d=()=>e(0,i=0),s=()=>e(0,i=i-1),b=()=>e(0,i=i-1),g=()=>e(0,i+=1),n=()=>e(0,i+=1),w=()=>e(0,i=Math.floor(a/l));return o.$$set=u=>{"offset"in u&&e(0,i=u.offset),"total"in u&&e(1,a=u.total),"limit"in u&&e(2,l=u.limit)},o.$capture_state=()=>({afterUpdate:G,offset:i,total:a,limit:l}),o.$inject_state=u=>{"offset"in u&&e(0,i=u.offset),"total"in u&&e(1,a=u.total),"limit"in u&&e(2,l=u.limit)},t&&"$$inject"in t&&o.$inject_state(t.$$inject),[i,a,l,d,s,b,g,n,w]}class Y extends W{constructor(t){super(t),F(this,t,V,A,J,{offset:0,total:1,limit:2}),S("SvelteRegisterComponent",{component:this,tagName:"Pagination",options:t,id:A.name})}get offset(){throw new Error("<Pagination>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set offset(t){throw new Error("<Pagination>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get total(){throw new Error("<Pagination>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set total(t){throw new Error("<Pagination>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get limit(){throw new Error("<Pagination>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set limit(t){throw new Error("<Pagination>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{Y as P};