import{t as T,r as _,o as d,c as p,n as x,u as a,a as e,b as j,d as h,F as P,e as $,f as Y,g as q,w as B,h as E,i as R,j as L,k as V,l as Z,m as F,p as y,q as m,s as J,v as K,x as b,S as A,y as Q,z as ee,A as te,B as se}from"./vendor.11198dcb.js";const oe=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}};oe();var ne="/Profile/assets/332-loader-3-lineal.0df6173e.gif";const le=e("div",{class:"dis-flex"},[e("span",null," Loading... "),e("img",{src:ne})],-1),ie=[le],re={props:{isLoadComplete:{type:Boolean,default(){return!1}}},setup(r){const l=r;let{isLoadComplete:n}=T(l),o=_(!1);function t(){console.log(l),document.visibilityState=="visible"&&n.value?s():setTimeout(t,3e3)}function s(){window.scrollTo({top:0,left:0}),o.value=!0}return setTimeout(t,3e3),(i,c)=>(d(),p("div",{class:x(["pos-fixed fullScreen zIndex-L1 loading",{loaded:a(o)}])},ie,2))}};const ae={setup(r){return(l,n)=>{const o=j("router-view");return d(),p(P,null,[h(re,{isLoadComplete:!0}),h(o)],64)}}};const ce=e("a",{href:"/#hero",class:"LOGO"},"Lee's profile",-1),ue=e("div",null,null,-1),de=e("div",null,null,-1),pe=e("div",null,null,-1),_e=[ue,de,pe],fe={setup(r){let l=function(){let t=_("close");return{toggle:function(){t.value=t.value=="close"?"open":"close"},open:function(){t.value="open"},close:function(){t.value="close"},status:function(){return t.value}}}(),n=_("scrollUp"),o=function(){let t=0,s=!1;return function(){s||requestAnimationFrame(()=>{window.scrollY>t?(n.value="scrollDown",l.close()):window.scrollY<t&&(n.value="scrollUp"),s=!1,t=window.scrollY}),s=!0}};return $(()=>{window.addEventListener("scroll",o())}),Y(()=>{window.removeEventListener("scroll",o())}),(t,s)=>(d(),p("nav",{class:x(["nav pos-fixed w-100 dis-flex",a(n)])},[ce,e("menu",{class:x(["dis-flex text-medium",`${a(l).status()}`])},[e("button",{class:"menu-switch",onClick:s[0]||(s[0]=i=>a(l).toggle())},_e),e("a",{href:"/#summary",onClick:s[1]||(s[1]=i=>a(l).close())},"Summary"),e("a",{href:"/#portfolio",onClick:s[2]||(s[2]=i=>a(l).close())},"Works & Links")],2)],2))}};const ve={class:"fliper"},he=["data-id"],me={class:"hidden"},ge={props:{textList:{type:Array,vaildator(r=[]){return r.filter(l=>typeof l=="string")},default(){return[]}}},setup(r){const l=r;let{textList:n}=T(l),o=q([]),t=_("");B(n,()=>{s()}),$(()=>{s()});function s(){o.length=n.value.length,o[0]="running",o.fill("paused",1);let v=Array.from(n.value);t.value=v.sort((f,g)=>g.length-f.length)[0]}let i=_(2);function c(v){const f=v.target.dataset.id,g=n.value.length,w=(+f+1)%g;o[f]="paused",o[w]="running"}function u(v){return o[v]=="running"}return(v,f)=>(d(),p("div",ve,[(d(!0),p(P,null,E(a(n),(g,w)=>(d(),p("h1",{class:x(["text",{active:u(w)}]),"data-id":w,style:L(`--duration: ${a(i)/.8}s;`),onAnimationend:c},R(g),47,he))),256)),e("h1",me,R(a(t)),1)]))}};const we={id:"hero",class:"dis-flex center"},ye={class:"intro"},xe=e("h1",{class:"text-larger"},"\u55E8 !",-1),$e={class:"dis-flex text-larger"},be=e("h1",null," \u6211 ",-1),ke=e("div",{class:"personalInfo text-medium"},[e("h3",null,"\u81FA\u4E2D\u6559\u80B2\u5927\u5B78 \u6578\u4F4D\u5167\u5BB9\u79D1\u6280\u5B78\u7CFB"),e("h3",null,"0911572605"),e("h3",null,"alan93072@gmail.com")],-1),Se=e("div",{class:"otherDocument text-small"},[e("a",{href:""},"Resume"),e("a",{href:""},"CV")],-1),Le={setup(r){return(l,n)=>(d(),p("section",we,[e("div",ye,[xe,e("div",$e,[be,h(ge,{textList:["\u662F\u674E\u6771\u9060","\u71B1\u611B\u601D\u8003","\u8D70\u5728\u958B\u767C\u7684\u8DEF\u4E0A"]})]),ke,Se])]))}};var Pe="/Profile/assets/Profile_icon.2614d959.png",Te="/Profile/assets/1108-ferris-wheel-lineal.907f5147.gif",W="/Profile/assets/control_panel_lightOn.c393553f.png",Ae="/Profile/assets/control_panel.68c6fd33.png",Ce="/Profile/assets/treasure_plant_map.cf23b644.png",Ee="/Profile/assets/treasure_plant_map_light.03c737b8.png";function Fe(r=0,l){this.status=_("initial"),this.progress=_(0);let n=this,o=r,t=l;this.setRange=function(i,c){o=i||o,t=c};function s(){return()=>{window.requestAnimationFrame(()=>{if(t==null)n.status.value=window.scrollY>o?"pass":"initial";else if(t!=null){let i=(window.scrollY-o)/(t-o);i=Math.round(Math.min(1,Math.max(0,i))*1e3)/1e3,n.progress.value=i,n.status.value=i>0?i>=1?"pass":"enter":"initial"}})}}window.addEventListener("scroll",s())}const Me={class:"pos-sticky"},Ie={class:"fuseBG"},Be={width:"6877",height:"548",viewBox:"0 0 6877 548",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Re={id:"fuseGradient"},He=e("stop",{offset:"0%","stop-color":"#dd3333","stop-opacity":"1"},null,-1),De=["offset"],Ne=["offset"],Ye=e("stop",{offset:"100%","stop-color":"#ffffff","stop-opacity":"0"},null,-1),qe=e("radialGradient",{id:"starLight"},[e("stop",{offset:"0%","stop-color":"#ffffff"}),e("stop",{offset:"80%","stop-color":"#ffffff","stop-opacity":"1"}),e("stop",{offset:"100%","stop-color":"#ffffff","stop-opacity":"0"})],-1),Ge=e("path",{id:"fuseLine",d:"M-4 316.846C273.024 335.84 433.205 328.98 617.417 321.596C847.681 312.366 1208.86 58.4619 1173.27 179.223C1137.68 299.983 1007.42 184.627 1173.27 124.416C1315.39 72.8223 1556.21 46.3412 1718.06 49.2109C2110.38 56.1667 1998.06 183.447 2210.01 261.23C2530.39 378.808 3437.48 357.662 3367.35 124.416C3335.12 17.2111 3193.48 181.892 3298.07 223.76C3402.66 265.628 3695.82 742.25 3871 339.237C3900.57 271.231 4044.86 55.6775 4072.35 168.722C4180 611.261 4253.69 481.894 4379.12 223.76C4478.28 19.6791 5259.05 78.4295 5334 261.23",stroke:"url(#fuseGradient)","stroke-width":"8"},null,-1),We=e("path",{d:"M-4 277.309C163.642 219.942 546.961 126.06 779.106 209.467C1069.29 313.725 1098.54 481.335 1360.64 518.25C1622.74 555.164 1974.93 406.509 2035.19 296.265C2095.45 186.021 2233.52 78.7704 2373.35 66.7982C2513.17 54.826 3053.75 54.826 3754.05 325.697C4454.34 596.568 4760.32 207.471 5629.69 226.926C6499.06 246.381 6469.81 413.493 6362.75 402.019C6255.69 390.546 6403.12 290.279 6511.35 290.279C6597.93 290.279 6791.19 310.898 6877 321.207",stroke:"url(#fuseGradient)","stroke-width":"12"},null,-1),ze=e("h1",{class:"text-large"},"About me",-1),Oe={class:"summary-content text-medium"},Ue=e("p",{id:"p1",class:"dis-flex"},[e("span",null," \u559C\u6B61\u900F\u904E\u5404\u7A2E\u65B9\u5F0F\u4F86\u5C0B\u627E\u80FD\u9054\u6210\u76EE\u6A19\u4E14\u4E00\u77F3\u4E8C\u9CE5\u7684\u89E3\u6C7A\u8FA6\u6CD5\uFF0C\u6587\u7AE0\u3001\u5BE6\u4F5C\u7D93\u9A57\u3001\u8AC7\u8A71\u4E2D\u627E\u51FA\u6709\u50F9\u503C\u7684\u8CC7\u8A0A\uFF0C\u5E6B\u52A9\u6211\u7528\u66F4\u591A\u89D2\u5EA6\u53BB\u6316\u6398\u554F\u984C\u672C\u8CEA\u3002 "),e("img",{class:"icon scale-up",src:Pe,alt:"personal icon"})],-1),Xe={id:"p2",class:"dis-flex"},je=Z('<img src="'+Te+'" alt="personal icon"><div class="img-switch"><img class="grow-width" src="'+W+'" alt=""><img src="'+W+'" alt=""><img class="switch" src="'+Ae+'" alt=""></div>',2),Ve=[je],Ze=e("span",null," \u900F\u904EVue\u6846\u67B6\u5E6B\u5BB6\u4EBA\u7684\u5DE5\u4F5C\u574A\u505A\u51FA\u6709RWD\u7684\u4E3B\u8996\u89BA\u4ECB\u7D39\u7DB2\u9801\uFF1B \u4E32\u63A5\u4EA4\u901A\u90E8\u7684\u516C\u5171\u904B\u8F38\u6574\u5408\u8CC7\u8A0A\u6D41\u901A\u670D\u52D9\u5E73\u81FA(PTX)\u505A\u51FA\u65C5\u904A\u7DB2\u7AD9\uFF0C\u4EE5\u53CA\u5F04\u4E00\u4E9B\u7C21\u55AE\u7684\u5C0F\u5617\u8A66\u589E\u9032\u6280\u8853\u7684\u61C9\u7528\u3002 ",-1),Je={id:"p3",class:"dis-flex"},Ke=e("img",{src:Ce,alt:""},null,-1),Qe=e("img",{class:"switch",src:Ee,alt:""},null,-1),et=[Ke,Qe],tt=e("span",null," \u5728\u5FEB\u901F\u8B8A\u5316\u7684\u524D\u7AEF\u9818\u57DF\u88E1\uFF0C\u9700\u8981\u7684\u662F\u654F\u6377\u601D\u7DAD\u4EE5\u53CA\u6301\u7E8C\u5B78\u7FD2\u7684\u7CBE\u795E\uFF0C\u9019\u5C0D\u6211\u4F86\u8AAA\u5C31\u662F\u6703\u6E90\u6E90\u4E0D\u7D55\u5674\u51FA\u5BF6\u7269\u7684\u5730\u65B9\uFF0C\u7B49\u8457\u6211\u53BB\u6316\u6398\u3002 \u4E5F\u5E0C\u671B\u80FD\u5920\u66F4\u6DF1\u5165\u8EDF\u9AD4\u9818\u57DF\uFF0C\u8A8D\u8B58\u66F4\u591A\u65B0\u4E8B\u7269\uFF0C\u4E26\u4E14\u5275\u9020\u50F9\u503C\u3002 ",-1),st={setup(r){let l=q(new Fe(0)),n=_(0),o=_(0);function t(){let i=document.querySelector("#summary");n.value=i.offsetTop+200,o.value=n.value+i.clientHeight-window.innerHeight-400,l.setRange(n.value,o.value)}let s=V(()=>-1*Math.pow(Math.abs(l.progress-1),1.6)+1);return $(()=>{t(),window.addEventListener("resize",t)}),$(()=>{let i=document.querySelector("#summary div.pos-sticky");B(()=>l.progress,c=>{let u=(i.scrollWidth-window.innerWidth+(window.innerWidth-i.clientWidth))*c;i.scrollTo({left:u})})}),(i,c)=>(d(),p("section",{id:"summary",class:"fullScreen",style:L({"--progress":a(l).progress})},[e("div",Me,[e("span",Ie,[(d(),p("svg",Be,[e("defs",null,[e("linearGradient",Re,[He,e("stop",{offset:`${a(s)*99.89}%`,"stop-color":"#dd3333","stop-opacity":"1"},null,8,De),e("stop",{offset:`${a(s)*99.89+.11}%`,"stop-color":"#ffffff","stop-opacity":"0"},null,8,Ne),Ye]),qe]),Ge,We,e("circle",{class:x(["connect light",{"light-off":a(l).status=="initial"||a(l).status=="pass"}]),r:"50",fill:"url(#starLight)"},null,2),e("circle",{class:x(["main light",{"light-off":a(l).status=="initial"||a(l).status=="pass"}]),r:"50",fill:"url(#starLight)"},null,2)]))]),e("article",null,[ze,e("div",Oe,[Ue,e("p",Xe,[e("div",{class:x(["icon",{"scale-up":a(l).progress>.4}])},Ve,2),Ze]),e("p",Je,[e("div",{class:x(["icon img-fadeInOut",{"scale-up":a(l).progress>.75}])},et,2),tt])])])])],4))}};const ot=["href"],nt={viewBox:"0 0 84 84"},lt=e("defs",null,[e("path",{id:"pathCircle",stroke:"#fff",fill:"none",d:"M42 0a42 42 0 0 1 0 84a42 42 0 0 1 0 -84z"})],-1),it={fill:"#21326a",stroke:"#21326a","stroke-width":"1"},rt={href:"#pathCircle"},H={props:{url:{type:String,default:"#"},BtnText:{type:String,default:"Btn................"}},setup(r){return(l,n)=>(d(),p("span",{href:r.url,class:"rotate-effect"},[(d(),p("svg",nt,[lt,e("text",it,[e("textPath",rt,[F(l.$slots,"default")])])]))],8,ot))}};const at={class:"radial-slider-wrapper"},ct=["onClick"],ut={class:"wrapper"},dt={class:"indicator text-large"},pt={class:"indicator-name"},_t=e("span",{class:"left"},null,-1),ft=e("span",{class:"right"},null,-1),vt={props:{contentAmount:{type:Number,default:5},imageList:{type:Array,default(){return[]}}},setup(r){const l=r,{contentAmount:n}=T(l);let o=q([]);o.length=n.value;let t=_(-1),s=_(0),i=_(0);function c(){o.fill("");const f=(s.value+1)%n.value,g=(s.value+n.value-1)%n.value;o[s.value]="visible ",o[f]="next-slide static ",o[g]="prev-slide static "}$(()=>{c()});function u(f){i.value=f,console.log("next index: "+i.value)}B(i,(f,g)=>{o[f]=o[f].split(" ").filter(S=>S!=="static"&&(S==="next-slide"||S==="prev-slide")),o[f]+=" is-animating move-up ";let w=(s.value+n.value-(f-s.value))%n.value;o[w]=o[w].split(" ").filter(S=>S!=="static"&&(S==="next-slide"||S==="prev-slide")),o[w]+=" is-animating scale-down ",f==0&&g==n.value-1?t.value=1:f==n.value-1&&g==0?t.value=-1:t.value=i.value-s.value});function v(f){!f.target.className.includes("move-up")||(console.log(f),s.value=i.value,c())}return(f,g)=>(d(),p("div",at,[e("ul",{class:"radial-slider",style:L(`--slide-way:${a(t)}`)},[(d(!0),p(P,null,E(a(n),w=>(d(),p("li",{class:x(["dis-flex center",a(o)[w-1]]),style:L(`--imageUrl:url(${r.imageList[w-1]});`),onClick:S=>u(w-1),onTransitionend:v},[e("div",ut,[F(f.$slots,`slide${w}`)]),e("span",dt,[e("span",pt,[F(f.$slots,`title${w}`)]),_t,ft])],46,ct))),256))],4)]))}};const ht={props:{startPoint:{type:Number,default:0},endPoint:{type:Number}},setup(r){const l=r,{startPoint:n,endPoint:o}=T(l);let t=_("initial"),s=_(0);function i(){return()=>{window.requestAnimationFrame(()=>{let c=n.value,u=o.value;u==null?t.value=window.scrollY>c?"pass":"initial":u!=null&&(window.scrollY>c&&window.scrollY<u?(s.value=(window.scrollY-c)/(u-c),t.value="enter"):window.scrollY>u?(s.value=1,t.value="pass"):(s.value=0,t.value="initial"))})}}return $(()=>{window.addEventListener("scroll",i())}),(c,u)=>(d(),p("div",{class:x(["scrollDetect",a(t)]),style:L(`--scope-progress:${a(s)};`)},[F(c.$slots,"default")],6))}};var mt="/Profile/assets/travel-taiwan_3DMockUp.7cbee9e7.png",gt="/Profile/assets/pet-landing_3DMockUp.3806e56e.png",wt="/Profile/assets/profile_3DMockUp.f62f6ba3.png",yt="/Profile/assets/github-repos_3DMockUp.56d1ca22.png";var G=(r,l)=>{const n=r.__vccOpts||r;for(const[o,t]of l)n[o]=t;return n};const k=r=>(J("data-v-f416a218"),r=r(),K(),r),xt={id:"portfolio"},$t=m("Travel Taiwan"),bt=k(()=>e("div",{class:"workImg"},null,-1)),kt=k(()=>e("h2",{class:"text-large"},"Travel Taiwan",-1)),St=k(()=>e("p",{class:"text-small"},[m(" \uFF0EVue2\u3001Vue Router\u3001AJAX\u3001SCSS\uFF0E"),e("br"),m(" \u4F7F\u7528\u516C\u5171\u904B\u8F38\u6574\u5408\u8CC7\u8A0A\u6D41\u901A\u670D\u52D9\u5E73\u53F0(Public Transport data eXchange , PTX)\u7684\u8CC7\u6599\uFF0C\u5F9E\u4E32\u63A5\u5230\u8655\u7406\u8CC7\u6599\u7684\u904E\u7A0B\u5BEB\u6210\u5C0F\u5957\u4EF6\u63D0\u9AD8\u7A0B\u5F0F\u78BC\u8907\u7528\u6027\uFF0C\u4EE5\u53CA\u78BA\u4FDD\u6B04\u4F4D\u7121\u8CC7\u6599\u6642\u7684\u8655\u7406\u3002"),e("br"),m(" \u4F7F\u7528\u7B2C\u4E09\u5C46\u7684\u524D\u7AEF\u4FEE\u7DF4\u7CBE\u795E\u6642\u5149\u5C4B(THE F2E)\u8A2D\u8A08\u7A3F("),e("a",{href:"https://www.figma.com/file/IBlZc32IdQ46jUVtfOHxZn/w1%E5%8F%B0%E7%81%A3%E6%97%85%E9%81%8A%E6%99%AF%E9%BB%9E%E5%B0%8E%E8%A6%BD?node-id=67%3A220",target:"_blank",rel:"noopener noreferrer"},"figma\u9023\u7D50"),m(")\u4E26\u4F9D\u7167\u8A2D\u8A08\u7A3F\u5B8C\u6210\u6A23\u5F0F\u548C\u8B8A\u7248\u3002 ")],-1)),Lt={href:"https://travel-taiwan.netlify.app/",target:"_blank",rel:"noopener noreferrer",class:"jump-url"},Pt=m("go to travel taiwan\xB7\xB7\xB7"),Tt=m("Pet-landing"),At=k(()=>e("div",{class:"workImg"},null,-1)),Ct=k(()=>e("h2",{class:"text-large"},"Pet-landing",-1)),Et=k(()=>e("p",{class:"text-small"},[m(" \uFF0EHTML\u3001CSS\uFF0E "),e("br"),m(" \u5B8C\u5168\u53C3\u7167monster template\u7684\u7DB2\u9801Pet-landing\u91CD\u88FD\u4F5C\uFF0C\u5207\u7248\u5230\u5B8C\u6210\u8017\u664214\u5C0F\u6642\uFF0C\u4F7F\u7528CSS\u507D\u985E\u3001Input tag\u3001label tag\u88FD\u4F5C\u7C21\u6613\u8F2A\u64AD\u529F\u80FD\uFF0C\u4E26\u5305\u542BRWD\u3002")],-1)),Ft={href:"https://boolenboom.github.io/CSS-Rush/pet-landing/",target:"_blank",rel:"noopener noreferrer",class:"jump-url"},Mt=m("go to pet-landing\xB7\xB7\xB7"),It=m("Lee's profile"),Bt=k(()=>e("div",{class:"workImg"},null,-1)),Rt=k(()=>e("h2",{class:"text-large"},"Lee's profile",-1)),Ht=k(()=>e("p",{class:"text-small"},[m(" \uFF0EVue3\u3001Vite\u3001GSAP\u3001SCSS\uFF0E"),e("br"),m(" \u4F7F\u7528GSAP\u5275\u5EFA\u8C50\u5BCC\u7279\u6548\u7684\u500B\u4EBA\u7DB2\u7AD9\uFF0C\u81EA\u884C\u8A2D\u8A08\u7DB2\u7AD9\u7684\u5E03\u5C40\u548C\u52D5\u756B\uFF0C \u628A\u500B\u4EBA\u7279\u8CEA\u548C\u5C0D\u4E16\u754C\u7684\u60F3\u6CD5\u878D\u5165\u7DB2\u7AD9\u6A23\u8C8C\u3002 ")],-1)),Dt={href:"https://boolenboom.github.io/Profile/",target:"_blank",rel:"noopener noreferrer",class:"jump-url"},Nt=m("go to lee's profile\xB7\xB7\xB7"),Yt=m("Github Repos"),qt=k(()=>e("div",{class:"workImg"},null,-1)),Gt=k(()=>e("h2",{class:"text-large"},"Github Repos",-1)),Wt=k(()=>e("p",{class:"text-small"},[m(" \uFF0EReact\u3001React Router\u3001Vite\u3001AJAX\uFF0E"),e("br"),m(" \u53C3\u8003GitHub RESTful API \u5B98\u65B9\u51FD\u5F0F\u5EAB(Octokit)\u7684\u4F7F\u7528\u65B9\u5F0F\uFF0C\u5728\u81EA\u884C\u7DE8\u5BEB\u7684\u5957\u4EF6\u4E0A\u64F4\u5145\u65B9\u6CD5\uFF0C \u8B93\u53D6\u5F97\u8CC7\u6599\u7684\u904E\u7A0B\u7C21\u5316\u3002\u53EF\u4EE5\u5FEB\u901F\u5730\u770B\u5230GitHub\u7684\u4F7F\u7528\u8005\u6E05\u55AE\u3001Repos\uFF0C\u4E26\u900F\u904ERouter\u5FEB\u901F\u641C\u5C0B\u5230\u7279\u5B9A\u8CC7\u8A0A\u3002")],-1)),zt={href:"https://react-repos-list.netlify.app/",target:"_blank",rel:"noopener noreferrer",class:"jump-url"},Ot=m("go to github repos\xB7\xB7\xB7"),Ut={setup(r){let l=_(0);function n(){let t=document.getElementById("portfolio");l.value=t.parentElement.clientHeight+t.parentElement.offsetTop-t.clientHeight-1}$(()=>{n(),window.addEventListener("resize",n),window.addEventListener("load",n)});let o=_([mt,gt,wt,yt]);return(t,s)=>(d(),p("div",xt,[h(ht,{startPoint:a(l)},{default:y(()=>[h(vt,{imageList:a(o),contentAmount:4},{title1:y(()=>[$t]),slide1:y(()=>[e("article",null,[bt,kt,St,e("a",Lt,[h(H,null,{default:y(()=>[Pt]),_:1})])])]),title2:y(()=>[Tt]),slide2:y(()=>[e("article",null,[At,Ct,Et,e("a",Ft,[h(H,null,{default:y(()=>[Mt]),_:1})])])]),title3:y(()=>[It]),slide3:y(()=>[e("article",null,[Bt,Rt,Ht,e("a",Dt,[h(H,null,{default:y(()=>[Nt]),_:1})])])]),title4:y(()=>[Yt]),slide4:y(()=>[e("article",null,[qt,Gt,Wt,e("a",zt,[h(H,null,{default:y(()=>[Ot]),_:1})])])]),_:1},8,["imageList"])]),_:1},8,["startPoint"])]))}};var Xt=G(Ut,[["__scopeId","data-v-f416a218"]]);const jt=e("svg",{class:"dis-hidden"},[e("clipPath",{id:"triangle",clipPathUnits:"objectBoundingBox"},[e("path",{d:`M.33.1\r
            A2.39,2.39,0,0,0,.02,.66\r
            .23.23,0,0,0,.19,.98,\r
            2.22,2.22,0,0,0,.82,.98,\r
            .23.23,0,0,0,.98,.67,\r
            2.07,2.07,0,0,0,.67.09\r
            .2.2,0,0,0,.33.1Z`})])],-1),Vt={class:"fixedBackground pos-fixed fullScreen"},Zt={class:"stage dis-flex"},Jt=e("div",{class:"sphere summary2works"},[e("div",{class:"headSticker"},[e("div",{class:"tri"})]),e("div",{class:"hole"})],-1),Kt={setup(r){b.registerPlugin(A);let l=_(0),n=_(0),o=_(0),t=_(0),s=_(0),i=Q(()=>`--rotX:${l.value}deg;
            --rotY:${n.value}deg;
            --rotZ:${o.value}deg;
            --posX:${t.value}vmin;
            --posY:${s.value}vmin;`),c=_(!0),u=0;function v(C){window.requestAnimationFrame(()=>{const M=C.x/window.visualViewport.width,N=C.y/window.visualViewport.height;l.value=b.utils.interpolate(-10,10,N),n.value=b.utils.interpolate(10,-10,M),o.value=0;const I={x:Math.abs((N-.5)*2),y:Math.abs((M-.5)*2)},U=M*(I.x*-.3+1)+.15*I.x,X=N*(I.y*-.3+1)+.15*I.y;t.value=b.utils.interpolate([-24,-16,0,16,24],U),s.value=b.utils.interpolate([-24,-16,0,16,24],X),clearTimeout(u),u=setTimeout(f,3e3)}),c.value=!1}function f(){c.value=!0,window.requestAnimationFrame(()=>{[l.value,n.value,o.value,t.value,s.value]=Array(5).fill(0)})}$(()=>{window.addEventListener("pointerdown",v),window.addEventListener("pointermove",v),window.scrollTo({top:0,left:0,behavior:"smooth"})}),Y(()=>{window.removeEventListener("pointerdown",v),window.removeEventListener("pointermove",v)});let g=_(!0);function w(){g.value=!0}function S(){!g.value||(g.value=!1,setTimeout(w,Math.random()*4e3+500))}$(()=>{S()});let D=_(!1);return $(()=>{b.to(".sphere.master",{onStart:function(){window.removeEventListener("pointerdown",v),window.removeEventListener("pointermove",v),window.requestAnimationFrame(()=>{clearTimeout(u),[l.value,n.value,o.value,t.value,s.value]=[10,0,0,0,24]}),c.value=!0},onReverseComplete:function(){window.addEventListener("pointerdown",v),window.addEventListener("pointermove",v),f()},y:"-150vh",scrollTrigger:{trigger:"#hero",start:"top -20%",endTrigger:".transitionAnimation.hero2summary",end:"top top",toggleActions:"play complete play complete",scrub:!0,onLeave:function(){D.value=!0},onEnterBack:function(){D.value=!1}},duration:1});let C=b.timeline().to(".sphere.summary2works",{y:"200vh",scale:1,duration:1}).to(".sphere.summary2works",{y:"100vh",scale:10,duration:1.5,delay:.3}).to(".sphere.summary2works",{scale:14,duration:2}).to(".sphere.summary2works",{y:0,ease:"expo",duration:1});A.create({animation:C,trigger:"#summary",start:"bottom bottom",endTrigger:"#portfolio",end:"top top",scrub:.5})}),(C,M)=>(d(),p(P,null,[jt,e("div",Vt,[e("div",Zt,[e("div",{class:x(["sphere master",{idle:a(c),pushUp:a(D)}]),style:L(a(i))},[e("div",{class:x(["eye",{wink:a(g)}]),onTransitionend:S},null,34)],6),Jt])])],64))}};const Qt={},es={class:"transitionAnimation fullScreen"},ts={class:"pin"};function ss(r,l){return d(),p("div",es,[e("div",ts,[F(r.$slots,"default")])])}var z=G(Qt,[["render",ss]]);const os={props:{col:{type:Number,default:3},flashText:{type:String,default(){return"flash text"}}},setup(r){const l=r;b.registerPlugin(A);let{flashText:n}=T(l),o=_(4);B(n,s=>{o.value=Math.floor(28/s.length)});function t(s,i){let c=0;for(let u=0;u<4;u++)c+=Math.round(Math.random()*i/4);return s+c}return $(()=>{let s=b.timeline();s.to(".text-column",{xPercent:function(i){return i%2?t(-80,-120):t(60,80)},duration:5,ease:"linear"}).to(".text-column span",{startAt:{opacity:0},keyframes:{"5%":{opacity:1},"7%":{opacity:0},"10%":{opacity:1},"90%":{opacity:1},"93%":{opacity:0},"95%":{opacity:1},"100%":{opacity:0}},ease:"none",duration:5,delay:"random( 0,0.5 )"},"-=5"),A.create({animation:s,trigger:".transitionAnimation.hero2summary .pin",start:"top top",end:"+=90%",scrub:1,pin:!0})}),(s,i)=>(d(),p("div",{class:"animation-stage",style:L(`--col:${r.col};`)},[(d(!0),p(P,null,E(r.col,c=>(d(),p("div",{class:x(["text-column",`id${c}`]),style:L(`--start-pos:${c%2?t(-1800,-2400):t(-200,-600)}px;`)},[(d(!0),p(P,null,E(a(o),u=>(d(),p("span",null,R(a(n)),1))),256))],6))),256))],4))}};var ns=G(os,[["__scopeId","data-v-857ec034"]]);const ls={class:"stepFlash-text"},is={props:{aniText:{type:String,default:"Black Hole"},textAmount:{type:Number,default:15,vaildator(r){return r%1==0&&r>12}}},setup(r){const l=r;b.registerPlugin(A);let{aniText:n,textAmount:o}=T(l);$(()=>{let i=Array(o.value);i.fill(0),i=i.map((u,v)=>b.utils.interpolate(0,70,1-Math.pow(+(v/o.value-1),4)));let c=b.timeline();c.to(".stepFlash-text",{startAt:{opacity:0,top:function(u){return i[u]+"vh"},clipPath:function(u){let v=u?30-(i[u]-i[u-1])+1:0;return`polygon(0 ${v}vh, 100% ${v}vh, 100% 102%, 0 102%)`}},duration:.1}).to(".stepFlash-text",{opacity:1,ease:"steps(1)",stagger:.2,duration:1.5}).to(".stepFlash-text",{clipPath:"none",stagger:.2,duration:1}).to(".stepFlash-text",{opacity:0,ease:"steps(1)",stagger:.2,duration:1},"-=4.1"),A.create({animation:c,trigger:".transitionAnimation.summary2portfolio .pin",start:"top top",endTrigger:"#portfolio",end:"top top",scrub:1,pin:!0})});let t=_(1);function s(){let i=document.querySelector(".stepFlash-text");t.value=window.innerWidth/i.clientWidth}return $(()=>{s(),window.addEventListener("resize",s)}),Y(()=>{window.removeEventListener("resize",s)}),(i,c)=>(d(),p("div",{class:"stepFlash-animation-stage",style:L(`--text-scaleX: ${a(t)}`)},[(d(!0),p(P,null,E(a(o),u=>(d(),p("h1",ls,R(a(n)),1))),256))],4))}},rs={setup(r){return(l,n)=>(d(),p(P,null,[h(fe),h(Kt),h(Le),h(z,{class:"hero2summary"},{default:y(()=>[h(ns,{flashText:"summary"})]),_:1}),h(st),h(z,{class:"summary2portfolio"},{default:y(()=>[h(is,{aniText:"work&links"})]),_:1}),h(Xt)],64))}},as=[{path:"/",name:"Home",component:rs}],cs=ee({history:te(),routes:as});const O=se(ae);O.use(cs);O.mount("#app");
