!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=3)}([function(e,t,n){"use strict";n.r(t),n.d(t,"h",function(){return l}),n.d(t,"createElement",function(){return l}),n.d(t,"cloneElement",function(){return c}),n.d(t,"Component",function(){return W}),n.d(t,"render",function(){return A}),n.d(t,"rerender",function(){return d}),n.d(t,"options",function(){return o});var o={},r=[],i=[];function l(e,t){var n,l,a,u,c=i;for(u=arguments.length;u-- >2;)r.push(arguments[u]);for(t&&null!=t.children&&(r.length||r.push(t.children),delete t.children);r.length;)if((l=r.pop())&&void 0!==l.pop)for(u=l.length;u--;)r.push(l[u]);else"boolean"==typeof l&&(l=null),(a="function"!=typeof e)&&(null==l?l="":"number"==typeof l?l=String(l):"string"!=typeof l&&(a=!1)),a&&n?c[c.length-1]+=l:c===i?c=[l]:c.push(l),n=a;var p=new function(){};return p.nodeName=e,p.children=c,p.attributes=null==t?void 0:t,p.key=null==t?void 0:t.key,void 0!==o.vnode&&o.vnode(p),p}function a(e,t){for(var n in t)e[n]=t[n];return e}var u="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout;function c(e,t){return l(e.nodeName,a(a({},e.attributes),t),arguments.length>2?[].slice.call(arguments,2):e.children)}var p=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,s=[];function f(e){!e._dirty&&(e._dirty=!0)&&1==s.push(e)&&(o.debounceRendering||u)(d)}function d(){var e,t=s;for(s=[];e=t.pop();)e._dirty&&T(e)}function v(e,t){return e.normalizedNodeName===t||e.nodeName.toLowerCase()===t.toLowerCase()}function _(e){var t=a({},e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(void 0!==n)for(var o in n)void 0===t[o]&&(t[o]=n[o]);return t}function h(e){var t=e.parentNode;t&&t.removeChild(e)}function m(e,t,n,o,r){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)n&&n(null),o&&o(e);else if("class"!==t||r)if("style"===t){if(o&&"string"!=typeof o&&"string"!=typeof n||(e.style.cssText=o||""),o&&"object"==typeof o){if("string"!=typeof n)for(var i in n)i in o||(e.style[i]="");for(var i in o)e.style[i]="number"==typeof o[i]&&!1===p.test(i)?o[i]+"px":o[i]}}else if("dangerouslySetInnerHTML"===t)o&&(e.innerHTML=o.__html||"");else if("o"==t[0]&&"n"==t[1]){var l=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),o?n||e.addEventListener(t,y,l):e.removeEventListener(t,y,l),(e._listeners||(e._listeners={}))[t]=o}else if("list"!==t&&"type"!==t&&!r&&t in e)!function(e,t,n){try{e[t]=n}catch(e){}}(e,t,null==o?"":o),null!=o&&!1!==o||e.removeAttribute(t);else{var a=r&&t!==(t=t.replace(/^xlink\:?/,""));null==o||!1===o?a?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof o&&(a?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),o):e.setAttribute(t,o))}else e.className=o||""}function y(e){return this._listeners[e.type](o.event&&o.event(e)||e)}var b=[],g=0,C=!1,k=!1;function w(){for(var e;e=b.pop();)o.afterMount&&o.afterMount(e),e.componentDidMount&&e.componentDidMount()}function x(e,t,n,o,r,i){g++||(C=null!=r&&void 0!==r.ownerSVGElement,k=null!=e&&!("__preactattr_"in e));var l=N(e,t,n,o,i);return r&&l.parentNode!==r&&r.appendChild(l),--g||(k=!1,i||w()),l}function N(e,t,n,o,r){var i=e,l=C;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||r)?e.nodeValue!=t&&(e.nodeValue=t):(i=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(i,e),O(e,!0))),i.__preactattr_=!0,i;var a,u,c=t.nodeName;if("function"==typeof c)return function(e,t,n,o){var r=e&&e._component,i=r,l=e,a=r&&e._componentConstructor===t.nodeName,u=a,c=_(t);for(;r&&!u&&(r=r._parentComponent);)u=r.constructor===t.nodeName;r&&u&&(!o||r._component)?(S(r,c,3,n,o),e=r.base):(i&&!a&&(E(i),e=l=null),r=j(t.nodeName,c,n),e&&!r.nextBase&&(r.nextBase=e,l=null),S(r,c,1,n,o),e=r.base,l&&e!==l&&(l._component=null,O(l,!1)));return e}(e,t,n,o);if(C="svg"===c||"foreignObject"!==c&&C,c=String(c),(!e||!v(e,c))&&(a=c,(u=C?document.createElementNS("http://www.w3.org/2000/svg",a):document.createElement(a)).normalizedNodeName=a,i=u,e)){for(;e.firstChild;)i.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(i,e),O(e,!0)}var p=i.firstChild,s=i.__preactattr_,f=t.children;if(null==s){s=i.__preactattr_={};for(var d=i.attributes,y=d.length;y--;)s[d[y].name]=d[y].value}return!k&&f&&1===f.length&&"string"==typeof f[0]&&null!=p&&void 0!==p.splitText&&null==p.nextSibling?p.nodeValue!=f[0]&&(p.nodeValue=f[0]):(f&&f.length||null!=p)&&function(e,t,n,o,r){var i,l,a,u,c,p=e.childNodes,s=[],f={},d=0,_=0,m=p.length,y=0,b=t?t.length:0;if(0!==m)for(var g=0;g<m;g++){var C=p[g],k=C.__preactattr_,w=b&&k?C._component?C._component.__key:k.key:null;null!=w?(d++,f[w]=C):(k||(void 0!==C.splitText?!r||C.nodeValue.trim():r))&&(s[y++]=C)}if(0!==b)for(var g=0;g<b;g++){u=t[g],c=null;var w=u.key;if(null!=w)d&&void 0!==f[w]&&(c=f[w],f[w]=void 0,d--);else if(!c&&_<y)for(i=_;i<y;i++)if(void 0!==s[i]&&(x=l=s[i],U=r,"string"==typeof(P=u)||"number"==typeof P?void 0!==x.splitText:"string"==typeof P.nodeName?!x._componentConstructor&&v(x,P.nodeName):U||x._componentConstructor===P.nodeName)){c=l,s[i]=void 0,i===y-1&&y--,i===_&&_++;break}c=N(c,u,n,o),a=p[g],c&&c!==e&&c!==a&&(null==a?e.appendChild(c):c===a.nextSibling?h(a):e.insertBefore(c,a))}var x,P,U;if(d)for(var g in f)void 0!==f[g]&&O(f[g],!1);for(;_<=y;)void 0!==(c=s[y--])&&O(c,!1)}(i,f,n,o,k||null!=s.dangerouslySetInnerHTML),function(e,t,n){var o;for(o in n)t&&null!=t[o]||null==n[o]||m(e,o,n[o],n[o]=void 0,C);for(o in t)"children"===o||"innerHTML"===o||o in n&&t[o]===("value"===o||"checked"===o?e[o]:n[o])||m(e,o,n[o],n[o]=t[o],C)}(i,t.attributes,s),C=l,i}function O(e,t){var n=e._component;n?E(n):(null!=e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),!1!==t&&null!=e.__preactattr_||h(e),P(e))}function P(e){for(e=e.lastChild;e;){var t=e.previousSibling;O(e,!0),e=t}}var U={};function j(e,t,n){var o,r=U[e.name];if(e.prototype&&e.prototype.render?(o=new e(t,n),W.call(o,t,n)):((o=new W(t,n)).constructor=e,o.render=M),r)for(var i=r.length;i--;)if(r[i].constructor===e){o.nextBase=r[i].nextBase,r.splice(i,1);break}return o}function M(e,t,n){return this.constructor(e,n)}function S(e,t,n,r,i){e._disable||(e._disable=!0,(e.__ref=t.ref)&&delete t.ref,(e.__key=t.key)&&delete t.key,!e.base||i?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,r),r&&r!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=r),e.prevProps||(e.prevProps=e.props),e.props=t,e._disable=!1,0!==n&&(1!==n&&!1===o.syncComponentUpdates&&e.base?f(e):T(e,1,i)),e.__ref&&e.__ref(e))}function T(e,t,n,r){if(!e._disable){var i,l,u,c=e.props,p=e.state,s=e.context,f=e.prevProps||c,d=e.prevState||p,v=e.prevContext||s,h=e.base,m=e.nextBase,y=h||m,C=e._component,k=!1;if(h&&(e.props=f,e.state=d,e.context=v,2!==t&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(c,p,s)?k=!0:e.componentWillUpdate&&e.componentWillUpdate(c,p,s),e.props=c,e.state=p,e.context=s),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!k){i=e.render(c,p,s),e.getChildContext&&(s=a(a({},s),e.getChildContext()));var N,P,U=i&&i.nodeName;if("function"==typeof U){var M=_(i);(l=C)&&l.constructor===U&&M.key==l.__key?S(l,M,1,s,!1):(N=l,e._component=l=j(U,M,s),l.nextBase=l.nextBase||m,l._parentComponent=e,S(l,M,0,s,!1),T(l,1,n,!0)),P=l.base}else u=y,(N=C)&&(u=e._component=null),(y||1===t)&&(u&&(u._component=null),P=x(u,i,s,n||!h,y&&y.parentNode,!0));if(y&&P!==y&&l!==C){var W=y.parentNode;W&&P!==W&&(W.replaceChild(P,y),N||(y._component=null,O(y,!1)))}if(N&&E(N),e.base=P,P&&!r){for(var A=e,B=e;B=B._parentComponent;)(A=B).base=P;P._component=A,P._componentConstructor=A.constructor}}if(!h||n?b.unshift(e):k||(e.componentDidUpdate&&e.componentDidUpdate(f,d,v),o.afterUpdate&&o.afterUpdate(e)),null!=e._renderCallbacks)for(;e._renderCallbacks.length;)e._renderCallbacks.pop().call(e);g||r||w()}}function E(e){o.beforeUnmount&&o.beforeUnmount(e);var t=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var n=e._component;n?E(n):t&&(t.__preactattr_&&t.__preactattr_.ref&&t.__preactattr_.ref(null),e.nextBase=t,h(t),function(e){var t=e.constructor.name;(U[t]||(U[t]=[])).push(e)}(e),P(t)),e.__ref&&e.__ref(null)}function W(e,t){this._dirty=!0,this.context=t,this.props=e,this.state=this.state||{}}function A(e,t,n){return x(n,e,{},!1,t,!1)}a(W.prototype,{setState:function(e,t){var n=this.state;this.prevState||(this.prevState=a({},n)),a(n,"function"==typeof e?e(n,this.props):e),t&&(this._renderCallbacks=this._renderCallbacks||[]).push(t),f(this)},forceUpdate:function(e){e&&(this._renderCallbacks=this._renderCallbacks||[]).push(e),T(this,2)},render:function(){}});var B={h:l,createElement:l,cloneElement:c,Component:W,render:A,rerender:d,options:o};t.default=B},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(0);var i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),o(t,[{key:"handleClick",value:function(){console.log("what is up")}},{key:"render",value:function(){return(0,r.h)("div",null,(0,r.h)("div",{onClick:this.handleClick},"what is up?"),(0,r.h)("p",null," Yes"))}}]),t}();t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(0),l=n(1),a=(o=l)&&o.__esModule?o:{default:o};var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={isToggleOn:!0},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component),r(t,[{key:"componentWillMount",value:function(){console.log("App componentWillMount")}},{key:"componentDidMount",value:function(){console.log("App componentDidMount")}},{key:"componentWillUnmount",value:function(){console.log("App componentWillUnmount")}},{key:"componentWillReceiveProps",value:function(){console.log("App componentWillReceiveProps")}},{key:"shouldComponentUpdate",value:function(){console.log("App shouldComponentUpdate")}},{key:"componentWillUpdate",value:function(){console.log("App componentWillUpdate")}},{key:"componentDidUpdate",value:function(){console.log("App componentDidUpdate")}},{key:"handleClick",value:function(){console.log("bind event",this,this.state),this.setState(function(e){return{isToggleOn:!e.isToggleOn}})}},{key:"render",value:function(){return(0,i.h)("div",{id:"app"},(0,i.h)(a.default,null),(0,i.h)("div",{onClick:this.handleClick.bind(this)},this.state.isToggleOn?"ON":"OFF"))}}]),t}();t.default=u},function(e,t,n){"use strict";var o,r=n(0);o=n(2).default,(0,r.render)((0,r.h)(o,null),document.body,document.getElementById("app"))}]);
//# sourceMappingURL=index_bundle.js.map