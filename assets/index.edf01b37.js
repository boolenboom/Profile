import{t as b,r as f,o as d,c as p,n as w,u as a,a as j,b as h,F as T,d as x,e as q,f as e,g as G,w as R,h as E,i as B,j as S,k as Z,l as M,m as J,p as y,q as C,s as K,v as V,x as $,S as P,y as Q,z as ee,A as te,B as se}from"./vendor.64f4097c.js";const oe=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function l(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=l(t);fetch(t.href,s)}};oe();const ne={props:{isLoadComplete:{type:Boolean,default(){return!1}}},setup(r){const n=r;let{isLoadComplete:l}=b(n),o=f(!1);function t(){console.log(n),document.visibilityState=="visible"&&l.value?s():setTimeout(t,3e3)}function s(){window.scrollTo({top:0,left:0}),o.value=!0}return setTimeout(t,3e3),(i,c)=>(d(),p("div",{class:w(["pos-fixed fullScreen zIndex-L1 bg-halfBlue",{"dis-none":a(o)}])}," Loading... ",2))}};const le={setup(r){return(n,l)=>{const o=j("router-view");return d(),p(T,null,[h(ne,{isLoadComplete:!0}),h(o)],64)}}};const ie=e("a",{href:"/#hero",class:"LOGO"},"Lee's profile",-1),re=e("div",null,null,-1),ae=e("div",null,null,-1),ce=e("div",null,null,-1),ue=[re,ae,ce],de={setup(r){let n=function(){let t=f("close");return{toggle:function(){t.value=t.value=="close"?"open":"close"},open:function(){t.value="open"},close:function(){t.value="close"},status:function(){return t.value}}}(),l=f("scrollUp"),o=function(){let t=0,s=!1;return function(){s||requestAnimationFrame(()=>{window.scrollY>t?(l.value="scrollDown",n.close()):window.scrollY<t&&(l.value="scrollUp"),s=!1,t=window.scrollY}),s=!0}};return x(()=>{window.addEventListener("scroll",o())}),q(()=>{window.removeEventListener("scroll",o())}),(t,s)=>(d(),p("nav",{class:w(["nav pos-fixed w-100 dis-flex",a(l)])},[ie,e("menu",{class:w(["dis-flex text-medium",`${a(n).status()}`])},[e("button",{class:"menu-switch",onClick:s[0]||(s[0]=i=>a(n).toggle())},ue),e("a",{href:"/#summary",onClick:s[1]||(s[1]=i=>a(n).close())},"Summary"),e("a",{href:"/#portfolio",onClick:s[2]||(s[2]=i=>a(n).close())},"Portfolio & Links"),e("a",{href:"/#skills",onClick:s[3]||(s[3]=i=>a(n).close())},"Skills"),e("a",{href:"/#experience",onClick:s[4]||(s[4]=i=>a(n).close())},"Experience")],2)],2))}};const pe={class:"fliper"},_e=["data-id"],fe={class:"hidden"},ve={props:{textList:{type:Array,vaildator(r=[]){return r.filter(n=>typeof n=="string")},default(){return[]}}},setup(r){const n=r;let{textList:l}=b(n),o=G([]),t=f("");R(l,()=>{s()}),x(()=>{s()});function s(){o.length=l.value.length,o[0]="running",o.fill("paused",1);let v=Array.from(l.value);t.value=v.sort((_,m)=>m.length-_.length)[0]}let i=f(2);function c(v){const _=v.target.dataset.id,m=l.value.length,g=(+_+1)%m;o[_]="paused",o[g]="running"}function u(v){return o[v]=="running"}return(v,_)=>(d(),p("div",pe,[(d(!0),p(T,null,E(a(l),(m,g)=>(d(),p("h1",{class:w(["text",{active:u(g)}]),"data-id":g,style:S(`--duration: ${a(i)/.8}s;`),onAnimationend:c},B(m),47,_e))),256)),e("h1",fe,B(a(t)),1)]))}};const he={id:"hero",class:"dis-flex center"},me={class:"intro"},ge=e("h1",{class:"text-larger"},"\u55E8 !",-1),ye={class:"dis-flex text-larger"},we=e("h1",null," \u6211 ",-1),xe=e("div",{class:"personalInfo text-medium"},[e("h3",null,"\u81FA\u4E2D\u6559\u80B2\u5927\u5B78 \u6578\u4F4D\u5167\u5BB9\u79D1\u6280\u5B78\u7CFB"),e("h3",null,"0911572605"),e("h3",null,"alan93072@gmail.com")],-1),$e=e("div",{class:"otherDocument text-small"},[e("a",{href:""},"Resume"),e("a",{href:""},"CV")],-1),Le={setup(r){return(n,l)=>(d(),p("section",he,[e("div",me,[ge,e("div",ye,[we,h(ve,{textList:["\u662F\u674E\u6771\u9060","\u8FFD\u5C0B\u6838\u5FC3","\u662F\u524D\u7AEF\u5DE5\u7A0B\u5E2B"]})]),xe,$e])]))}};var N="/Profile/assets/Lee_icon.677df278.png";function ke(r=0,n){this.status=f("initial"),this.progress=f(0);let l=this,o=r,t=n;this.setRange=function(i,c){o=i||o,t=c};function s(){return()=>{window.requestAnimationFrame(()=>{if(t==null)l.status.value=window.scrollY>o?"pass":"initial";else if(t!=null){let i=(window.scrollY-o)/(t-o);i=Math.round(Math.min(1,Math.max(0,i))*1e3)/1e3,l.progress.value=i,l.status.value=i>0?i>=1?"pass":"enter":"initial"}})}}window.addEventListener("scroll",s())}const Se={class:"pos-sticky"},Te={class:"fuseBG"},Ce={width:"6877",height:"548",viewBox:"0 0 6877 548",fill:"none",xmlns:"http://www.w3.org/2000/svg"},be={id:"fuseGradient"},Pe=e("stop",{offset:"0%","stop-color":"#dd3333","stop-opacity":"1"},null,-1),Ae=["offset"],Ee=["offset"],Me=e("stop",{offset:"100%","stop-color":"#ffffff","stop-opacity":"0"},null,-1),Fe=e("radialGradient",{id:"starLight"},[e("stop",{offset:"0%","stop-color":"#ffffff"}),e("stop",{offset:"80%","stop-color":"#ffffff","stop-opacity":"1"}),e("stop",{offset:"100%","stop-color":"#ffffff","stop-opacity":"0"})],-1),Ie=e("path",{id:"fuseLine",d:"M-4 316.846C273.024 335.84 433.205 328.98 617.417 321.596C847.681 312.366 1208.86 58.4619 1173.27 179.223C1137.68 299.983 1007.42 184.627 1173.27 124.416C1315.39 72.8223 1556.21 46.3412 1718.06 49.2109C2110.38 56.1667 1998.06 183.447 2210.01 261.23C2530.39 378.808 3437.48 357.662 3367.35 124.416C3335.12 17.2111 3193.48 181.892 3298.07 223.76C3402.66 265.628 3695.82 742.25 3871 339.237C3900.57 271.231 4044.86 55.6775 4072.35 168.722C4180 611.261 4253.69 481.894 4379.12 223.76C4478.28 19.6791 5259.05 78.4295 5334 261.23",stroke:"url(#fuseGradient)","stroke-width":"8"},null,-1),Re=e("path",{d:"M-4 277.309C163.642 219.942 546.961 126.06 779.106 209.467C1069.29 313.725 1098.54 481.335 1360.64 518.25C1622.74 555.164 1974.93 406.509 2035.19 296.265C2095.45 186.021 2233.52 78.7704 2373.35 66.7982C2513.17 54.826 3053.75 54.826 3754.05 325.697C4454.34 596.568 4760.32 207.471 5629.69 226.926C6499.06 246.381 6469.81 413.493 6362.75 402.019C6255.69 390.546 6403.12 290.279 6511.35 290.279C6597.93 290.279 6791.19 310.898 6877 321.207",stroke:"url(#fuseGradient)","stroke-width":"12"},null,-1),Be=e("h1",{class:"text-large"},"About me",-1),De={class:"summary-content text-medium"},He={id:"p1",class:"dis-flex"},Ye=e("span",null," \u559C\u6B61\u900F\u904E\u5404\u7A2E\u65B9\u5F0F\u4F86\u5C0B\u627E\u80FD\u9054\u6210\u76EE\u6A19\u4E14\u4E00\u77F3\u4E8C\u9CE5\u7684\u89E3\u6C7A\u8FA6\u6CD5\uFF0C\u6587\u7AE0\u3001\u5BE6\u4F5C\u7D93\u9A57\u3001\u8AC7\u8A71\u4E2D\u627E\u51FA\u6709\u50F9\u503C\u7684\u8CC7\u8A0A\uFF0C\u5E6B\u52A9\u6211\u7528\u66F4\u591A\u89D2\u5EA6\u53BB\u6316\u6398\u554F\u984C\u672C\u8CEA\u3002 ",-1),qe={id:"p2",class:"dis-flex"},Ge=e("span",null," \u900F\u904EVue\u6846\u67B6\u5E6B\u5BB6\u4EBA\u7684\u5DE5\u4F5C\u574A\u505A\u51FA\u6709RWD\u7684\u4E3B\u8996\u89BA\u4ECB\u7D39\u7DB2\u9801\uFF1B \u4E32\u63A5\u4EA4\u901A\u90E8\u7684\u516C\u5171\u904B\u8F38\u6574\u5408\u8CC7\u8A0A\u6D41\u901A\u670D\u52D9\u5E73\u81FA(PTX)\u505A\u51FA\u65C5\u904A\u7DB2\u7AD9\uFF0C\u4EE5\u53CA\u5F04\u4E00\u4E9B\u7C21\u55AE\u7684\u5C0F\u5617\u8A66\u589E\u9032\u6280\u8853\u7684\u61C9\u7528\u3002 ",-1),Ne={id:"p3",class:"dis-flex"},ze=e("span",null," \u5728\u5FEB\u901F\u8B8A\u5316\u7684\u524D\u7AEF\u9818\u57DF\u88E1\uFF0C\u9700\u8981\u7684\u662F\u654F\u6377\u601D\u7DAD\u4EE5\u53CA\u6301\u7E8C\u5B78\u7FD2\u7684\u7CBE\u795E\uFF0C\u9019\u5C0D\u6211\u4F86\u8AAA\u5C31\u662F\u6703\u6E90\u6E90\u4E0D\u7D55\u5674\u51FA\u5BF6\u7269\u7684\u5730\u65B9\uFF0C\u7B49\u8457\u6211\u53BB\u6316\u6398\u3002 \u4E5F\u5E0C\u671B\u80FD\u5920\u66F4\u6DF1\u5165\u8EDF\u9AD4\u9818\u57DF\uFF0C\u8A8D\u8B58\u66F4\u591A\u65B0\u4E8B\u7269\uFF0C\u4E26\u4E14\u5275\u9020\u50F9\u503C\u3002 ",-1),We={setup(r){let n=G(new ke(0)),l=f(0),o=f(0);function t(){let i=document.querySelector("#summary");l.value=i.offsetTop+200,o.value=l.value+i.clientHeight-window.innerHeight-400,n.setRange(l.value,o.value)}let s=Z(()=>-1*Math.pow(Math.abs(n.progress-1),1.6)+1);return x(()=>{t(),window.addEventListener("resize",t)}),x(()=>{let i=document.querySelector("#summary div.pos-sticky");R(()=>n.progress,c=>{let u=(i.scrollWidth-window.innerWidth+(window.innerWidth-i.clientWidth))*c;i.scrollTo({left:u})})}),(i,c)=>(d(),p("section",{id:"summary",class:"fullScreen",style:S({"--progress":a(n).progress})},[e("div",Se,[e("span",Te,[(d(),p("svg",Ce,[e("defs",null,[e("linearGradient",be,[Pe,e("stop",{offset:`${a(s)*99.89}%`,"stop-color":"#dd3333","stop-opacity":"1"},null,8,Ae),e("stop",{offset:`${a(s)*99.89+.11}%`,"stop-color":"#ffffff","stop-opacity":"0"},null,8,Ee),Me]),Fe]),Ie,Re,e("circle",{class:w(["connect light",{"light-off":a(n).status=="initial"||a(n).status=="pass"}]),r:"50",fill:"url(#starLight)"},null,2),e("circle",{class:w(["main light",{"light-off":a(n).status=="initial"||a(n).status=="pass"}]),r:"50",fill:"url(#starLight)"},null,2)]))]),e("article",null,[Be,e("div",De,[e("p",He,[Ye,e("img",{class:w({"scale-up":a(n).progress>0}),src:N,alt:"personal icon"},null,2)]),e("p",qe,[e("img",{class:w({"scale-up":a(n).progress>.4}),src:N,alt:"personal icon"},null,2),Ge]),e("p",Ne,[e("img",{class:w({"scale-up":a(n).progress>.75}),src:N,alt:"personal icon"},null,2),ze])])])])],4))}};const Ue=["href"],Xe={viewBox:"0 0 84 84"},Oe=e("defs",null,[e("path",{id:"pathCircle",stroke:"#fff",fill:"none",d:"M42 0a42 42 0 0 1 0 84a42 42 0 0 1 0 -84z"})],-1),je={href:"#pathCircle"},D={props:{url:{type:String,default:"#"},BtnText:{type:String,default:"Btn................"}},setup(r){return(n,l)=>(d(),p("span",{href:r.url,class:"rotate-effect"},[(d(),p("svg",Xe,[Oe,e("text",null,[e("textPath",je,[M(n.$slots,"default")])])]))],8,Ue))}};const Ze={class:"radial-slider-wrapper"},Je=["onClick"],Ke={class:"wrapper"},Ve={class:"indicator text-large"},Qe={class:"indicator-name"},et=e("span",{class:"left"},"\xAB",-1),tt=e("span",{class:"right"},"\xBB",-1),st={props:{contentAmount:{type:Number,default:5},imageList:{type:Array,default(){return[]}}},setup(r){const n=r,{contentAmount:l}=b(n);let o=G([]);o.length=l.value;let t=f(-1),s=f(0),i=f(0);function c(){o.fill("");const _=(s.value+1)%l.value,m=(s.value+l.value-1)%l.value;o[s.value]="visible ",o[_]="next-slide static ",o[m]="prev-slide static "}x(()=>{c()});function u(_){i.value=_,console.log("next index: "+i.value)}R(i,(_,m)=>{o[_]=o[_].split(" ").filter(k=>k!=="static"&&(k==="next-slide"||k==="prev-slide")),o[_]+=" is-animating move-up ";let g=(s.value+l.value-(_-s.value))%l.value;o[g]=o[g].split(" ").filter(k=>k!=="static"&&(k==="next-slide"||k==="prev-slide")),o[g]+=" is-animating scale-down ",_==0&&m==l.value-1?t.value=1:_==l.value-1&&m==0?t.value=-1:t.value=i.value-s.value});function v(_){!_.target.className.includes("move-up")||(console.log(_),s.value=i.value,c())}return(_,m)=>(d(),p("div",Ze,[e("ul",{class:"radial-slider",style:S(`--slide-way:${a(t)}`)},[(d(!0),p(T,null,E(a(l),g=>(d(),p("li",{class:w(["dis-flex center",a(o)[g-1]]),style:S(`--imageUrl:url(${r.imageList[g-1]});`),onClick:J(k=>u(g-1),["prevent"]),onTransitionend:v},[e("div",Ke,[M(_.$slots,`slide${g}`)]),e("span",Ve,[e("span",Qe,[M(_.$slots,`title${g}`)]),et,tt])],46,Je))),256))],4)]))}};const ot={props:{startPoint:{type:Number,default:0},endPoint:{type:Number}},setup(r){const n=r,{startPoint:l,endPoint:o}=b(n);let t=f("initial"),s=f(0);function i(){return()=>{window.requestAnimationFrame(()=>{let c=l.value,u=o.value;u==null?t.value=window.scrollY>c?"pass":"initial":u!=null&&(window.scrollY>c&&window.scrollY<u?(s.value=(window.scrollY-c)/(u-c),t.value="enter"):window.scrollY>u?(s.value=1,t.value="pass"):(s.value=0,t.value="initial"))})}}return x(()=>{window.addEventListener("scroll",i())}),(c,u)=>(d(),p("div",{class:w(["scrollDetect",a(t)]),style:S(`--scope-progress:${a(s)};`)},[M(c.$slots,"default")],6))}};var z=(r,n)=>{const l=r.__vccOpts||r;for(const[o,t]of n)l[o]=t;return l};const L=r=>(K("data-v-0cf761d0"),r=r(),V(),r),nt={id:"portfolio"},lt=C("Travel Taiwan"),it=L(()=>e("div",{class:"workImg"},null,-1)),rt=L(()=>e("h2",{class:"text-large"},"Travel Taiwan",-1)),at=L(()=>e("p",{class:"text-small"},"\u4F7F\u7528\u516C\u5171\u904B\u8F38\u6574\u5408\u8CC7\u8A0A\u6D41\u901A\u670D\u52D9\u5E73\u53F0(Public Transport data eXchange ,PTX)\u7684\u8CC7\u6599\uFF0C\u5F9E\u4E32\u63A5\u5230\u8655\u7406\u8CC7\u6599\u7684\u904E\u7A0B\u5BEB\u6210\u5C0F\u5957\u4EF6\u63D0\u9AD8\u7A0B\u5F0F\u78BC\u8907\u7528\u6027\uFF0C\u4E14\u53EF\u4EE5\u5728\u4E0D\u540C\u5C08\u6848\u4F7F\u7528\u3002 \u80FD\u4F7F\u7528\u641C\u5C0B\u7684\u65B9\u5F0F\u5C0B\u627E\u5230\u60F3\u8981\u7684\u8CC7\u8A0A\u3002",-1)),ct={href:"#123",class:"jump-url"},ut=C("go to Travel Taiwan..."),dt=C("CSS Rush"),pt=L(()=>e("div",{class:"workImg"},null,-1)),_t=L(()=>e("h2",{class:"text-large"},"CSS Rush",-1)),ft=L(()=>e("p",{class:"text-small"},"pet-landing - \u5207\u7248\u5230\u5B8C\u6210\u8017\u664214\u5C0F\u6642\uFF0C\u4F7F\u7528CSS\u507D\u985E\u3001Input tag\u3001label tag \u88FD\u4F5C\u7C21\u6613\u8F2A\u64AD\u529F\u80FD\uFF0C\u4E26\u5305\u542BRWD\u3002",-1)),vt={href:"#456",class:"jump-url"},ht=C("go to CSS Rush..."),mt=C("Lee's profile"),gt=L(()=>e("div",{class:"workImg"},null,-1)),yt=L(()=>e("h2",{class:"text-large"},"Lee's profile",-1)),wt=L(()=>e("p",{class:"text-small"},"\u4F7F\u7528GSAP\u3001THREEJS\u5275\u5EFA\u8C50\u5BCC\u7279\u6548\u7684\u500B\u4EBA\u7DB2\u7AD9\uFF0C\u81EA\u884C\u8A2D\u8A08\u7DB2\u7AD9\u7684\u5E03\u5C40\u548C\u52D5\u756B\uFF0C \u628A\u500B\u4EBA\u7279\u8CEA\u548C\u5C0D\u4E16\u754C\u7684\u60F3\u6CD5\u878D\u5165\u7DB2\u7AD9\u6A23\u8C8C\u3002",-1)),xt={href:"#789",class:"jump-url"},$t=C("go to Lee's profile..."),Lt=C("Github Repos"),kt=L(()=>e("div",{class:"workImg"},null,-1)),St=L(()=>e("h2",{class:"text-large"},"Github Repos",-1)),Tt=L(()=>e("p",{class:"text-small"},"\u53C3\u8003GitHub RESTful API \u5B98\u65B9\u51FD\u5F0F\u5EAB(Octokit)\u7684\u4F7F\u7528\u65B9\u5F0F\uFF0C\u5728\u81EA\u884C\u7DE8\u5BEB\u7684\u5957\u4EF6\u4E0A\u64F4\u5145\u65B9\u6CD5\uFF0C \u8B93\u53D6\u5F97\u8CC7\u6599\u7684\u904E\u7A0B\u7C21\u5316\u3002\u53EF\u4EE5\u5FEB\u901F\u5730\u770B\u5230GitHub\u7684\u4F7F\u7528\u8005\u6E05\u55AE\uFF0C \u4EE5\u53CA\u4F7F\u7528\u8005\u7684Public Repos\uFF0C\u4E26\u900F\u904ERouter\u5FEB\u901F\u641C\u5C0B\u5230\u7279\u5B9A\u8CC7\u8A0A\u3002",-1)),Ct={href:"#012",class:"jump-url"},bt=C("go to Github Repos..."),Pt={setup(r){let n=f(0);function l(){let o=document.getElementById("portfolio");n.value=o.parentElement.clientHeight+o.parentElement.offsetTop-o.clientHeight-1}return x(()=>{l(),window.addEventListener("resize",l),window.addEventListener("load",l)}),(o,t)=>(d(),p("div",nt,[h(ot,{startPoint:a(n)},{default:y(()=>[h(st,{imageList:["src/assets/portfolio/travel-taiwan_3DMockUp.png","src/assets/portfolio/pet-landing_3DMockUp.png","src/assets/portfolio/github-repos_3DMockUp.png","src/assets/portfolio/github-repos_3DMockUp.png"],contentAmount:4},{title1:y(()=>[lt]),slide1:y(()=>[e("article",null,[it,rt,at,e("a",ct,[h(D,null,{default:y(()=>[ut]),_:1})])])]),title2:y(()=>[dt]),slide2:y(()=>[e("article",null,[pt,_t,ft,e("a",vt,[h(D,null,{default:y(()=>[ht]),_:1})])])]),title3:y(()=>[mt]),slide3:y(()=>[e("article",null,[gt,yt,wt,e("a",xt,[h(D,null,{default:y(()=>[$t]),_:1})])])]),title4:y(()=>[Lt]),slide4:y(()=>[e("article",null,[kt,St,Tt,e("a",Ct,[h(D,null,{default:y(()=>[bt]),_:1})])])]),_:1},8,["imageList"])]),_:1},8,["startPoint"])]))}};var At=z(Pt,[["__scopeId","data-v-0cf761d0"]]);const Et=e("svg",{class:"dis-hidden"},[e("clipPath",{id:"triangle",clipPathUnits:"objectBoundingBox"},[e("path",{d:`M.33.1\r
            A2.39,2.39,0,0,0,.02,.66\r
            .23.23,0,0,0,.19,.98,\r
            2.22,2.22,0,0,0,.82,.98,\r
            .23.23,0,0,0,.98,.67,\r
            2.07,2.07,0,0,0,.67.09\r
            .2.2,0,0,0,.33.1Z`})])],-1),Mt={class:"fixedBackground pos-fixed fullScreen"},Ft={class:"stage dis-flex"},It=e("div",{class:"sphere summary2works"},[e("div",{class:"headSticker"},[e("div",{class:"tri"})]),e("div",{class:"hole"})],-1),Rt={setup(r){$.registerPlugin(P);let n=f(0),l=f(0),o=f(0),t=f(0),s=f(0),i=Q(()=>`--rotX:${n.value}deg;
            --rotY:${l.value}deg;
            --rotZ:${o.value}deg;
            --posX:${t.value}vmin;
            --posY:${s.value}vmin;`),c=f(!0),u=0;function v(A){window.requestAnimationFrame(()=>{const F=A.x/window.visualViewport.width,Y=A.y/window.visualViewport.height;n.value=$.utils.interpolate(-10,10,Y),l.value=$.utils.interpolate(10,-10,F),o.value=0;const I={x:Math.abs((Y-.5)*2),y:Math.abs((F-.5)*2)},X=F*(I.x*-.3+1)+.15*I.x,O=Y*(I.y*-.3+1)+.15*I.y;t.value=$.utils.interpolate([-24,-16,0,16,24],X),s.value=$.utils.interpolate([-24,-16,0,16,24],O),clearTimeout(u),u=setTimeout(_,3e3)}),c.value=!1}function _(){c.value=!0,window.requestAnimationFrame(()=>{[n.value,l.value,o.value,t.value,s.value]=Array(5).fill(0)})}x(()=>{window.addEventListener("pointerdown",v),window.addEventListener("pointermove",v),window.scrollTo({top:0,left:0,behavior:"smooth"})}),q(()=>{window.removeEventListener("pointerdown",v),window.removeEventListener("pointermove",v)});let m=f(!0);function g(){m.value=!0}function k(){!m.value||(m.value=!1,setTimeout(g,Math.random()*4e3+500))}x(()=>{k()});let H=f(!1);return x(()=>{$.to(".sphere.master",{onStart:function(){window.removeEventListener("pointerdown",v),window.removeEventListener("pointermove",v),window.requestAnimationFrame(()=>{clearTimeout(u),[n.value,l.value,o.value,t.value,s.value]=[10,0,0,0,24]}),c.value=!0},onReverseComplete:function(){window.addEventListener("pointerdown",v),window.addEventListener("pointermove",v),_()},y:"-150vh",scrollTrigger:{trigger:"#hero",start:"top -20%",endTrigger:".transitionAnimation.hero2summary",end:"top top",toggleActions:"play complete play complete",scrub:!0,onLeave:function(){H.value=!0},onEnterBack:function(){H.value=!1}},duration:1});let A=$.timeline().to(".sphere.summary2works",{y:"200vh",scale:1,duration:1}).to(".sphere.summary2works",{y:"100vh",scale:10,duration:1.5,delay:.3}).to(".sphere.summary2works",{scale:14,duration:2}).to(".sphere.summary2works",{y:0,ease:"expo",duration:1});P.create({animation:A,trigger:"#summary",start:"bottom bottom",endTrigger:"#portfolio",end:"top top",scrub:.5})}),(A,F)=>(d(),p(T,null,[Et,e("div",Mt,[e("div",Ft,[e("div",{class:w(["sphere master",{idle:a(c),pushUp:a(H)}]),style:S(a(i))},[e("div",{class:w(["eye",{wink:a(m)}]),onTransitionend:k},null,34)],6),It])])],64))}};const Bt={},Dt={class:"transitionAnimation fullScreen"},Ht={class:"pin"};function Yt(r,n){return d(),p("div",Dt,[e("div",Ht,[M(r.$slots,"default")])])}var W=z(Bt,[["render",Yt]]);const qt={props:{col:{type:Number,default:3},flashText:{type:String,default(){return"flash text"}}},setup(r){const n=r;$.registerPlugin(P);let{flashText:l}=b(n),o=f(4);R(l,s=>{o.value=Math.floor(28/s.length)});function t(s,i){let c=0;for(let u=0;u<4;u++)c+=Math.round(Math.random()*i/4);return s+c}return x(()=>{let s=$.timeline();s.to(".text-column",{xPercent:function(i){return i%2?t(-80,-120):t(60,80)},duration:5,ease:"linear"}).to(".text-column span",{startAt:{opacity:0},keyframes:{"5%":{opacity:1},"7%":{opacity:0},"10%":{opacity:1},"90%":{opacity:1},"93%":{opacity:0},"95%":{opacity:1},"100%":{opacity:0}},ease:"none",duration:5,delay:"random( 0,0.5 )"},"-=5"),P.create({animation:s,trigger:".transitionAnimation.hero2summary .pin",start:"top top",end:"+=90%",scrub:1,pin:!0})}),(s,i)=>(d(),p("div",{class:"animation-stage",style:S(`--col:${r.col};`)},[(d(!0),p(T,null,E(r.col,c=>(d(),p("div",{class:w(["text-column",`id${c}`]),style:S(`--start-pos:${c%2?t(-1800,-2400):t(-200,-600)}px;`)},[(d(!0),p(T,null,E(a(o),u=>(d(),p("span",null,B(a(l)),1))),256))],6))),256))],4))}};var Gt=z(qt,[["__scopeId","data-v-857ec034"]]);const Nt={class:"stepFlash-text"},zt={props:{aniText:{type:String,default:"Black Hole"},textAmount:{type:Number,default:15,vaildator(r){return r%1==0&&r>12}}},setup(r){const n=r;$.registerPlugin(P);let{aniText:l,textAmount:o}=b(n);x(()=>{let i=Array(o.value);i.fill(0),i=i.map((u,v)=>$.utils.interpolate(0,70,1-Math.pow(+(v/o.value-1),4)));let c=$.timeline();c.to(".stepFlash-text",{startAt:{opacity:0,top:function(u){return i[u]+"vh"},clipPath:function(u){let v=u?30-(i[u]-i[u-1])+1:0;return`polygon(0 ${v}vh, 100% ${v}vh, 100% 102%, 0 102%)`}},duration:.1}).to(".stepFlash-text",{opacity:1,ease:"steps(1)",stagger:.2,duration:1.5}).to(".stepFlash-text",{clipPath:"none",stagger:.2,duration:1}).to(".stepFlash-text",{opacity:0,ease:"steps(1)",stagger:.2,duration:1},"-=4.1"),P.create({animation:c,trigger:".transitionAnimation.summary2portfolio .pin",start:"top top",endTrigger:"#portfolio",end:"top top",scrub:1,pin:!0})});let t=f(1);function s(){let i=document.querySelector(".stepFlash-text");t.value=window.innerWidth/i.clientWidth}return x(()=>{s(),window.addEventListener("resize",s)}),q(()=>{window.removeEventListener("resize",s)}),(i,c)=>(d(),p("div",{class:"stepFlash-animation-stage",style:S(`--text-scaleX: ${a(t)}`)},[(d(!0),p(T,null,E(a(o),u=>(d(),p("h1",Nt,B(a(l)),1))),256))],4))}},Wt={setup(r){return(n,l)=>(d(),p(T,null,[h(de),h(Rt),h(Le),h(W,{class:"hero2summary"},{default:y(()=>[h(Gt,{flashText:"summary"})]),_:1}),h(We),h(W,{class:"summary2portfolio"},{default:y(()=>[h(zt,{aniText:"work&links"})]),_:1}),h(At)],64))}},Ut=[{path:"/",name:"Home",component:Wt}],Xt=ee({history:te(),routes:Ut});const U=se(le);U.use(Xt);U.mount("#app");