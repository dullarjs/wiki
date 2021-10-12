(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{393:function(t,s,a){"use strict";a.r(s);var r=a(46),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"dullar-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dullar-cli"}},[t._v("#")]),t._v(" @dullar/cli "),a("a",{attrs:{href:"https://badge.fury.io/js/@dullar%2Fcli",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://badge.fury.io/js/@dullar%2Fcli.svg",alt:"npm version"}}),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("如果你还不懂如何用基于class的形式写组件，建议你先看一下 "),a("RouterLink",{attrs:{to:"/cli/vue-class-component.html"}},[t._v("Vue Class Component")])],1),t._v(" "),a("p",[t._v("如果你还不熟悉TypeScript我建议你需要先看一下"),a("a",{attrs:{href:"https://www.typescriptlang.org/docs/handbook/intro.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("TS文档"),a("OutboundLink")],1)])]),t._v(" "),a("h1",{attrs:{id:"intro"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#intro"}},[t._v("#")]),t._v(" Intro")]),t._v(" "),a("p",[t._v("快速生成基于vue2 + TypeScript + vuex + vue-router 的前端项目")]),t._v(" "),a("h1",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),a("p",[t._v("你是否幻想过前端如何像后台类似Java一样优雅的实现"),a("Badge",{attrs:{text:"继承😊"}}),t._v("  ？")],1),t._v(" "),a("p",[t._v("你是否幻想过写Vue如何像写"),a("Badge",{attrs:{text:"TypeScript"}}),t._v("一样不用在写"),a("Badge",{attrs:{text:"HTML template😡",type:"error"}}),t._v("但又避免react那种恶心的"),a("Badge",{attrs:{text:"jsx😡",type:"error"}}),t._v("语法？")],1),t._v(" "),a("p",[t._v("你是否幻想过前端如何设计"),a("Badge",{attrs:{text:"插件机制😊"}}),t._v("，把一个个独立的应用安装在平台上面组成一个大的应用，并且又保持每个小插件相互独立【插件==应用】？")],1),t._v(" "),a("p",[t._v("你是否幻想过前端如何优雅的实现"),a("Badge",{attrs:{text:"二开机制😊"}}),t._v("而不需要每次把主线合到分叉分支后一大堆"),a("Badge",{attrs:{text:"报错😭",type:"error"}}),t._v("？")],1),t._v(" "),a("p",[a("s",[t._v("你是否幻想过前端再也不用被后台"),a("Badge",{attrs:{text:"鄙视👎",type:"error"}}),t._v("被称为写页面的了？")],1)]),t._v(" "),a("p",[t._v("你是否幻想过同一个前端大项目如何更好"),a("Badge",{attrs:{text:"多人协同😊"}}),t._v("而不冲突？")],1),t._v(" "),a("h1",{attrs:{id:"from-0-to-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#from-0-to-1"}},[t._v("#")]),t._v(" From 0 to 1")]),t._v(" "),a("p",[t._v("根据上述对前端架构的一些诉求，如果要在Vue里面实现继承，就需要用typescript，当然ES6的类也可以，但是看起来并没有TS优雅。而要摒弃Vue的template语法其实也很简单，就需要使用Vue的createElement方法，也即render(h: createElement) {...}，这个要求对开发人员会高一点，因为这样写起来比较不直观，没有写HTML那样结构化语义化的简单。但是事情总有好的一面，直接写render不是更高级感觉更cool吗？再说插件机制，插件机制我们并不陌生，有些电脑软件时不时地更新个补丁或者有些软件如果需要额外的功能，都可以通过安装插件完成，要保证这一点就需要保证每个组件或者说插件需要有独立的目录，功能独立，目录独立，我觉得这个是必要条件"),a("s",[t._v("目前我没发现目录不独立的插件如何实现")]),t._v("。既然每个插件都是独立的目录了，那也就意味着把这个问题转化为，如何更优雅的加载这一个个独立的小插件，这个问题是核心，值得好好想想。实际上前端的继承可以理解为一种伪继承，因为它并不像后台语言设计那样专门为继承而生。【此刻脑子里幻想一下HTML页面如何继承...？】。所以这种前端的伪继承实际上就是一种后面的资源覆盖前面的资源，子组件覆盖父组件，后面的路由覆盖前面的路由，子页面覆盖父页面等等。具体实现上也就是有两个目录，一个是原应用的目录(applications)，一个是覆盖原应用的目录(custom)，核心开发负责applications里面的应用，有二开的伙伴负责custom里面的应用。custom里面的应用可以覆盖applications里面的应用。")]),t._v(" "),a("h1",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("npm install @dullar"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("cli "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("g\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h1",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("h4",{attrs:{id:"commands"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commands"}},[t._v("#")]),t._v(" Commands")]),t._v(" "),a("p",[t._v("list|l          查看所有的模版")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("dullar"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("cli list\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("init| -i          生成一个新项目")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("dullar"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("cli init\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("help| -h          帮助查看命令")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("dullar"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("cli "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("h\n\n\nStrongs"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("MacBook"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Pro"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),t._v(" stronglee$ dullar"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("cli "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("help\nUsage"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" dullar"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("cli "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("command"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\nOptions"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("V")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("version   output the version number\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("h"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("help      display help "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" command\n\nCommands"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n  list"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("l          View all avaliable templates\n  docs"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("d          View docs online\n  create"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("c "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  Create "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("a")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" project"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n  help "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("command"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  display help "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" command\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);