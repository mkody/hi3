(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["news"],{a2f9:function(n,t,e){"use strict";e.r(t);var s=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"guides"},[e("markdown-it-vue",{staticClass:"md-body",attrs:{content:n.content}})],1)},i=[],c=(e("d3b7"),{name:"news",metaInfo:{title:"News - HI3",meta:[{vmid:"description",name:"description",content:"Actualités d'Honkai Impact 3rd."}]},data:function(){return{content:"",hashCHange:null}},mounted:function(){window.__PRERENDER_INJECTED||(this.fetchNews(),window.addEventListener("hashchange",this.fetchNews))},methods:{fetchNews:function(){var n=this,t=window.location.hash.substr(1);""!==t?fetch("/md/".concat(t,".md")).then((function(n){return n.text()})).then((function(t){n.content=t})):this.content="\n### Actualités\n\n- [3.5](#news-3.5)\n- [3.4](#news-3.4)\n- [3.3](#news-3.3)\n- [Version PC en Chine](#news-pc)\n"}}}),a=c,o=e("2877"),d=Object(o["a"])(a,s,i,!1,null,null,null);t["default"]=d.exports}}]);