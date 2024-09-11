(()=>{var e,t={9:(e,t,r)=>{"use strict";r.r(t);var i=r(9196);const o=window.wp.blocks;var n=r(2911),l=r(1873);const a=JSON.parse('{"name":"woocommerce/order-confirmation-shipping-address","version":"1.0.0","title":"Shipping Address","description":"Display the order confirmation shipping address.","category":"woocommerce","keywords":["WooCommerce"],"supports":{"multiple":false,"align":["wide","full"],"inserter":false,"html":false,"color":{"text":true,"background":true,"__experimentalDefaultControls":{"background":true,"text":true}},"typography":{"fontSize":true,"lineHeight":true,"__experimentalFontFamily":true,"__experimentalFontWeight":true,"__experimentalFontStyle":true,"__experimentalTextTransform":true,"__experimentalTextDecoration":true,"__experimentalLetterSpacing":true,"__experimentalDefaultControls":{"fontSize":true}},"__experimentalBorder":{"color":true,"radius":true,"width":true,"style":true,"__experimentalDefaultControls":{"width":true,"color":true}},"spacing":{"padding":true,"margin":true,"__experimentalDefaultControls":{"margin":false,"padding":false}}},"attributes":{"align":{"type":"string","default":"wide"}},"textdomain":"woocommerce","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}'),s=window.wp.blockEditor;var c=r(5736);r(8679);const d=({additionalFields:e=[]})=>(0,i.createElement)("dl",{className:"wc-block-components-additional-fields-list"},Object.entries(e).map((([,e])=>{const{label:t,type:r,options:o}=e;let n=(0,c.__)("Placeholder","woocommerce");return"checkbox"===r&&(n=(0,c.__)("Yes","woocommerce")),"select"===r&&(n=o[0].label),(0,i.createElement)(i.Fragment,null,(0,i.createElement)("dt",null,t),(0,i.createElement)("dd",null,n))}))),p=window.wc.wcSettings;var u,m,g,f,w,b,S,_,k,v;const E=(0,p.getSetting)("wcBlocksConfig",{buildPhase:1,pluginUrl:"",productCount:0,defaultAvatar:"",restApiRoutes:{},wordCountType:"words"}),h=(E.pluginUrl,E.pluginUrl,E.buildPhase,null===(u=p.STORE_PAGES.shop)||void 0===u||u.permalink,null===(m=p.STORE_PAGES.checkout)||void 0===m||m.id,null===(g=p.STORE_PAGES.checkout)||void 0===g||g.permalink,null===(f=p.STORE_PAGES.privacy)||void 0===f||f.permalink,null===(w=p.STORE_PAGES.privacy)||void 0===w||w.title,null===(b=p.STORE_PAGES.terms)||void 0===b||b.permalink,null===(S=p.STORE_PAGES.terms)||void 0===S||S.title,null===(_=p.STORE_PAGES.cart)||void 0===_||_.id,null===(k=p.STORE_PAGES.cart)||void 0===k||k.permalink,null!==(v=p.STORE_PAGES.myaccount)&&void 0!==v&&v.permalink?p.STORE_PAGES.myaccount.permalink:(0,p.getSetting)("wpLoginUrl","/wp-login.php"),(0,p.getSetting)("localPickupEnabled",!1),(0,p.getSetting)("countries",{})),O=(0,p.getSetting)("countryData",{}),y=(Object.fromEntries(Object.keys(O).filter((e=>!0===O[e].allowBilling)).map((e=>[e,h[e]||""]))),Object.fromEntries(Object.keys(O).filter((e=>!0===O[e].allowBilling)).map((e=>[e,O[e].states||[]]))),Object.fromEntries(Object.keys(O).filter((e=>!0===O[e].allowShipping)).map((e=>[e,h[e]||""]))),Object.fromEntries(Object.keys(O).filter((e=>!0===O[e].allowShipping)).map((e=>[e,O[e].states||[]]))),Object.fromEntries(Object.keys(O).map((e=>[e,O[e].locale||[]]))),{address:["first_name","last_name","company","address_1","address_2","city","postcode","country","state","phone"],contact:["email"],order:[]}),x=((0,p.getSetting)("addressFieldsLocations",y).address,(0,p.getSetting)("addressFieldsLocations",y).contact,(0,p.getSetting)("addressFieldsLocations",y).order,(0,p.getSetting)("additionalOrderFields",{}),(0,p.getSetting)("additionalContactFields",{}),(0,p.getSetting)("additionalAddressFields",{}));r(9633);(0,o.registerBlockType)(a,{icon:{src:(0,i.createElement)(n.Z,{icon:l.Z,className:"wc-block-editor-components-block-icon"})},attributes:{...a.attributes},edit:()=>{const e=(0,s.useBlockProps)({className:"wc-block-order-confirmation-shipping-address"});return(0,i.createElement)("div",{...e},(0,i.createElement)("address",null,"Test address 1",(0,i.createElement)("br",null),"Test address 2",(0,i.createElement)("br",null),"San Francisco, CA 94110",(0,i.createElement)("br",null),"United States",(0,i.createElement)(d,{additionalFields:x})))},save:()=>null})},8679:()=>{},9633:()=>{},9196:e=>{"use strict";e.exports=window.React},9307:e=>{"use strict";e.exports=window.wp.element},5736:e=>{"use strict";e.exports=window.wp.i18n},444:e=>{"use strict";e.exports=window.wp.primitives}},r={};function i(e){var o=r[e];if(void 0!==o)return o.exports;var n=r[e]={exports:{}};return t[e].call(n.exports,n,n.exports,i),n.exports}i.m=t,e=[],i.O=(t,r,o,n)=>{if(!r){var l=1/0;for(d=0;d<e.length;d++){for(var[r,o,n]=e[d],a=!0,s=0;s<r.length;s++)(!1&n||l>=n)&&Object.keys(i.O).every((e=>i.O[e](r[s])))?r.splice(s--,1):(a=!1,n<l&&(l=n));if(a){e.splice(d--,1);var c=o();void 0!==c&&(t=c)}}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[r,o,n]},i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.j=8610,(()=>{var e={8610:0};i.O.j=t=>0===e[t];var t=(t,r)=>{var o,n,[l,a,s]=r,c=0;if(l.some((t=>0!==e[t]))){for(o in a)i.o(a,o)&&(i.m[o]=a[o]);if(s)var d=s(i)}for(t&&t(r);c<l.length;c++)n=l[c],i.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return i.O(d)},r=self.webpackChunkwebpackWcBlocksMainJsonp=self.webpackChunkwebpackWcBlocksMainJsonp||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var o=i.O(void 0,[2869],(()=>i(9)));o=i.O(o),((this.wc=this.wc||{}).blocks=this.wc.blocks||{})["order-confirmation-shipping-address"]=o})();