(this["webpackJsonpmarkdown-editor"]=this["webpackJsonpmarkdown-editor"]||[]).push([[0],{23:function(n,e,t){},29:function(n,e,t){"use strict";t.r(e);var a=t(1),i=t.n(a),r=t(11),s=t.n(r),o=t(8),d=t(16);t(23);var c=t(3),l=function(){var n=function(n,e){var t=i.a.useState((function(){var t=window.localStorage.getItem(e);return null!==t?JSON.parse(t):n})),a=Object(o.a)(t,2),r=a[0],s=a[1];return i.a.useEffect((function(){window.localStorage.setItem(e,JSON.stringify(r))}),[e,r]),[r,s]}('# Markdown syntax guide\n\n## Headers\n\n# This is a Heading h1\n## This is a Heading h2 \n### This is a Heading h3\n\n## Emphasis\n\n*This text will be italic*  \n\n**This text will be bold**  \n\n*You **can** combine them*\n\n## Lists\n\n### Unordered\n\n* Item 1\n* Item 2\n* Item 3\n\n### Ordered\n\n1. Item 1\n1. Item 2\n1. Item 3\n\n## Images\n\n![This is a alt text.](sample-image.jpg "This is a sample image.")\n\n## Links\n\nYou are using [Markdown Editor](#).\n\n## Blockquotes\n\n> Markdown is a lightweight markup language with plain-text-formatting syntax, created in 2004 by John Gruber with Aaron Swartz.\n>\n>> Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.\n\n\nMore on [Markdown Guide](https://www.markdownguide.org/).',"markdown"),e=Object(o.a)(n,2),t=e[0],a=e[1];return Object(c.jsxs)("div",{className:"app",children:[Object(c.jsx)("textarea",{value:t,onChange:function(n){return a(n.target.value)},spellcheck:"false"}),Object(c.jsx)(d.a,{className:"preview",children:t})]})};s.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(l,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.52471674.chunk.js.map