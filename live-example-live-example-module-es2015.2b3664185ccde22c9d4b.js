(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{m7ka:function(t,e,n){"use strict";n.r(e),n.d(e,"LiveExampleModule",(function(){return v}));var i=n("ofXK"),c=n("jn67"),o=n("fXoL");function s(t,e){const n="string"==typeof e?e:e.find(e=>t.hasOwnProperty(e.toLowerCase()));return void 0===n?void 0:t[n.toLowerCase()]}function a(t,e=!1){return void 0===t?e:"false"!==t.trim()}const r=["content"];function l(t,e){if(1&t&&(o.Tb(0,"p"),o.Bc(1," \u4f60\u8fd8\u53ef\u4ee5 "),o.Tb(2,"a",8),o.Bc(3,"\u4e0b\u8f7d\u8fd9\u4e2a\u4f8b\u5b50"),o.Sb(),o.Bc(4,"\u3002 "),o.Sb()),2&t){const t=o.fc(2);o.Ab(2),o.kc("href",t.zip,o.vc)}}function b(t,e){if(1&t&&(o.Tb(0,"span"),o.Tb(1,"div",5),o.Pb(2,"aio-embedded-stackblitz",6),o.Sb(),o.Ac(3,l,5,1,"p",7),o.Sb()),2&t){const t=o.fc();o.Ab(1),o.lc("title",t.title),o.Ab(1),o.kc("src",t.stackblitz),o.Ab(1),o.kc("ngIf",t.enableDownload)}}function f(t,e){if(1&t&&(o.Tb(0,"span"),o.Tb(1,"a",9),o.Bc(2),o.Sb(),o.Sb()),2&t){const t=o.fc();o.Ab(1),o.lc("title",t.title),o.kc("href",t.zip,o.vc),o.Ab(1),o.Cc(t.title)}}function d(t,e){if(1&t&&(o.Tb(0,"span"),o.Bc(1," / "),o.Tb(2,"a",8),o.Bc(3,"\u4e0b\u8f7d\u8303\u4f8b"),o.Sb(),o.Sb()),2&t){const t=o.fc(2);o.Ab(2),o.kc("href",t.zip,o.vc)}}function u(t,e){if(1&t&&(o.Tb(0,"span"),o.Tb(1,"a",10),o.Bc(2),o.Sb(),o.Ac(3,d,4,1,"span",7),o.Sb()),2&t){const t=o.fc();o.Ab(1),o.lc("title",t.title),o.kc("href",t.stackblitz,o.vc),o.Ab(1),o.Cc(t.title),o.Ab(1),o.kc("ngIf",t.enableDownload)}}const p=["*"],m=["iframe"],h=c.a+"live-examples/",w=c.a+"zips/";let g=(()=>{class t{constructor(t,e){const n=function(t){const e=t instanceof o.l?t.nativeElement.attributes:t.attributes,n={};for(const i of e)n[i.name.toLowerCase()]=i.value;return n}(t),i=this.getExampleDir(n,e.path(!1)),c=this.getStackblitzName(n);this.mode=this.getMode(n),this.enableDownload=this.getEnableDownload(n),this.stackblitz=this.getStackblitz(i,c,"embedded"===this.mode),this.zip=this.getZip(i,c),this.title=this.getTitle(n)}ngAfterContentInit(){const t=this.content.nativeElement.textContent.trim();t&&(this.title=t)}getEnableDownload(t){return!a(s(t,"noDownload"))}getExampleDir(t,e){let n=s(t,"name");if(!n){const t=e.match(/[^/?#]+(?=\/?(?:\?|#|$))/);n=t?t[0]:"index"}return n.trim()}getMode(t){const e=a(s(t,"downloadOnly")),n=a(s(t,"embedded"));return e?"downloadOnly":n?"embedded":"default"}getStackblitz(t,e,n){return`${h}${t}/${e}stackblitz.html${n?"?ctl=1":""}`}getStackblitzName(t){const e=(s(t,"stackblitz")||"").trim();return e&&e+"."}getTitle(t){return(s(t,"title")||"\u73b0\u573a\u6f14\u7ec3").trim()}getZip(t,e){const n=t.split("/")[0];return`${w}${t}/${e}${n}.zip`}}return t.\u0275fac=function(e){return new(e||t)(o.Ob(o.l),o.Ob(i.g))},t.\u0275cmp=o.Ib({type:t,selectors:[["live-example"]],viewQuery:function(t,e){var n;1&t&&o.yc(r,!0),2&t&&o.pc(n=o.cc())&&(e.content=n.first)},ngContentSelectors:p,decls:7,vars:3,consts:[[2,"display","none"],["content",""],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],[3,"title"],[3,"src"],[4,"ngIf"],["download","","title","\u4e0b\u8f7d\u8303\u4f8b",3,"href"],["download","",3,"href","title"],["target","_blank",3,"href","title"]],template:function(t,e){1&t&&(o.jc(),o.Tb(0,"span",0,1),o.ic(2),o.Sb(),o.Tb(3,"span",2),o.Ac(4,b,4,3,"span",3),o.Ac(5,f,3,3,"span",3),o.Ac(6,u,4,4,"span",4),o.Sb()),2&t&&(o.Ab(3),o.kc("ngSwitch",e.mode),o.Ab(1),o.kc("ngSwitchCase","embedded"),o.Ab(1),o.kc("ngSwitchCase","downloadOnly"))},directives:function(){return[i.m,i.n,i.o,k,i.k]},encapsulation:2}),t})(),k=(()=>{class t{ngAfterViewInit(){this.iframe&&(this.iframe.nativeElement.src=this.src)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Ib({type:t,selectors:[["aio-embedded-stackblitz"]],viewQuery:function(t,e){var n;1&t&&o.yc(m,!0),2&t&&o.pc(n=o.cc())&&(e.iframe=n.first)},inputs:{src:"src"},decls:2,vars:0,consts:[["frameborder","0","width","100%","height","100%"],["iframe",""]],template:function(t,e){1&t&&o.Pb(0,"iframe",0,1)},styles:["iframe[_ngcontent-%COMP%] { min-height: 400px; }"]}),t})(),v=(()=>{class t{constructor(){this.customElementComponent=g}}return t.\u0275mod=o.Mb({type:t}),t.\u0275inj=o.Lb({factory:function(e){return new(e||t)},imports:[[i.c]]}),t})()}}]);
//# sourceMappingURL=live-example-live-example-module-es2015.2b3664185ccde22c9d4b.js.map