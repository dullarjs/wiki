(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{323:function(e,n,a){var t=a(1),s=a(2),c=a(5),i=a(48),o=[].slice,l=function(e){return function(n,a){var t=arguments.length>2,s=t?o.call(arguments,2):void 0;return e(t?function(){(c(n)?n:Function(n)).apply(this,s)}:n,a)}};t({global:!0,bind:!0,forced:/MSIE .\./.test(i)},{setTimeout:l(s.setTimeout),setInterval:l(s.setInterval)})},349:function(e,n,a){},400:function(e,n,a){"use strict";a(349)},432:function(e,n,a){"use strict";a.r(n);a(81),a(323);var t={name:"DemoActionSheet",props:{demo:String},data:function(){return{basic:!1,basicActions:[{name:"option1",className:"",disable:!1,key:"1"},{name:"option2",className:"",disable:!1,key:"2"},{name:"option3",className:"",disable:!0,key:"5"},{name:"option4",className:"",disable:!1,key:"11"},{name:"option5",className:"",disable:!0,key:"12"}],cancel:!1,cancelActions:[{name:"option1",className:"",disable:!0,key:"1"},{name:"option2",className:"",disable:!1,key:"2"},{name:"option3",className:"",disable:!1,key:"5"},{name:"option4",className:"",disable:!0,key:"11"},{name:"option5",className:"",disable:!1,key:"12"}],async:!1,loading:!1,asyncActions:[]}},methods:{handleBasicUsage:function(){this.basic=!this.basic},handleCancelUsage:function(){this.cancel=!this.cancel},handleAsyncUsage:function(){this.async=!this.async},getSelect:function(e){console.log(e.name),this.Toast(e.name)},handleBeforeEnter:function(){var e=this;if(this.asyncActions.length>0)return!1;this.loading=!0,setTimeout((function(){e.loading=!1,e.asyncActions=[{name:"option1",className:"",disable:!0,key:"1"},{name:"option2",className:"",disable:!1,key:"2"},{name:"option3",className:"",disable:!1,key:"5"},{name:"option4",className:"",disable:!0,key:"11"},{name:"option5",className:"",disable:!1,key:"12"}]}),3e3)}}},s=(a(400),a(47)),c=Object(s.a)(t,(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",[a("ul",["1"===e.demo?a("li",{on:{click:e.handleBasicUsage}},[a("yn-button",{attrs:{type:"primary"}},[e._v("基础用法")])],1):e._e(),e._v(" "),"2"===e.demo?a("li",{on:{click:e.handleCancelUsage}},[a("yn-button",{attrs:{type:"primary"}},[e._v("带取消 & 禁止某些选线")])],1):e._e(),e._v(" "),"3"===e.demo?a("li",{on:{click:e.handleAsyncUsage}},[a("yn-button",{attrs:{type:"primary"}},[e._v("异步加载")])],1):e._e()]),e._v(" "),a("yn-action-sheet",{attrs:{actions:e.basicActions},on:{getSelected:e.getSelect},model:{value:e.basic,callback:function(n){e.basic=n},expression:"basic"}}),e._v(" "),a("yn-action-sheet",{attrs:{actions:e.cancelActions,showCancel:""},on:{getSelected:e.getSelect},model:{value:e.cancel,callback:function(n){e.cancel=n},expression:"cancel"}}),e._v(" "),a("yn-action-sheet",{attrs:{loading:e.loading,actions:e.asyncActions,showCancel:""},on:{beforeEnter:e.handleBeforeEnter,getSelected:e.getSelect},model:{value:e.async,callback:function(n){e.async=n},expression:"async"}})],1)}),[],!1,null,"31b666e1",null);n.default=c.exports}}]);