(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{374:function(o,t,n){},444:function(o,t,n){o.exports=n.p+"assets/img/logo.6b15c453.svg"},445:function(o,t,n){"use strict";n(374)},461:function(o,t,n){"use strict";n.r(t);n(31),n(84);var i=n(444),a=n.n(i),s=Math.random(),e={name:"DemoMobile",props:{location:String},computed:{computedLocation:function(){return this.location.replace("/#/","/index.html?version=".concat(s,"#/"))}},data:function(){return{loading:!0,logo:a.a}},methods:{handleOnload:function(){this.loading=!1},handleOnError:function(){window.location.reload()}}},l=(n(445),n(56)),c=Object(l.a)(e,(function(){var o=this.$createElement,t=this._self._c||o;return t("div",{staticClass:"mobile-box"},[t("div",{staticClass:"logo-box",class:this.loading?"":"hide"},[t("img",{staticClass:"animation-logo",attrs:{src:this.logo}})]),this._v(" "),t("iframe",{class:this.loading?"hide":"",attrs:{src:this.computedLocation,width:"320px",height:"568px"},on:{load:this.handleOnload,error:this.handleOnError}})])}),[],!1,null,null,null);t.default=c.exports}}]);