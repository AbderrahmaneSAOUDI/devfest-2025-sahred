(function(_ds){var window=this;var MT=function(){return"devsite-concierge"},lFa=function(a){a.eventHandler.listen(a,"devsite-concierge-close-panel",()=>{document.body.getAttribute("concierge")==="modal"&&(a.dispatchEvent(new CustomEvent("devsite-sitemask-hide",{bubbles:!0})),a.Lg=!1);_ds.Bv(a,{type:"sidePanel",name:"closed",metadata:{id:a.Ud,name:a.tagName.toLowerCase(),action:"close button click"}});NT(a,!0)});a.eventHandler.listen(a,"devsite-concierge-open-panel",c=>{c=c.getBrowserEvent().detail.aC;a.o(c,!0)});a.eventHandler.listen(document.body,
"devsite-sitemask-hidden",()=>{document.body.getAttribute("concierge")==="modal"&&(a.Lg=!1,_ds.Av(a,"concierge","open",document.body))});a.eventHandler.listen(a,"devsite-concierge-fullscreen-panel",()=>{a.Lg=!0;_ds.Av(a,"concierge","modal",document.body);a.dispatchEvent(new CustomEvent("devsite-sitemask-show",{bubbles:!0}));_ds.Bv(a,{type:"sidePanel",name:"fullscreen",metadata:{id:a.Ud,name:a.tagName.toLowerCase()}})});a.eventHandler.listen(a,"devsite-concierge-dock-panel",c=>{c=c.getBrowserEvent();
a.Lg=!1;_ds.Av(a,"concierge","open",document.body);c&&c.detail&&c.detail.hideSitemask&&a.dispatchEvent(new CustomEvent("devsite-sitemask-hide",{bubbles:!0}))});a.eventHandler.listen(a,"devsite-concierge-set-notification",c=>{c=c.getBrowserEvent();kFa(a,c)});a.eventHandler.listen(a,"devsite-concierge-clear-notification",c=>{switch(c.getBrowserEvent().detail.tagName){case "devsite-concierge-ai-panel":a.hk=!1;a.Jm="";break;case "devsite-concierge-info-panel":a.fl=!1;a.Un="";break;case "devsite-concierge-recommendations-panel":a.Jl=
!1;a.Qo="";break;case "devsite-concierge-api-explorer-panel":a.jk=!1;a.Mm="";break;case "devsite-concierge-my-activity-panel":a.Dl=!1,a.Go=""}});a.eventHandler.listen(document.body,"devsite-before-page-change",()=>{a.largeViewport||NT(a)});const b=window.matchMedia("(min-width: 1400px)");a.largeViewport=b.matches;a.eventHandler.listen(b,"change",c=>{c=c.getBrowserEvent().matches;a.largeViewport=c});a.eventHandler.listen(document.body,"devsite-page-changed",()=>{OT(a)});a.eventHandler.listen(document.body,
"devsite-viewport-change",c=>{c=c.getBrowserEvent().detail.viewport==="viewport--desktop";if(a.Jk)a.Sw=c,_ds.$u(a);else if(!c){c=document.body.getAttribute("concierge")==="modal";const d=document.body.getAttribute("concierge")==="open";c&&(a.dispatchEvent(new CustomEvent("devsite-sitemask-hide",{bubbles:!0})),a.Lg=!1);d&&(a.panelOpen=!1);if(c||d)NT(a,!0),_ds.$u(a)}});if(a.Jk){let c;(c=window.document.getElementsByClassName("devsite-devguide-mobile-button").item(0))==null||c.addEventListener("click",
()=>{a.o("devsite-concierge-info-panel",!1)})}},OT=function(a){const b=_ds.B(),c=document.body.getAttribute("type");let d=document.body.hasAttribute("display-toc");if(c==="lcat"||c==="codelab")d=!1;else if(a.tenantId===1){if(b.pathname.match("^/learn[/]?")||b.pathname.match("^/community[/]?")||b.pathname.match("^/solutions[/]?"))d=!0;c==="profile"&&(d=!0)}d?_ds.Av(a,"concierge",a.Lg?"modal":a.panelOpen?"open":"closed",document.body):_ds.Av(a,"concierge","hide",document.body);return d},NT=async function(a,
b=!1){b&&await (await _ds.v()).getStorage().set("devguide_state","","CLOSED");await PT(a,!1)},kFa=async function(a,b){const c=b.detail.tagName;b=b.detail.message;if(a.Ud!==c)switch(c){case "devsite-concierge-ai-panel":a.hk&&(a.hk=!1,a.Jm="",_ds.$u(a),await a.j);a.hk=!0;b&&(a.Jm=b);break;case "devsite-concierge-info-panel":a.fl&&(a.fl=!1,a.Un="",_ds.$u(a),await a.j);a.fl=!0;b&&(a.Un=b);break;case "devsite-concierge-recommendations-panel":a.Jl&&(a.Jl=!1,a.Qo="",_ds.$u(a),await a.j);a.Jl=!0;b&&(a.Qo=
b);break;case "devsite-concierge-api-explorer-panel":a.jk&&(a.jk=!1,a.Mm="",_ds.$u(a),await a.j);a.jk=!0;b&&(a.Mm=b);break;case "devsite-concierge-my-activity-panel":a.Dl&&(a.Dl=!1,a.Go="",_ds.$u(a),await a.j),a.Dl=!0,b&&(a.Go=b)}},QT=function(a,b,c=0){if(b!==document.body&&b.parentElement){var {x:d,y:e,height:f}=b.getBoundingClientRect();return e+f>c&&d>0&&d<window.innerWidth?b:QT(a,b.parentElement,c)}},mFa=async function(a,b){await _ds.v();var c,d,e;const f=((c=document)==null?void 0:(d=c.documentElement)==
null?void 0:(e=d.getAttribute("dir"))==null?void 0:e.toLowerCase())==="rtl";(c=document.querySelector("devsite-header"))&&await customElements.whenDefined("devsite-header");c=(c==null?void 0:c.qa())||0;if(a=QT(a,b,c)){var {x:g,y:h,width:k,height:l}=a.getBoundingClientRect();b=f?g+k:g;c=Math.max(h,c);d=f?Math.max(0,g):Math.min(g+k,window.innerWidth);e=Math.min(l-Math.abs(h),window.innerHeight);var m=Math.round(Math.max(5,(d-b)*.01));m=f?-m:m;var n=Math.round(Math.max(5,(e-c)*.01));g=b;h=c;for(var p=
document.elementFromPoint(g,h),q=!1;p===a||!a.contains(p)||!q;){p&&(q=p.getBoundingClientRect().top>=c);g+=m;f?g<d&&(g=b,h+=n):g>d&&(g=b,h+=n);if(h>e)return;p=document.elementFromPoint(g,h)}return p}},PT=async function(a,b,c=""){a.Ud=c;if(a.panelOpen!==b)if(c=document.querySelector(".devsite-article-body")){var d=await mFa(a,c);d?(await _ds.Fg(),c=d.getBoundingClientRect().top||0,a.panelOpen=b,document.body.dispatchEvent(new CustomEvent("devsite-sticky-resize",{bubbles:!0})),await _ds.Ml(),a=d.getBoundingClientRect().top||
0,a-c!==0&&window.scrollBy({left:window.scrollX,top:a-c}),_ds.Gg()):a.panelOpen=b}else a.panelOpen=b},RT=function(a,b){a.panelOpen||_ds.Bv(a,{type:"sidePanel",name:"opened",metadata:{id:b,name:a.tagName.toLowerCase(),action:"menu item click"}});a.Ud!==b?(a.Da({category:"Developer Concierge",action:a.panelOpen?"Switch Tab":"Open Panel",label:b}),_ds.Bv(a,{type:"sidePanel",name:"tabClick",metadata:{id:b,name:a.tagName.toLowerCase()}}),a.o(b,!0)):a.Lg||(_ds.Bv(a,{type:"sidePanel",name:"closed",metadata:{id:b,
name:a.tagName.toLowerCase(),action:"menu item click"}}),NT(a,!0))},nFa=function(a,b,c,d){return c?d?(0,_ds.L)`<div class="devsite-concierge-notification-dot"></div>
      <div
        class="devsite-concierge-notification"
        @click="${()=>{RT(a,b)}}"
        >${d}</div
      >`:(0,_ds.L)`<div class="devsite-concierge-notification-dot"></div>`:(0,_ds.L)``},ST=function(a,b,c=!1){if(!c)return(0,_ds.L)``;a.oa.push(b);switch(b){case "devsite-concierge-ai-panel":return(0,_ds.L)` <devsite-concierge-ai-panel
          ?active="${a.Ud===b}">
        </devsite-concierge-ai-panel>`;case "devsite-concierge-info-panel":return(0,_ds.L)` <devsite-concierge-info-panel
          ?active="${a.Ud===b}">
        </devsite-concierge-info-panel>`;case "devsite-concierge-recommendations-panel":return(0,_ds.L)` <devsite-concierge-recommendations-panel
          ?active="${a.Ud===b}">
        </devsite-concierge-recommendations-panel>`;case "devsite-concierge-api-explorer-panel":return(0,_ds.L)` <devsite-concierge-api-explorer-panel
          ?active="${a.Ud===b}">
        </devsite-concierge-api-explorer-panel>`;case "devsite-concierge-my-activity-panel":return(0,_ds.L)` <devsite-concierge-my-activity-panel
          ?active="${a.Ud===b}">
        </devsite-concierge-my-activity-panel>`;default:return(0,_ds.L)` <div ?active="${a.Ud===b}">
          ${b} element missing
        </div>`}},TT=function(a,b,c,d,e,f=!1,g=!1,h=""){return f?(0,_ds.L)`
      <button class="${(0,_ds.Ct)({"devsite-concierge-menu-item--selected":a.Ud===b,"devsite-concierge-menu-item":!0,[`${b}--menu-item`]:!0})}"
          @click="${()=>{RT(a,b)}}"
          data-title="${d}">
        <div class="devsite-concierge-menu-icon" aria-hidden="true">
          ${e}
        </div>
        <div class="devsite-concierge-menu-title">
          ${c}
        </div>
        ${nFa(a,b,g,h)}
      </button>`:(0,_ds.L)``},oFa=function(a){return(0,_ds.L)` <div
      aria-label="${"Side panel menu"}"
      aria-orientation="${a.Jk&&!a.Lg&&a.panelOpen&&a.Sw?"horizontal":"vertical"}"
      class="devsite-concierge-menu"
      role="toolbar"
      @keydown="${b=>{if(b.key==="ArrowUp"||b.key==="ArrowDown"||b.key==="ArrowLeft"||b.key==="ArrowRight"){b.preventDefault();let c=0;const d=document.activeElement,e=a.querySelectorAll(".devsite-concierge-menu-item");d&&(c=[...e].indexOf(d));c=b.key==="ArrowUp"||b.key==="ArrowLeft"?c===0?e.length-1:c-1:c===e.length-1?0:c+1;e[c].focus()}}}">
      ${TT(a,"devsite-concierge-info-panel","Info","Page info",_ds.Zwa,a.Xs,a.fl,a.Un)}
      ${TT(a,"devsite-concierge-ai-panel","Chat","Ask about this page",_ds.zwa,a.Us,a.hk,a.Jm)}
      ${TT(a,"devsite-concierge-recommendations-panel","Related","Related Pages",_ds.exa,a.ft,a.Jl,a.Qo)}
      ${TT(a,"devsite-concierge-api-explorer-panel","API","APIs Explorer",_ds.Kwa,a.Vs,a.jk,a.Mm)}
      ${TT(a,"devsite-concierge-my-activity-panel","Recent","Recent Activity",(0,_ds.L)`<svg
    width="20"
    height="18"
    viewBox="0 0 20 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M17 12C15.7 12 14.6 12.84 14.18 14H9C7.9 14 7 13.1 7 12C7 10.9 7.9 10 9 10H11C13.21 10 15 8.21 15 6C15 3.79 13.21 2 11 2H5.82C5.4 0.84 4.3 0 3 0C1.34 0 0 1.34 0 3C0 4.66 1.34 6 3 6C4.3 6 5.4 5.16 5.82 4H11C12.1 4 13 4.9 13 6C13 7.1 12.1 8 11 8H9C6.79 8 5 9.79 5 12C5 14.21 6.79 16 9 16H14.18C14.59 17.16 15.69 18 17 18C18.66 18 20 16.66 20 15C20 13.34 18.66 12 17 12ZM3 4C2.45 4 2 3.55 2 3C2 2.45 2.45 2 3 2C3.55 2 4 2.45 4 3C4 3.55 3.55 4 3 4Z"
      fill="#1967D2" />
  </svg>`,a.Ys,a.Dl,a.Go)}
    </div>`},UT=class extends _ds.Cv{Wa(){return this}constructor(){super(["devsite-tooltip"]);this.Lg=this.ft=this.Ys=this.Xs=this.Vs=this.Us=!1;this.Sw=_ds.Ug()==="viewport--desktop";this.Jl=this.Dl=this.fl=this.jk=this.hk=this.Jk=!1;this.Ud=this.Qo=this.Go=this.Un=this.Mm=this.Jm="";this.panelOpen=this.largeViewport=!1;this.eventHandler=new _ds.D;this.oa=[];this.ea="UNDEFINED";this.tenantId=0;_ds.zv(this,(0,_ds.Nf)`concierge`)}async connectedCallback(){var a=await _ds.v();this.tenantId=a.getTenantId()||
0;this.Jk=await a.hasMendelFlagAccess("Concierge","enable_devguide_mobile_view");super.connectedCallback();lFa(this);if(OT(this)&&(a=_ds.B(),a.searchParams.has("devguide")))switch(a.searchParams.get("devguide")){case "ai":await this.o("devsite-concierge-ai-panel",!1);break;case "recommendations":await this.o("devsite-concierge-recommendations-panel",!1);break;case "api_explorer":await this.o("devsite-concierge-api-explorer-panel",!1);break;case "my_activity":await this.o("devsite-concierge-my-activity-panel",
!1);break;default:await this.o("devsite-concierge-info-panel",!1)}}disconnectedCallback(){super.disconnectedCallback();this.eventHandler.removeAll();document.body.removeAttribute("concierge")}async qa(a,b){await this.o("devsite-concierge-ai-panel");const c=this.querySelector("devsite-concierge-ai-panel"),d=_ds.B();d.search="";c&&await _ds.uN(c,{code:a,language:b,url:d.href})}async o(a,b=!1){b&&await (await _ds.v()).getStorage().set("devguide_state","","OPEN");await PT(this,!0,a)}static get observedAttributes(){return["data-ai-panel",
"data-api-explorer-panel","data-info-panel","data-my-activity-panel","data-recommendations-panel"]}attributeChangedCallback(a){switch(a){case "data-ai-panel":this.Us=this.hasAttribute("data-ai-panel");_ds.yv("devsite-concierge-ai-panel");break;case "data-info-panel":this.Xs=this.hasAttribute("data-info-panel");_ds.yv("devsite-concierge-info-panel");break;case "data-recommendations-panel":this.ft=this.hasAttribute("data-recommendations-panel");_ds.yv("devsite-concierge-recommendations-panel");break;
case "data-api-explorer-panel":this.Vs=this.hasAttribute("data-api-explorer-panel");_ds.yv("devsite-concierge-api-explorer-panel");break;case "data-my-activity-panel":this.Ys=this.hasAttribute("data-my-activity-panel"),_ds.yv("devsite-concierge-my-activity-panel")}}async m(a){super.m(a);this.oa.length>0&&_ds.Bv(this,{type:"sidePanel",name:"impression",metadata:{id:this.oa[0],name:this.tagName.toLowerCase()}});a.has("largeViewport")&&this.Ud===""&&this.largeViewport&&(this.ea=await (await _ds.v()).getStorage().get("devguide_state",
"")||"UNDEFINED",this.ea!=="CLOSED"&&(await this.o(this.oa[0]),this.Da({category:"Developer Concierge",action:"Opened by default"})))}updated(a){super.updated(a);a.has("panelOpen")&&OT(this)}ra(){return OT(this)}render(){return(0,_ds.L)` <div class="${(0,_ds.Ct)({"devsite-concierge-panel-open":this.panelOpen,"devsite-concierge-container ":!0,"mobile-view-not-enabled":!this.Jk})}">
      ${oFa(this)} ${(0,_ds.L)`<div class="devsite-concierge-panel">
      ${ST(this,"devsite-concierge-info-panel",this.Xs)}
      ${ST(this,"devsite-concierge-ai-panel",this.Us)}
      ${ST(this,"devsite-concierge-recommendations-panel",this.ft)}
      ${ST(this,"devsite-concierge-api-explorer-panel",this.Vs)}
      ${ST(this,"devsite-concierge-my-activity-panel",this.Ys)}
    </div>`}
    </div>`}};UT.prototype.attributeChangedCallback=UT.prototype.attributeChangedCallback;UT.getTagName=MT;_ds.w([_ds.H(),_ds.y("design:type",Object)],UT.prototype,"Us",void 0);_ds.w([_ds.H(),_ds.y("design:type",Object)],UT.prototype,"Vs",void 0);_ds.w([_ds.H(),_ds.y("design:type",Object)],UT.prototype,"Xs",void 0);_ds.w([_ds.H(),_ds.y("design:type",Object)],UT.prototype,"Ys",void 0);_ds.w([_ds.H(),_ds.y("design:type",Object)],UT.prototype,"ft",void 0);
_ds.w([_ds.H(),_ds.y("design:type",Object)],UT.prototype,"Lg",void 0);_ds.w([_ds.H(),_ds.y("design:type",Object)],UT.prototype,"Sw",void 0);_ds.w([_ds.H(),_ds.y("design:type",Object)],UT.prototype,"Jk",void 0);_ds.w([_ds.H(),_ds.y("design:type",Object)],UT.prototype,"hk",void 0);_ds.w([_ds.H(),_ds.y("design:type",Object)],UT.prototype,"jk",void 0);_ds.w([_ds.H(),_ds.y("design:type",Object)],UT.prototype,"fl",void 0);_ds.w([_ds.H(),_ds.y("design:type",Object)],UT.prototype,"Dl",void 0);
_ds.w([_ds.H(),_ds.y("design:type",Object)],UT.prototype,"Jl",void 0);_ds.w([_ds.H(),_ds.y("design:type",Object)],UT.prototype,"Jm",void 0);_ds.w([_ds.H(),_ds.y("design:type",Object)],UT.prototype,"Mm",void 0);_ds.w([_ds.H(),_ds.y("design:type",Object)],UT.prototype,"Un",void 0);_ds.w([_ds.H(),_ds.y("design:type",Object)],UT.prototype,"Go",void 0);_ds.w([_ds.H(),_ds.y("design:type",Object)],UT.prototype,"Qo",void 0);_ds.w([_ds.H(),_ds.y("design:type",Object)],UT.prototype,"Ud",void 0);
_ds.w([_ds.F({type:Boolean}),_ds.y("design:type",Object)],UT.prototype,"largeViewport",void 0);_ds.w([_ds.F({type:Boolean}),_ds.y("design:type",Object)],UT.prototype,"panelOpen",void 0);try{customElements.define(MT(),UT)}catch(a){console.warn("Unrecognized DevSite custom element - DevsiteConcierge",a)};})(_ds_www);
