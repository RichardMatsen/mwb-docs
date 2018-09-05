(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{198:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("Computed state properties are functions on stored state which provide alternate, filtered, or aggregate views.  They are useful because they allow the amount of data stored in state to be kept to a minimum.")]),t._v(" "),a("p",[t._v("The redux library "),a("code",[t._v("angular-redux/store")]),t._v(" does not explicitly implement computed state in the same way as other libraries, but achieves it via "),a("code",[t._v("@select()")]),t._v(" and "),a("code",[t._v("@select$()")]),t._v(" decorators (ref: "),a("a",{attrs:{href:"https://github.com/angular-redux/store/blob/master/articles/select-pattern.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("The Select Pattern"),a("OutboundLink")],1),t._v(").")]),t._v(" "),a("p",[t._v("The problem is, the code for these selectors is not centralized. Examples given in docs show each component or service implementing the computation code. However, it would be preferable to defined the logic once on the store.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("This is possible, since a "),t._m(3),t._v(" can be a function - from the "),a("a",{attrs:{href:"https://github.com/angular-redux/store/blob/master/src/components/selectors.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("source"),a("OutboundLink")],1)]),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),a("hr")])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"redux-selectors-computed-state"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redux-selectors-computed-state","aria-hidden":"true"}},[this._v("#")]),this._v(" Redux Selectors - Computed State")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("For example, the "),s("code",[this._v("visibleFiles")]),this._v(" property is used on both the "),s("strong",[this._v("page component")]),this._v(" and the "),s("strong",[this._v("search component")]),this._v(", so it would be useful to define the calculation in one place.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("This can be done by creating a "),s("code",[this._v("Computed")]),this._v(" class and injecting it into components and services as needed. Note that some "),s("em",[this._v("'properties'")]),this._v(" are implemented as methods since we need to pass in the "),s("code",[this._v("page")]),this._v(" parameter. The result is a higher-order function similar to the pattern for Middleware.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("em",[s("strong",[this._v("Selector")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" type FunctionSelector"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("RootState"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("S")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" RootState"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("S")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" type Selector"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("RootState"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("S")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("\n  "),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" PropertySelector\n  "),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" PathSelector\n  "),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" FunctionSelector"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("RootState"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("S")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"computed-class"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#computed-class","aria-hidden":"true"}},[this._v("#")]),this._v(" Computed class")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("@"),a("span",{attrs:{class:"token function"}},[t._v("Injectable")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Computed")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),a("span",{attrs:{class:"token function"}},[t._v("constructor")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" ngRedux"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" NgRedux"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("IAppState"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{attrs:{class:"token function"}},[t._v("visibleFiles$")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("page"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Observable"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("IFileInfo"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ngRedux"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("select"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("IFileInfo"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("visibleFiles")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("page"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{attrs:{class:"token function-variable function"}},[t._v("visibleFiles")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("page"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("state"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" files "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" state"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pages"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("page"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("files "),a("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" numVisible "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" state"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pages"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("page"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("numVisible "),a("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" files"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("slice")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" numVisible"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage","aria-hidden":"true"}},[this._v("#")]),this._v(" Usage")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("  "),a("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("getResults")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("searchTerm"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("computed"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("visibleFiles$")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("page"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("take")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("map")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("files "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);e.options.__file="redux-computed-state.md";s.default=e.exports}}]);