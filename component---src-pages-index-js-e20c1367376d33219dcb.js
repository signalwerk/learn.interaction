(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{178:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n.n(a),o=n(0),i=n.n(o),s=n(184),c=n(194),l=n.n(c),u=n(192),p=n.n(u),m=n(203),d=n(180),h=n(199),f=n(200),y=n(201),E=n(183),v=(n(167),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=l()(this,"props.data.site.siteMetadata.title"),t=l()(this,"props.data.site.siteMetadata.description"),n=l()(this,"props.data.posts.edges"),a=l()(this,"props.data.post");return i.a.createElement(f.a,{location:this.props.location},i.a.createElement(p.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:t}],title:e}),a&&i.a.createElement(i.a.Fragment,{className:"Index--item"},i.a.createElement("h1",null,a.frontmatter.title),i.a.createElement("div",{dangerouslySetInnerHTML:{__html:a.html}}),i.a.createElement(d.MDXProvider,{components:{}},i.a.createElement(m.a,{scope:{React:i.a,MDXTag:d.MDXTag,Gallery:y.a,Div:E.a}},a.code.body))),n&&n.map(function(e){var t=e.node,n=l()(t,"frontmatter.title")||"--no title--";return i.a.createElement("div",{className:"Index--item",key:t.fields.slug},i.a.createElement("h2",{className:"Index--title"},i.a.createElement(s.a,{to:t.fields.slug},n)),i.a.createElement("div",{className:"Index--meta"},i.a.createElement(h.a,{author:t.frontmatter.author,date:t.frontmatter.date})),t.frontmatter.description&&i.a.createElement("p",null,t.frontmatter.description)||i.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.excerpt}}))}))},t}(i.a.Component));n.d(t,"homeQuery",function(){return N});var g=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(v,this.props))},t}(i.a.Component),N=(t.default=g,"2452230888")},183:function(e,t,n){"use strict";var a=n(7),r=n.n(a),o=n(0),i=n.n(o),s=(n(147),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement("div",{className:this.props.className+" Div--root"},this.props.children)},t}(i.a.Component));t.a=s},184:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(4),i=n.n(o),s=n(35),c=n.n(s);n.d(t,"a",function(){return c.a});n(185),r.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},185:function(e,t,n){var a;e.exports=(a=n(193))&&a.default||a},193:function(e,t,n){"use strict";n.r(t);var a=n(14),r=n.n(a),o=n(0),i=n.n(o),s=n(4),c=n.n(s),l=n(57),u=n(2),p=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return n?i.a.createElement(l.a,r()({location:t,pageResources:n},n.json)):null};p.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=p},199:function(e,t,n){"use strict";n(36);var a=n(7),r=n.n(a),o=n(0),i=n.n(o),s=(n(149),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t=this.props,n=t.author,a=t.date,r=t.words,o=Math.round((r||1)/179)||1;return i.a.createElement("div",{className:"column__text Meta--root"},r&&i.a.createElement("span",{className:"Meta--timeToRead"},"~",o," min",i.a.createElement("span",{className:"Meta--dot"}," · ")),n,i.a.createElement("span",{className:"Meta--dot"}," · "),(e=a,new Date(Date.parse(e)).toLocaleDateString("de-CH",{year:"numeric",month:"long",day:"numeric"})).replace(/ /g," "))},t}(i.a.Component));t.a=s},200:function(e,t,n){"use strict";var a=n(7),r=n.n(a),o=n(0),i=n.n(o),s=n(184),c=(n(150),n(151),n(152),n(153),n(154),n(155),n(156),n(157),n(158),n(159),n(160),n(161),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t=this.props,n=t.location,a=t.children;return"/learn.interaction/"!==n.pathname&&(e=i.a.createElement("h3",{className:"layout--home"},i.a.createElement(s.a,{to:"/"},"← Home"))),i.a.createElement("div",{className:"layout--content"},e,a)},t}(i.a.Component));t.a=c},201:function(e,t,n){"use strict";var a=n(7),r=n.n(a),o=n(0),i=n.n(o),s=n(207),c=n.n(s),l=(n(162),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement("div",{className:"Gallery--root"},i.a.createElement(c.a,{dots:!0,infinite:!0,speed:500,autoplaySpeed:2500,autoplay:!0,slidesToShow:1,slidesToScroll:1,pauseOnDotsHover:!0},this.props.children.props.children))},t}(i.a.Component));t.a=l}}]);
//# sourceMappingURL=component---src-pages-index-js-e20c1367376d33219dcb.js.map