(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{444:function(t,e,n){"use strict";n.r(e);n(24);var m={data:function(){return{name:null,comment:null}},methods:{onSubmit:function(){var t={name:this.name,comment:this.comment,date:new Date};this.$emit("comment-submitted",t),this.name=null,this.comment=null,this.date=null}}},o=n(4),component=Object(o.a)(m,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{staticClass:"blog-comment-section",attrs:{id:"comment-form"},on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[t._m(0),t._v(" "),n("div",{staticClass:"comment-container"},[n("div",{staticClass:"contain"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"post-comment-name pl",attrs:{required:"",id:"name",placeholder:"Your sweet name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.comment,expression:"comment"}],staticClass:"post-comment-text",attrs:{cols:"4",required:"",id:"comment",placeholder:"Write your comment here and remember you will not be able to delete it. In case contact Saurabh.\n         "},domProps:{value:t.comment},on:{input:function(e){e.target.composing||(t.comment=e.target.value)}}}),t._v(" "),n("button",{staticClass:"post-comment-button",attrs:{type:"submit",value:"Submit"}},[t._v("Post Comment")])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"contain"},[e("div",{staticClass:"comment-heading"},[e("p",[this._v("Loved it. Leave a thoughtful Comment.")])])])}],!1,null,null,null);e.default=component.exports}}]);