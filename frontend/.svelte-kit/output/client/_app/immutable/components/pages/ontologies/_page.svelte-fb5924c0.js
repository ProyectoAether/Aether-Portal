import{S as L,i as R,s as U,e as z,b as O,g as T,t as d,d as V,f as h,h as _,K as J,L as Y,M as Z,N as x,k as S,l as C,m as I,n as b,V as ee,x as D,y as N,z as j,A as Q,v as w,W as y,a as W,U as te,c as X,X as $,O as M,I as G,q as oe,r as se,C as ie}from"../../../chunks/index-6b1a46d4.js";import{i as m}from"../../../chunks/data-5914c170.js";import{O as le}from"../../../chunks/ontologyCard-de96aef5.js";import{P as ne}from"../../../chunks/pagination-16101a2b.js";import{S as ae,o as q,b as re,c as v,a as ce}from"../../../chunks/search-09d63211.js";const fe=n=>({}),B=n=>({});function F(n,e,l){const t=n.slice();return t[5]=e[l],t}function ue(n){let e;const l=n[4].fallback,t=J(l,n,n[3],B);return{c(){t&&t.c()},l(i){t&&t.l(i)},m(i,a){t&&t.m(i,a),e=!0},p(i,a){t&&t.p&&(!e||a&8)&&Y(t,l,i,i[3],e?x(l,i[3],a,fe):Z(i[3]),B)},i(i){e||(h(t,i),e=!0)},o(i){d(t,i),e=!1},d(i){t&&t.d(i)}}}function pe(n){let e,l,t=n[0].slice(n[1]*n[2],(n[1]+1)*n[2]),i=[];for(let s=0;s<t.length;s+=1)i[s]=H(F(n,t,s));const a=s=>d(i[s],1,1,()=>{i[s]=null});return{c(){e=S("div");for(let s=0;s<i.length;s+=1)i[s].c();this.h()},l(s){e=C(s,"DIV",{class:!0});var r=I(e);for(let o=0;o<i.length;o+=1)i[o].l(r);r.forEach(_),this.h()},h(){b(e,"class","my-12 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-10")},m(s,r){O(s,e,r);for(let o=0;o<i.length;o+=1)i[o].m(e,null);l=!0},p(s,r){if(r&7){t=s[0].slice(s[1]*s[2],(s[1]+1)*s[2]);let o;for(o=0;o<t.length;o+=1){const u=F(s,t,o);i[o]?(i[o].p(u,r),h(i[o],1)):(i[o]=H(u),i[o].c(),h(i[o],1),i[o].m(e,null))}for(T(),o=t.length;o<i.length;o+=1)a(o);V()}},i(s){if(!l){for(let r=0;r<t.length;r+=1)h(i[r]);l=!0}},o(s){i=i.filter(Boolean);for(let r=0;r<i.length;r+=1)d(i[r]);l=!1},d(s){s&&_(e),ee(i,s)}}}function H(n){let e,l;return e=new le({props:{uri:n[5].uri,description:m[n[5].uri].description,label:m[n[5].uri].label,title:m[n[5].uri].title,logo:m[n[5].uri].logo}}),{c(){D(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,i){j(e,t,i),l=!0},p(t,i){const a={};i&7&&(a.uri=t[5].uri),i&7&&(a.description=m[t[5].uri].description),i&7&&(a.label=m[t[5].uri].label),i&7&&(a.title=m[t[5].uri].title),i&7&&(a.logo=m[t[5].uri].logo),e.$set(a)},i(t){l||(h(e.$$.fragment,t),l=!0)},o(t){d(e.$$.fragment,t),l=!1},d(t){Q(e,t)}}}function he(n){let e,l,t,i;const a=[pe,ue],s=[];function r(o,u){return o[0].length>0?0:1}return e=r(n),l=s[e]=a[e](n),{c(){l.c(),t=z()},l(o){l.l(o),t=z()},m(o,u){s[e].m(o,u),O(o,t,u),i=!0},p(o,[u]){let p=e;e=r(o),e===p?s[e].p(o,u):(T(),d(s[p],1,1,()=>{s[p]=null}),V(),l=s[e],l?l.p(o,u):(l=s[e]=a[e](o),l.c()),h(l,1),l.m(t.parentNode,t))},i(o){i||(h(l),i=!0)},o(o){d(l),i=!1},d(o){s[e].d(o),o&&_(t)}}}function _e(n,e,l){let{$$slots:t={},$$scope:i}=e,{results:a}=e,{offset:s}=e,{limit:r}=e;return n.$$set=o=>{"results"in o&&l(0,a=o.results),"offset"in o&&l(1,s=o.offset),"limit"in o&&l(2,r=o.limit),"$$scope"in o&&l(3,i=o.$$scope)},[a,s,r,i,t]}class de extends L{constructor(e){super(),R(this,e,_e,he,U,{results:0,offset:1,limit:2})}}function ge(n){let e,l,t,i,a,s,r,o;function u(f){n[4](f)}function p(f){n[5](f)}function E(f){n[6](f)}function A(f){n[7](f)}function c(f){n[8](f)}let k={};return n[0].options.alphabeticalOrder!==void 0&&(k.alphabeticalOrder=n[0].options.alphabeticalOrder),n[2].options.owlClass!==void 0&&(k.owlClass=n[2].options.owlClass),n[2].options.owlDatatypeProperty!==void 0&&(k.owlDatatypeProperty=n[2].options.owlDatatypeProperty),n[2].options.owlObjectProperty!==void 0&&(k.owlObjectProperty=n[2].options.owlObjectProperty),n[2].options.owlNamedIndividual!==void 0&&(k.owlIndividuals=n[2].options.owlNamedIndividual),l=new ce({props:k}),w.push(()=>y(l,"alphabeticalOrder",u)),w.push(()=>y(l,"owlClass",p)),w.push(()=>y(l,"owlDatatypeProperty",E)),w.push(()=>y(l,"owlObjectProperty",A)),w.push(()=>y(l,"owlIndividuals",c)),{c(){e=S("section"),D(l.$$.fragment),this.h()},l(f){e=C(f,"SECTION",{class:!0,slot:!0});var g=I(e);N(l.$$.fragment,g),g.forEach(_),this.h()},h(){b(e,"class","container"),b(e,"slot","search-options")},m(f,g){O(f,e,g),j(l,e,null),o=!0},p(f,g){const P={};!t&&g&1&&(t=!0,P.alphabeticalOrder=f[0].options.alphabeticalOrder,$(()=>t=!1)),!i&&g&4&&(i=!0,P.owlClass=f[2].options.owlClass,$(()=>i=!1)),!a&&g&4&&(a=!0,P.owlDatatypeProperty=f[2].options.owlDatatypeProperty,$(()=>a=!1)),!s&&g&4&&(s=!0,P.owlObjectProperty=f[2].options.owlObjectProperty,$(()=>s=!1)),!r&&g&4&&(r=!0,P.owlIndividuals=f[2].options.owlNamedIndividual,$(()=>r=!1)),l.$set(P)},i(f){o||(h(l.$$.fragment,f),o=!0)},o(f){d(l.$$.fragment,f),o=!1},d(f){f&&_(e),Q(l)}}}function me(n){let e,l;return{c(){e=S("h2"),l=oe("No matching Ontologies"),this.h()},l(t){e=C(t,"H2",{slot:!0,class:!0});var i=I(e);l=se(i,"No matching Ontologies"),i.forEach(_),this.h()},h(){b(e,"slot","fallback"),b(e,"class","p-10 italic font-bold text-3xl")},m(t,i){O(t,e,i),G(e,l)},p:ie,d(t){t&&_(e)}}}function K(n){let e,l,t;function i(s){n[3](s)}let a={total:n[1].length,limit:n[0].options.limit};return n[0].options.offset!==void 0&&(a.offset=n[0].options.offset),e=new ne({props:a}),w.push(()=>y(e,"offset",i)),{c(){D(e.$$.fragment)},l(s){N(e.$$.fragment,s)},m(s,r){j(e,s,r),t=!0},p(s,r){const o={};r&2&&(o.total=s[1].length),r&1&&(o.limit=s[0].options.limit),!l&&r&1&&(l=!0,o.offset=s[0].options.offset,$(()=>l=!1)),e.$set(o)},i(s){t||(h(e.$$.fragment,s),t=!0)},o(s){d(e.$$.fragment,s),t=!1},d(s){Q(e,s)}}}function be(n){let e,l,t,i;l=new de({props:{results:n[1],offset:n[0].options.offset,limit:n[0].options.limit,$$slots:{fallback:[me]},$$scope:{ctx:n}}});let a=n[1].length>0&&K(n);return{c(){e=S("section"),D(l.$$.fragment),t=W(),a&&a.c(),this.h()},l(s){e=C(s,"SECTION",{class:!0,slot:!0});var r=I(e);N(l.$$.fragment,r),t=X(r),a&&a.l(r),r.forEach(_),this.h()},h(){b(e,"class","container"),b(e,"slot","search-results")},m(s,r){O(s,e,r),j(l,e,null),G(e,t),a&&a.m(e,null),i=!0},p(s,r){const o={};r&2&&(o.results=s[1]),r&1&&(o.offset=s[0].options.offset),r&1&&(o.limit=s[0].options.limit),r&1024&&(o.$$scope={dirty:r,ctx:s}),l.$set(o),s[1].length>0?a?(a.p(s,r),r&2&&h(a,1)):(a=K(s),a.c(),h(a,1),a.m(e,null)):a&&(T(),d(a,1,1,()=>{a=null}),V())},i(s){i||(h(l.$$.fragment,s),h(a),i=!0)},o(s){d(l.$$.fragment,s),d(a),i=!1},d(s){s&&_(e),Q(l),a&&a.d()}}}function we(n){let e,l,t,i,a;function s(o){n[9](o)}let r={title:"Search Ontologies",kbShortcut:"i",$$slots:{"search-results":[be],"search-options":[ge]},$$scope:{ctx:n}};return n[0].searchQuery!==void 0&&(r.searchQuery=n[0].searchQuery),t=new ae({props:r}),w.push(()=>y(t,"searchQuery",s)),{c(){e=W(),l=S("main"),D(t.$$.fragment),this.h()},l(o){te("svelte-e5vceh",document.head).forEach(_),e=X(o),l=C(o,"MAIN",{class:!0});var p=I(l);N(t.$$.fragment,p),p.forEach(_),this.h()},h(){document.title="Ontologies",b(l,"class","min-h-screen")},m(o,u){O(o,e,u),O(o,l,u),j(t,l,null),a=!0},p(o,[u]){const p={};u&1031&&(p.$$scope={dirty:u,ctx:o}),!i&&u&1&&(i=!0,p.searchQuery=o[0].searchQuery,$(()=>i=!1)),t.$set(p)},i(o){a||(h(t.$$.fragment,o),a=!0)},o(o){d(t.$$.fragment,o),a=!1},d(o){o&&_(e),o&&_(l),Q(t)}}}function ye(n,e,l){let t,i,a;M(n,q,c=>l(0,t=c)),M(n,re,c=>l(1,i=c)),M(n,v,c=>l(2,a=c));function s(c){n.$$.not_equal(t.options.offset,c)&&(t.options.offset=c,q.set(t))}function r(c){n.$$.not_equal(t.options.alphabeticalOrder,c)&&(t.options.alphabeticalOrder=c,q.set(t))}function o(c){n.$$.not_equal(a.options.owlClass,c)&&(a.options.owlClass=c,v.set(a))}function u(c){n.$$.not_equal(a.options.owlDatatypeProperty,c)&&(a.options.owlDatatypeProperty=c,v.set(a))}function p(c){n.$$.not_equal(a.options.owlObjectProperty,c)&&(a.options.owlObjectProperty=c,v.set(a))}function E(c){n.$$.not_equal(a.options.owlNamedIndividual,c)&&(a.options.owlNamedIndividual=c,v.set(a))}function A(c){n.$$.not_equal(t.searchQuery,c)&&(t.searchQuery=c,q.set(t))}return[t,i,a,s,r,o,u,p,E,A]}class Se extends L{constructor(e){super(),R(this,e,ye,we,U,{})}}export{Se as default};
