(function(t){function e(e){for(var a,r,i=e[0],c=e[1],l=e[2],f=0,d=[];f<i.length;f++)r=i[f],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(a=!1)}a&&(s.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},o={app:0},s=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0578":function(t,e,n){n("a15b"),n("b0c0"),n("4d63"),n("ac1f"),n("25f0"),n("5319"),n("1276");var a=n("7037");
/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-webp-setclasses !*/!function(t,e,n){function o(t){var e=p.className,n=f._config.classPrefix||"";if(A&&(e=e.baseVal),f._config.enableJSClass){var a=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");e=e.replace(a,"$1"+n+"js$2")}f._config.enableClasses&&(e+=" "+n+t.join(" "+n),A?p.className.baseVal=e:p.className=e)}function s(t,e){return a(t)===e}function r(){var t,e,n,a,o,r,i;for(var u in l)if(l.hasOwnProperty(u)){if(t=[],e=l[u],e.name&&(t.push(e.name.toLowerCase()),e.options&&e.options.aliases&&e.options.aliases.length))for(n=0;n<e.options.aliases.length;n++)t.push(e.options.aliases[n].toLowerCase());for(a=s(e.fn,"function")?e.fn():e.fn,o=0;o<t.length;o++)r=t[o],i=r.split("."),1===i.length?f[i[0]]=a:(!f[i[0]]||f[i[0]]instanceof Boolean||(f[i[0]]=new Boolean(f[i[0]])),f[i[0]][i[1]]=a),c.push((a?"":"no-")+i.join("-"))}}function i(t,e){if("object"==a(t))for(var n in t)d(t,n)&&i(n,t[n]);else{t=t.toLowerCase();var s=t.split("."),r=f[s[0]];if(2==s.length&&(r=r[s[1]]),"undefined"!=typeof r)return f;e="function"==typeof e?e():e,1==s.length?f[s[0]]=e:(!f[s[0]]||f[s[0]]instanceof Boolean||(f[s[0]]=new Boolean(f[s[0]])),f[s[0]][s[1]]=e),o([(e&&0!=e?"":"no-")+s.join("-")]),f._trigger(t,e)}return f}var c=[],l=[],u={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(t,e){var n=this;setTimeout((function(){e(n[t])}),0)},addTest:function(t,e,n){l.push({name:t,fn:e,options:n})},addAsyncTest:function(t){l.push({name:null,fn:t})}},f=function(){};f.prototype=u,f=new f;var d,p=e.documentElement,A="svg"===p.nodeName.toLowerCase();!function(){var t={}.hasOwnProperty;d=s(t,"undefined")||s(t.call,"undefined")?function(t,e){return e in t&&s(t.constructor.prototype[e],"undefined")}:function(e,n){return t.call(e,n)}}(),u._l={},u.on=function(t,e){this._l[t]||(this._l[t]=[]),this._l[t].push(e),f.hasOwnProperty(t)&&setTimeout((function(){f._trigger(t,f[t])}),0)},u._trigger=function(t,e){if(this._l[t]){var n=this._l[t];setTimeout((function(){var t;for(t=0;t<n.length;t++)(0,n[t])(e)}),0),delete this._l[t]}},f._q.push((function(){u.addTest=i})),f.addAsyncTest((function(){function t(t,e,n){function a(e){var a=!(!e||"load"!==e.type)&&1==o.width,s="webp"===t;i(t,s&&a?new Boolean(a):a),n&&n(e)}var o=new Image;o.onerror=a,o.onload=a,o.src=e}var e=[{uri:"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",name:"webp"},{uri:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",name:"webp.alpha"},{uri:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",name:"webp.animation"},{uri:"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",name:"webp.lossless"}],n=e.shift();t(n.name,n.uri,(function(n){if(n&&"load"===n.type)for(var a=0;a<e.length;a++)t(e[a].name,e[a].uri)}))})),r(),o(c),delete u.addTest,delete u.addAsyncTest;for(var m=0;m<f._q.length;m++)f._q[m]();t.Modernizr=f}(window,document)},"163f":function(t,e,n){"use strict";n("8473")},"1c1c":function(t,e,n){},3946:function(t,e,n){},"3b43":function(t,e,n){},"4c2a":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container",attrs:{id:"app"}},[n("section-first"),n("section-second"),n("v-button",{nativeOn:{click:function(e){t.showModal=!t.showModal}}},[n("span",{attrs:{slot:"button"},slot:"button"},[t._v("Open Modal")])]),n("transition",{attrs:{name:"modal-transition","enter-active-class":"animate__slideInUp","leave-active-class":"animate__slideOutDown"},on:{enter:t.enter,leave:t.leave}},[n("v-modal",{directives:[{name:"show",rawName:"v-show",value:t.showModal,expression:"showModal"}],staticClass:"sign-in-modal animate__animated animate__faster"},[n("h3",{attrs:{slot:"header"},slot:"header"},[t._v("custom header")]),n("div",{attrs:{slot:"body"},slot:"body"},t._l(t.info,(function(e,a){return n("div",{key:a,staticClass:"currency"},[t._v(" "+t._s(e.description)+" | "+t._s(a)+": "),n("span",{staticClass:"lighten"},[n("span",{domProps:{innerHTML:t._s(e.symbol)}}),t._v(t._s(t._f("currencydecimal")(e.rate_float))+" ")])])})),0),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("v-button",{nativeOn:{click:function(e){t.showModal=!1}}},[t._v(" Click ")])],1)])],1)],1)},s=[],r=(n("b680"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"first"},[t._v(" first sectionss "),n("order-form")],1)}),i=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"order-form"},[n("form",{attrs:{method:"post",action:"index.php"}},[t._m(0),t._m(1),t._m(2),t._m(3),n("v-button",{staticClass:"block get",attrs:{type:"submit",id:"get_price",onclick:"ym(52727764, 'reachGoal', 'get_price'); return true;"}},[n("i",{staticClass:"fas fa-search"}),n("span",{attrs:{slot:"button"},slot:"button"},[t._v("Get price")])])],1)])},l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"block address-from"},[n("input",{attrs:{type:"text",id:"pickupPointInput",name:"from",placeholder:"Start type your address, airport, or hotel name..."}}),n("label",{staticClass:"label-from",attrs:{for:"from"}},[n("span",{staticClass:"content-name"},[t._v("From: ")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"block change",attrs:{"data-tippy-content":"Swap addresses"}},[n("i",{staticClass:"fas fa-exchange-alt"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"block address-to"},[n("input",{attrs:{type:"text",id:"dropPointInput",name:"to",placeholder:"Start type your address, airport, or hotel name..."}}),n("label",{staticClass:"label-to",attrs:{for:"to"}},[n("span",{staticClass:"content-name"},[t._v("To: ")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"block date"},[n("input",{attrs:{type:"text",id:"departureDate",name:"date",autocomplete:"off",readonly:""}}),n("label",{staticClass:"label-date",attrs:{for:"date"}},[n("span",{staticClass:"content-name date"},[t._v(" Date: ")])]),n("a",{staticClass:"reset-date",attrs:{href:"#"}},[n("i",{staticClass:"fas fa-times"})])])}],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"btn"},[n("a",{attrs:{href:"#"}},[t._t("button",[t._v("Button")])],2)])},f=[],d=(n("8af8"),n("2877")),p={},A=Object(d["a"])(p,u,f,!1,null,"33f75216",null),m=A.exports,h={name:"OrderForm",components:{"v-button":m}},v=h,_=(n("eec2"),Object(d["a"])(v,c,l,!1,null,"71e0873a",null)),b=_.exports,g={name:"SectionFirst",components:{"order-form":b}},y=g,w=(n("163f"),n("ea30"),Object(d["a"])(y,r,i,!1,null,"99c28272",null)),C=w.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"second"},[t._v("second section")])},O=[],x={name:"SectionSecond"},P=x,B=(n("bcc7"),n("f3be"),Object(d["a"])(P,k,O,!1,null,"01f9388e",null)),j=B.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal"},[n("div",{staticClass:"modal__inner"},[n("div",{staticClass:"modal__header"},[t._t("header",[t._v(" default header ")])],2),n("div",{staticClass:"modal__body"},[t._t("body",[t._v(" default body ")])],2),n("div",{staticClass:"modal__footer"},[t._t("footer",[t._v(" default footer ")])],2)])])},S=[],E={name:"ModalComponent"},M=E,T=(n("7a48"),Object(d["a"])(M,Q,S,!1,null,"f5fa74e6",null)),$=T.exports,U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("h2",[t._v("Search and add a pin")]),n("label",[n("gmap-autocomplete",{on:{place_changed:t.setPlace}}),n("button",{on:{click:t.addMarker}},[t._v("Add")])],1),n("br")]),n("br"),n("gmap-map",{staticStyle:{width:"100%",height:"400px"},attrs:{center:t.center,zoom:12}},t._l(t.markers,(function(e,a){return n("gmap-marker",{key:a,attrs:{position:e.position},on:{click:function(n){t.center=e.position}}})})),1)],1)},D=[],R={name:"GoogleMap",data:function(){return{center:{lat:45.508,lng:-73.587},markers:[],places:[],currentPlace:null}},mounted:function(){this.geolocate()},methods:{setPlace:function(t){this.currentPlace=t},addMarker:function(){if(this.currentPlace){var t={lat:this.currentPlace.geometry.location.lat(),lng:this.currentPlace.geometry.location.lng()};this.markers.push({position:t}),this.places.push(this.currentPlace),this.center=t,this.currentPlace=null}},geolocate:function(){var t=this;navigator.geolocation.getCurrentPosition((function(e){t.center={lat:e.coords.latitude,lng:e.coords.longitude}}))}}},J=R,G=Object(d["a"])(J,U,D,!1,null,null,null),I=G.exports,V={name:"App",components:{"section-first":C,"section-second":j,"v-modal":$,"v-button":m,"v-google-map":I},data:function(){return{showModal:!1,info:null}},methods:{enter:function(t){console.log("open modal")},leave:function(t){console.log("close modal")}},mounted:function(){var t=this;this.$axios.get("https://api.coindesk.com/v1/bpi/currentprice.json").then((function(e){return t.info=e.data.bpi})).catch((function(t){return console.log(t)}))},filters:{currencydecimal:function(t){return t.toFixed(2)}}},N=V,F=(n("5c0b"),Object(d["a"])(N,o,s,!1,null,null,null)),L=F.exports,q=n("bc3a"),W=n.n(q),X=(n("a7fe"),n("755e")),z=n("dc21"),Y=n("e594"),H=n("688d");n("77ed"),n("0578");z["a"]({dsn:"https://17c103bd468544239d4bf33697193158@o366344.ingest.sentry.io/5524243",integrations:[new Y["a"]({Vue:a["a"],tracing:!0}),new H["a"].BrowserTracing],tracesSampleRate:1}),a["a"].config.productionTip=!1,a["a"].prototype.$axios=W.a,a["a"].use(X,{load:{key:"AIzaSyCOg3Uf5dBeiOOybZEOef_8--NwgyF81YI",libraries:"places"}}),new a["a"]({render:function(t){return t(L)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"7a48":function(t,e,n){"use strict";n("3b43")},8473:function(t,e,n){},"8af8":function(t,e,n){"use strict";n("900a")},"900a":function(t,e,n){},"9c0c":function(t,e,n){},a8f2:function(t,e,n){},bcc7:function(t,e,n){"use strict";n("3946")},ea30:function(t,e,n){"use strict";n("4c2a")},eec2:function(t,e,n){"use strict";n("a8f2")},f3be:function(t,e,n){"use strict";n("1c1c")}});
//# sourceMappingURL=app.39f9de9f.js.map