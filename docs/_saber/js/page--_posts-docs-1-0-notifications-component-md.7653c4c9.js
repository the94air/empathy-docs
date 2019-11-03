(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{64:function(t,a,n){"use strict";n.r(a);var s=n(0),e=function(t){var a,n,s,e=(s="Notifications component",(a={}).internal=n=void 0,a.contentType="markdown",a.slug="docs/1.0/notifications-component",a.content=n,a.title=s,a.layout="page",a.markdownHeadings=[{text:s,slug:"notifications-component",level:1}],a.excerpt='First we need to use <code v-pre="">vue-notification</code> package in our <code v-pre="">app.js</code>:',a.createdAt=new Date(NaN),a.updatedAt=new Date(NaN),a.type="post",a.permalink="/docs/1.0/notifications-component",a.assets={},a.attributes=a,a),o=t.options.beforeCreate||[];t.options.beforeCreate=[function(){this.$page=e}].concat(o);["layout","transition"].forEach((function(a){var n=t.options.PageComponent;n&&(t.options[a]=n[a]),void 0===t.options[a]&&(t.options[a]=e[a])})),t.options.name="page-wrapper-"+e.slug.replace(/[^0-9a-z\-]/i,"-")},o=Object(s.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("layout-manager",[n("h1",{attrs:{id:"notifications-component"}},[n("saber-link",{staticClass:"header-anchor",attrs:{to:"#notifications-component","aria-hidden":"true"}},[t._v("#")]),t._v(" Notifications component")],1),t._v(" "),n("ol",[n("li",[t._v("First we need to use "),n("code",{pre:!0},[t._v("vue-notification")]),t._v(" package in our "),n("code",{pre:!0},[t._v("app.js")]),t._v(":")])]),t._v(" "),n("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":"javascript"}},[n("pre",{pre:!0,attrs:{class:"saber-highlight-code language-javascript"}},[n("code",{pre:!0,attrs:{class:"language-javascript"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vue "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" App "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./App'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" WebFont "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'webfontloader'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Notifications "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue-notification'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n\nVue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Notifications"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" app "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    el"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#app'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("render")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("h")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("h")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("App"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])]),n("ol",{attrs:{start:"2"}},[n("li",[t._v("In our "),n("code",{pre:!0},[t._v("Main.vue")]),t._v(" component we add our new the notification template:")])]),t._v(" "),n("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":""}},[n("pre",{pre:!0,attrs:{class:"saber-highlight-code language-text"}},[n("code",{pre:!0,attrs:{class:"language-text"}},[t._v('<template>\n    <div class="container mx-auto px-4">\n        <Slideout menu="#sidebar" panel="#content">\n            <div class="container">\n                <div class="flex -mx-4 md:-mx-3">\n                    <Sidebar />\n                    <Content />\n                </div>\n            </div>\n        </Slideout>\n        <notifications group="notifications" position="bottom right">\n            <template slot="body" slot-scope="props">\n                <div class="flex justify-between items-center bg-black text-white rounded shadow-lg px-2 pl-3 pt-2 pb-2 mb-3">\n                    <p class="leading-tight" v-html="props.item.text"></p>\n                    <button class="inline-block bg-gray-800 hover:bg-gray-900 focus:bg-gray-900 text-white font-semibold focus:outline-none focus:shadow-outline leading-tight rounded-sm select-none align-middle whitespace-no-wrap px-2 py-2 cursor-pointer ml-2" @click="props.close">\n                        Close\n                    </button>\n                </div>\n            </template>\n        </notifications>\n    </div>\n</template>')])])]),n("ol",{attrs:{start:"3"}},[n("li",[t._v("To show a notification you can do. visit the "),n("a",{attrs:{href:"https://www.npmjs.com/package/vue-notification",target:"_blank",rel:"noopener noreferrer"}},[t._v("docs")]),t._v(" to learn more:")])]),t._v(" "),n("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":"javascript"}},[n("pre",{pre:!0,attrs:{class:"saber-highlight-code language-javascript"}},[n("code",{pre:!0,attrs:{class:"language-javascript"}},[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        methods"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("showNotification")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("$notify")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    group"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'notifications'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    text"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Your new post has been created.'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    duration"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])])])])])}),[],!1,null,null,null);"function"==typeof e&&e(o);a.default=o.exports}}]);