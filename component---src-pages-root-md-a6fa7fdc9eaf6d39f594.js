(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{149:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return l});var r=n(158),o=n.n(r),a=n(0),c=n.n(a),i=n(157),u=n(162);t.default=function(e){var t=e.components;o()(e,["components"]);return c.a.createElement(i.MDXTag,{name:"wrapper",components:t},c.a.createElement(u.a,{className:"column__text"},c.a.createElement(i.MDXTag,{name:"p",components:t},"Signalwerk GmbH – Stefan Huber · 2019 · ",c.a.createElement(i.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://creativecommons.org/licenses/by-sa/4.0/"}},"CC-BY-SA 4.0")),c.a.createElement("div",null,c.a.createElement("br",null),c.a.createElement("br",null)),c.a.createElement(i.MDXTag,{name:"h2",components:t},"Dokumentation"),c.a.createElement(i.MDXTag,{name:"ul",components:t},c.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"/learn.interaction/articles/ebook/"}},"eBook · Grundlagen")),c.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"/learn.interaction/articles/screens/"}},"Screens")))))};var l={title:"Learn Interaction Design",hideInMenu:!0,path:"root"}},156:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=i(n(0)),a=i(n(52)),c=i(n(4));function i(e){return e&&e.__esModule?e:{default:e}}var u=(0,a.default)({}),l=u.Provider,p=u.Consumer;t.withMDXComponents=function(e){return function(t){var n=t.components,a=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["components"]);return o.default.createElement(p,null,function(t){return o.default.createElement(e,r({components:n||t},a))})}};var s=function(e){var t=e.components,n=e.children;return o.default.createElement(l,{value:t},n)};s.propTypes={components:c.default.object.isRequired,children:c.default.element.isRequired},t.default=s},157:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(159);Object.defineProperty(t,"MDXTag",{enumerable:!0,get:function(){return a(r).default}});var o=n(156);function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MDXProvider",{enumerable:!0,get:function(){return a(o).default}})},158:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}},159:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),c=l(a),i=l(n(160)),u=n(156);function l(e){return e&&e.__esModule?e:{default:e}}var p={inlineCode:"code",wrapper:"div"},s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),o(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.parentName,o=e.props,a=void 0===o?{}:o,u=e.children,l=e.components,s=void 0===l?{}:l,f=e.Layout,m=e.layoutProps,d=s[n+"."+t]||s[t]||p[t]||t;return f?((0,i.default)(this,f),c.default.createElement(f,r({components:s},m),c.default.createElement(d,a,u))):c.default.createElement(d,a,u)}}]),t}();t.default=(0,u.withMDXComponents)(s)},160:function(e,t,n){"use strict";var r={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a=Object.defineProperty,c=Object.getOwnPropertyNames,i=Object.getOwnPropertySymbols,u=Object.getOwnPropertyDescriptor,l=Object.getPrototypeOf,p=l&&l(Object);e.exports=function e(t,n,s){if("string"!=typeof n){if(p){var f=l(n);f&&f!==p&&e(t,f,s)}var m=c(n);i&&(m=m.concat(i(n)));for(var d=0;d<m.length;++d){var v=m[d];if(!(r[v]||o[v]||s&&s[v])){var y=u(n,v);try{a(t,v,y)}catch(b){}}}return t}return t}},162:function(e,t,n){"use strict";var r=n(7),o=n.n(r),a=n(0),c=n.n(a),i=(n(163),function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){return c.a.createElement("div",{className:this.props.className+" Div--root"},this.props.children)},t}(c.a.Component));t.a=i},163:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-root-md-a6fa7fdc9eaf6d39f594.js.map