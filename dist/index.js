!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=1)}([,function(e,n,t){"use strict";t.r(n);var r,o,l,i,u,_={},c=[],s=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;function f(e,n){for(var t in n)e[t]=n[t];return e}function a(e){var n=e.parentNode;n&&n.removeChild(e)}function p(e,n,t){var r,o=arguments,l={};for(r in n)"key"!==r&&"ref"!==r&&(l[r]=n[r]);if(arguments.length>3)for(t=[t],r=3;r<arguments.length;r++)t.push(o[r]);if(null!=t&&(l.children=t),"function"==typeof e&&null!=e.defaultProps)for(r in e.defaultProps)void 0===l[r]&&(l[r]=e.defaultProps[r]);return d(e,l,n&&n.key,n&&n.ref)}function d(e,n,t,o){var l={type:e,props:n,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0};return r.vnode&&r.vnode(l),l}function h(e){return e.children}function v(e,n){this.props=e,this.context=n}function y(e,n){if(null==n)return e.__?y(e.__,e.__.__k.indexOf(e)+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?y(e):null}function m(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return m(e)}}function g(e){(!e.__d&&(e.__d=!0)&&1===o.push(e)||i!==r.debounceRendering)&&((i=r.debounceRendering)||l)(b)}function b(){var e,n,t,r,l,i,u;for(o.sort((function(e,n){return n.__v.__b-e.__v.__b}));e=o.pop();)e.__d&&(t=void 0,r=void 0,i=(l=(n=e).__v).__e,(u=n.__P)&&(t=[],r=P(u,l,f({},l),n.__n,void 0!==u.ownerSVGElement,null,t,null==i?y(l):i),N(t,l),r!=i&&m(l)))}function k(e,n,t,r,o,l,i,u,s){var f,p,d,h,v,m,g,b=t&&t.__k||c,k=b.length;if(u==_&&(u=null!=l?l[0]:k?y(t,0):null),f=0,n.__k=w(n.__k,(function(t){if(null!=t){if(t.__=n,t.__b=n.__b+1,null===(d=b[f])||d&&t.key==d.key&&t.type===d.type)b[f]=void 0;else for(p=0;p<k;p++){if((d=b[p])&&t.key==d.key&&t.type===d.type){b[p]=void 0;break}d=null}if(h=P(e,t,d=d||_,r,o,l,i,u,s),(p=t.ref)&&d.ref!=p&&(g||(g=[]),d.ref&&g.push(d.ref,null,t),g.push(p,t.__c||h,t)),null!=h){var c;if(null==m&&(m=h),void 0!==t.__d)c=t.__d,t.__d=void 0;else if(l==d||h!=u||null==h.parentNode){e:if(null==u||u.parentNode!==e)e.appendChild(h),c=null;else{for(v=u,p=0;(v=v.nextSibling)&&p<k;p+=2)if(v==h)break e;e.insertBefore(h,u),c=u}"option"==n.type&&(e.value="")}u=void 0!==c?c:h.nextSibling,"function"==typeof n.type&&(n.__d=u)}}return f++,t})),n.__e=m,null!=l&&"function"!=typeof n.type)for(f=l.length;f--;)null!=l[f]&&a(l[f]);for(f=k;f--;)null!=b[f]&&C(b[f],b[f]);if(g)for(f=0;f<g.length;f++)L(g[f],g[++f],g[++f])}function w(e,n,t){if(null==t&&(t=[]),null==e||"boolean"==typeof e)n&&t.push(n(null));else if(Array.isArray(e))for(var r=0;r<e.length;r++)w(e[r],n,t);else t.push(n?n("string"==typeof e||"number"==typeof e?d(null,e,null,null):null!=e.__e||null!=e.__c?d(e.type,e.props,e.key,null):e):e);return t}function x(e,n,t){"-"===n[0]?e.setProperty(n,t):e[n]="number"==typeof t&&!1===s.test(n)?t+"px":null==t?"":t}function S(e,n,t,r,o){var l,i,u,_,c;if(o?"className"===n&&(n="class"):"class"===n&&(n="className"),"key"===n||"children"===n);else if("style"===n)if(l=e.style,"string"==typeof t)l.cssText=t;else{if("string"==typeof r&&(l.cssText="",r=null),r)for(i in r)t&&i in t||x(l,i,"");if(t)for(u in t)r&&t[u]===r[u]||x(l,u,t[u])}else"o"===n[0]&&"n"===n[1]?(_=n!==(n=n.replace(/Capture$/,"")),c=n.toLowerCase(),n=(c in e?c:n).slice(2),t?(r||e.addEventListener(n,O,_),(e.l||(e.l={}))[n]=t):e.removeEventListener(n,O,_)):"list"!==n&&"tagName"!==n&&"form"!==n&&"type"!==n&&"size"!==n&&!o&&n in e?e[n]=null==t?"":t:"function"!=typeof t&&"dangerouslySetInnerHTML"!==n&&(n!==(n=n.replace(/^xlink:?/,""))?null==t||!1===t?e.removeAttributeNS("http://www.w3.org/1999/xlink",n.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",n.toLowerCase(),t):null==t||!1===t?e.removeAttribute(n):e.setAttribute(n,t))}function O(e){this.l[e.type](r.event?r.event(e):e)}function P(e,n,t,o,l,i,u,_,c){var s,a,p,d,y,m,g,b,w,x,S=n.type;if(void 0!==n.constructor)return null;(s=r.__b)&&s(n);try{e:if("function"==typeof S){if(b=n.props,w=(s=S.contextType)&&o[s.__c],x=s?w?w.props.value:s.__:o,t.__c?g=(a=n.__c=t.__c).__=a.__E:("prototype"in S&&S.prototype.render?n.__c=a=new S(b,x):(n.__c=a=new v(b,x),a.constructor=S,a.render=E),w&&w.sub(a),a.props=b,a.state||(a.state={}),a.context=x,a.__n=o,p=a.__d=!0,a.__h=[]),null==a.__s&&(a.__s=a.state),null!=S.getDerivedStateFromProps&&(a.__s==a.state&&(a.__s=f({},a.__s)),f(a.__s,S.getDerivedStateFromProps(b,a.__s))),d=a.props,y=a.state,p)null==S.getDerivedStateFromProps&&null!=a.componentWillMount&&a.componentWillMount(),null!=a.componentDidMount&&a.__h.push(a.componentDidMount);else{if(null==S.getDerivedStateFromProps&&b!==d&&null!=a.componentWillReceiveProps&&a.componentWillReceiveProps(b,x),!a.__e&&null!=a.shouldComponentUpdate&&!1===a.shouldComponentUpdate(b,a.__s,x)){for(a.props=b,a.state=a.__s,a.__d=!1,a.__v=n,n.__e=t.__e,n.__k=t.__k,a.__h.length&&u.push(a),s=0;s<n.__k.length;s++)n.__k[s]&&(n.__k[s].__=n);break e}null!=a.componentWillUpdate&&a.componentWillUpdate(b,a.__s,x),null!=a.componentDidUpdate&&a.__h.push((function(){a.componentDidUpdate(d,y,m)}))}a.context=x,a.props=b,a.state=a.__s,(s=r.__r)&&s(n),a.__d=!1,a.__v=n,a.__P=e,s=a.render(a.props,a.state,a.context),n.__k=null!=s&&s.type==h&&null==s.key?s.props.children:s,null!=a.getChildContext&&(o=f(f({},o),a.getChildContext())),p||null==a.getSnapshotBeforeUpdate||(m=a.getSnapshotBeforeUpdate(d,y)),k(e,n,t,o,l,i,u,_,c),a.base=n.__e,a.__h.length&&u.push(a),g&&(a.__E=a.__=null),a.__e=!1}else n.__e=j(t.__e,n,t,o,l,i,u,c);(s=r.diffed)&&s(n)}catch(e){r.__e(e,n,t)}return n.__e}function N(e,n){r.__c&&r.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(e){e.call(n)}))}catch(e){r.__e(e,n.__v)}}))}function j(e,n,t,r,o,l,i,u){var s,f,a,p,d,h=t.props,v=n.props;if(o="svg"===n.type||o,null==e&&null!=l)for(s=0;s<l.length;s++)if(null!=(f=l[s])&&(null===n.type?3===f.nodeType:f.localName===n.type)){e=f,l[s]=null;break}if(null==e){if(null===n.type)return document.createTextNode(v);e=o?document.createElementNS("http://www.w3.org/2000/svg",n.type):document.createElement(n.type,v.is&&{is:v.is}),l=null}if(null===n.type)null!=l&&(l[l.indexOf(e)]=null),h!==v&&e.data!=v&&(e.data=v);else if(n!==t){if(null!=l&&(l[l.indexOf(e)]=null,l=c.slice.call(e.childNodes)),a=(h=t.props||_).dangerouslySetInnerHTML,p=v.dangerouslySetInnerHTML,!u){if(h===_)for(h={},d=0;d<e.attributes.length;d++)h[e.attributes[d].name]=e.attributes[d].value;(p||a)&&(p&&a&&p.__html==a.__html||(e.innerHTML=p&&p.__html||""))}(function(e,n,t,r,o){var l;for(l in t)l in n||S(e,l,null,t[l],r);for(l in n)o&&"function"!=typeof n[l]||"value"===l||"checked"===l||t[l]===n[l]||S(e,l,n[l],t[l],r)})(e,v,h,o,u),n.__k=n.props.children,p||k(e,n,t,r,"foreignObject"!==n.type&&o,l,i,_,u),u||("value"in v&&void 0!==v.value&&v.value!==e.value&&(e.value=null==v.value?"":v.value),"checked"in v&&void 0!==v.checked&&v.checked!==e.checked&&(e.checked=v.checked))}return e}function L(e,n,t){try{"function"==typeof e?e(n):e.current=n}catch(e){r.__e(e,t)}}function C(e,n,t){var o,l,i;if(r.unmount&&r.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||L(o,null,n)),t||"function"==typeof e.type||(t=null!=(l=e.__e)),e.__e=e.__d=void 0,null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){r.__e(e,n)}o.base=o.__P=null}if(o=e.__k)for(i=0;i<o.length;i++)o[i]&&C(o[i],n,t);null!=l&&a(l)}function E(e,n,t){return this.constructor(e,t)}function M(e,n,t){var o,l,i;r.__&&r.__(e,n),l=(o=t===u)?null:t&&t.__k||n.__k,e=p(h,null,[e]),i=[],P(n,(o?n:t||n).__k=e,l||_,_,void 0!==n.ownerSVGElement,t&&!o?[t]:l?null:c.slice.call(n.childNodes),i,t||_,o),N(i,e)}function T(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}r={__e:function(e,n){for(var t,r;n=n.__;)if((t=n.__c)&&!t.__)try{if(t.constructor&&null!=t.constructor.getDerivedStateFromError&&(r=!0,t.setState(t.constructor.getDerivedStateFromError(e))),null!=t.componentDidCatch&&(r=!0,t.componentDidCatch(e)),r)return g(t.__E=t)}catch(n){e=n}throw e}},v.prototype.setState=function(e,n){var t;t=this.__s!==this.state?this.__s:this.__s=f({},this.state),"function"==typeof e&&(e=e(t,this.props)),e&&f(t,e),null!=e&&this.__v&&(n&&this.__h.push(n),g(this))},v.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),g(this))},v.prototype.render=h,o=[],l="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,u=_;var D={display:"flex",padding:"1rem 1.5rem","background-color":"white",margin:"1rem 0rem","align-items":"center"},U={display:"flex",height:"100px",width:"100px",border:"3px solid red","align-items":"center"},A={width:"100%"};function I(e){e.children;var n=T(e,["children"]);return p("li",{style:D},p("div",null,p("figure",{style:U},p("img",{src:n.src,style:A}))),p("div",null,p("h2",null,n.alt?n.alt:"No Alt provided for this Image")))}function W(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var F,H=function(e){e.children;var n=W(e,["children"]);return p("div",{style:"color:black"},p("h1",null,"Juno - Image Auditor ",n.images.length),n.images.length>0?p("ul",null,n.images.map((function(e,n){return p(I,{src:e.src,alt:e.alt})}))):p("p",null,"Refresha"))},R=[],B=!1;function z(e){function n(){var e=F.getElementById("root");e.innerHTML="",M(p(H,{images:R}),e)}B||(B=!0,chrome.devtools.network.onNavigated.removeListener(z),chrome.runtime.onConnect.addListener((function(e){console.assert("contentscript"==e.name),e.onMessage.addListener((function(e){R=e.images,n()}))})),chrome.devtools.panels.create("Juno","","panel.html",(function(e){e.onShown.addListener((function(e){F=e.document,n()})),chrome.devtools.network.onNavigated.addListener((function(){n()}))})))}setTimeout((function(){z()}),1e3),chrome.devtools.network.onNavigated.addListener(z)}]);
//# sourceMappingURL=index.js.map