(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-171ca186"],{2912:function(e,o,t){},dd7b:function(e,o,t){"use strict";t.r(o);var r=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"login"},[t("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules}},[t("h3",{staticClass:"title"},[e._v("JooLun微信后台管理系统")]),t("el-form-item",{attrs:{prop:"username"}},[t("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:"账号"},model:{value:e.loginForm.username,callback:function(o){e.$set(e.loginForm,"username",o)},expression:"loginForm.username"}},[t("svg-icon",{staticClass:"el-input__icon input-icon",attrs:{slot:"prefix","icon-class":"user"},slot:"prefix"})],1)],1),t("el-form-item",{attrs:{prop:"password"}},[t("el-input",{attrs:{type:"password","auto-complete":"off",placeholder:"密码"},nativeOn:{keyup:function(o){return!o.type.indexOf("key")&&e._k(o.keyCode,"enter",13,o.key,"Enter")?null:e.handleLogin(o)}},model:{value:e.loginForm.password,callback:function(o){e.$set(e.loginForm,"password",o)},expression:"loginForm.password"}},[t("svg-icon",{staticClass:"el-input__icon input-icon",attrs:{slot:"prefix","icon-class":"password"},slot:"prefix"})],1)],1),t("el-form-item",{attrs:{prop:"code"}},[t("el-input",{staticStyle:{width:"63%"},attrs:{"auto-complete":"off",placeholder:"验证码"},nativeOn:{keyup:function(o){return!o.type.indexOf("key")&&e._k(o.keyCode,"enter",13,o.key,"Enter")?null:e.handleLogin(o)}},model:{value:e.loginForm.code,callback:function(o){e.$set(e.loginForm,"code",o)},expression:"loginForm.code"}},[t("svg-icon",{staticClass:"el-input__icon input-icon",attrs:{slot:"prefix","icon-class":"validCode"},slot:"prefix"})],1),t("div",{staticClass:"login-code"},[t("img",{staticClass:"login-code-img",attrs:{src:e.codeUrl},on:{click:e.getCode}})])],1),t("el-checkbox",{staticStyle:{margin:"0px 0px 25px 0px"},model:{value:e.loginForm.rememberMe,callback:function(o){e.$set(e.loginForm,"rememberMe",o)},expression:"loginForm.rememberMe"}},[e._v("记住密码")]),t("el-form-item",{staticStyle:{width:"100%"}},[t("el-button",{staticStyle:{width:"100%"},attrs:{loading:e.loading,size:"medium",type:"primary"},nativeOn:{click:function(o){return o.preventDefault(),e.handleLogin(o)}}},[e.loading?t("span",[e._v("登 录 中...")]):t("span",[e._v("登 录")])])],1)],1),e._m(0)],1)},i=[function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"el-login-footer"},[t("span",[e._v("Copyright © 2018-2021 www.joolun.com & ruoyi.vip All Rights Reserved.")])])}],n=t("7ded"),s=t("a78e"),a=t.n(s),l=t("24e5"),c=t.n(l),u="MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAKoR8mX0rGKLqzcWmOzbfj64K8ZIgOdH\nnzkXSOVOZbFu/TJhZ7rFAN+eaGkl3C4buccQd/EjEsj9ir7ijT7h96MCAwEAAQ==",m="MIIBVAIBADANBgkqhkiG9w0BAQEFAASCAT4wggE6AgEAAkEAqhHyZfSsYourNxaY\n7Nt+PrgrxkiA50efORdI5U5lsW79MmFnusUA355oaSXcLhu5xxB38SMSyP2KvuKN\nPuH3owIDAQABAkAfoiLyL+Z4lf4Myxk6xUDgLaWGximj20CUf+5BKKnlrK+Ed8gA\nkM0HqoTt2UZwA5E2MzS4EI2gjfQhz5X28uqxAiEA3wNFxfrCZlSZHb0gn2zDpWow\ncSxQAgiCstxGUoOqlW8CIQDDOerGKH5OmCJ4Z21v+F25WaHYPxCFMvwxpcw99Ecv\nDQIgIdhDTIqD2jfYjPTY8Jj3EDGPbH2HHuffvflECt3Ek60CIQCFRlCkHpi7hthh\nYhovyloRYsM+IS9h/0BzlEAuO0ktMQIgSPT3aFAgJYwKpqRYKlLDVcflZFCKY7u3\nUP8iWi1Qw0Y=";function d(e){var o=new c.a;return o.setPublicKey(u),o.encrypt(e)}function g(e){var o=new c.a;return o.setPrivateKey(m),o.decrypt(e)}var p={name:"Login",data:function(){return{codeUrl:"",cookiePassword:"",loginForm:{username:"test",password:"123456",rememberMe:!1,code:"",uuid:""},loginRules:{username:[{required:!0,trigger:"blur",message:"用户名不能为空"}],password:[{required:!0,trigger:"blur",message:"密码不能为空"}],code:[{required:!0,trigger:"change",message:"验证码不能为空"}]},loading:!1,redirect:void 0}},watch:{$route:{handler:function(e){this.redirect=e.query&&e.query.redirect},immediate:!0}},created:function(){this.getCode(),this.getCookie()},methods:{getCode:function(){var e=this;Object(n["a"])().then((function(o){e.codeUrl="data:image/gif;base64,"+o.img,e.loginForm.uuid=o.uuid}))},getCookie:function(){var e=a.a.get("username"),o=a.a.get("password"),t=a.a.get("rememberMe");this.loginForm={username:void 0===e?this.loginForm.username:e,password:void 0===o?this.loginForm.password:g(o),rememberMe:void 0!==t&&Boolean(t)}},handleLogin:function(){var e=this;this.$refs.loginForm.validate((function(o){o&&(e.loading=!0,e.loginForm.rememberMe?(a.a.set("username",e.loginForm.username,{expires:30}),a.a.set("password",d(e.loginForm.password),{expires:30}),a.a.set("rememberMe",e.loginForm.rememberMe,{expires:30})):(a.a.remove("username"),a.a.remove("password"),a.a.remove("rememberMe")),e.$store.dispatch("Login",e.loginForm).then((function(){e.$router.push({path:e.redirect||"/"}).catch((function(){}))})).catch((function(){e.loading=!1,e.getCode()})))}))}}},f=p,h=(t("eecc"),t("2877")),v=Object(h["a"])(f,r,i,!1,null,null,null);o["default"]=v.exports},eecc:function(e,o,t){"use strict";t("2912")}}]);