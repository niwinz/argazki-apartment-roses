(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5728:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(4386)}])},1551:function(e,a,t){"use strict";function r(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,r=new Array(a);t<a;t++)r[t]=e[t];return r}function n(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,n,i=[],_=!0,l=!1;try{for(t=t.call(e);!(_=(r=t.next()).done)&&(i.push(r.value),!a||i.length!==a);_=!0);}catch(o){l=!0,n=o}finally{try{_||null==t.return||t.return()}finally{if(l)throw n}}return i}}(e,a)||function(e,a){if(!e)return;if("string"===typeof e)return r(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return r(e,a)}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i,_=(i=t(7294))&&i.__esModule?i:{default:i},l=t(1003),o=t(880),s=t(9246);function c(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var u={};function m(e,a,t,r){if(e&&l.isLocalURL(a)){e.prefetch(a,t,r).catch((function(e){0}));var n=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[a+"%"+t+(n?"%"+n:"")]=!0}}var d=_.default.forwardRef((function(e,a){var t,r=e.legacyBehavior,i=void 0===r?!0!==Boolean(!1):r,d=e.href,p=e.as,f=e.children,g=e.prefetch,h=e.passHref,y=e.replace,v=e.shallow,b=e.scroll,x=e.locale,k=e.onClick,w=e.onMouseEnter,A=c(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter"]);t=f,i&&"string"===typeof t&&(t=_.default.createElement("a",null,t));var z,P=!1!==g,j=o.useRouter(),N=_.default.useMemo((function(){var e=n(l.resolveHref(j,d,!0),2),a=e[0],t=e[1];return{href:a,as:p?l.resolveHref(j,p):t||a}}),[j,d,p]),B=N.href,H=N.as,M=_.default.useRef(B),E=_.default.useRef(H);i&&(z=_.default.Children.only(t));var K=i?z&&"object"===typeof z&&z.ref:a,O=n(s.useIntersection({rootMargin:"200px"}),3),q=O[0],I=O[1],L=O[2],C=_.default.useCallback((function(e){E.current===H&&M.current===B||(L(),E.current=H,M.current=B),q(e),K&&("function"===typeof K?K(e):"object"===typeof K&&(K.current=e))}),[H,K,B,L,q]);_.default.useEffect((function(){var e=I&&P&&l.isLocalURL(B),a="undefined"!==typeof x?x:j&&j.locale,t=u[B+"%"+H+(a?"%"+a:"")];e&&!t&&m(j,B,H,{locale:a})}),[H,B,I,x,P,j]);var R={ref:C,onClick:function(e){i||"function"!==typeof k||k(e),i&&z.props&&"function"===typeof z.props.onClick&&z.props.onClick(e),e.defaultPrevented||function(e,a,t,r,n,i,_,o){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var a=e.currentTarget.target;return a&&"_self"!==a||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(t))&&(e.preventDefault(),a[n?"replace":"push"](t,r,{shallow:i,locale:o,scroll:_}))}(e,j,B,H,y,v,b,x)},onMouseEnter:function(e){i||"function"!==typeof w||w(e),i&&z.props&&"function"===typeof z.props.onMouseEnter&&z.props.onMouseEnter(e),l.isLocalURL(B)&&m(j,B,H,{priority:!0})}};if(!i||h||"a"===z.type&&!("href"in z.props)){var S="undefined"!==typeof x?x:j&&j.locale,T=j&&j.isLocaleDomain&&l.getDomainLocale(H,S,j&&j.locales,j&&j.domainLocales);R.href=T||l.addBasePath(l.addLocale(H,S,j&&j.defaultLocale))}return i?_.default.cloneElement(z,R):_.default.createElement("a",Object.assign({},A,R),t)}));a.default=d,("function"===typeof a.default||"object"===typeof a.default&&null!==a.default)&&(Object.assign(a.default,a),e.exports=a.default)},9246:function(e,a,t){"use strict";function r(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,r=new Array(a);t<a;t++)r[t]=e[t];return r}function n(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,n,i=[],_=!0,l=!1;try{for(t=t.call(e);!(_=(r=t.next()).done)&&(i.push(r.value),!a||i.length!==a);_=!0);}catch(o){l=!0,n=o}finally{try{_||null==t.return||t.return()}finally{if(l)throw n}}return i}}(e,a)||function(e,a){if(!e)return;if("string"===typeof e)return r(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return r(e,a)}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(a,"__esModule",{value:!0}),a.useIntersection=function(e){var a=e.rootRef,t=e.rootMargin,r=e.disabled||!l,c=i.useRef(),u=n(i.useState(!1),2),m=u[0],d=u[1],p=n(i.useState(a?a.current:null),2),f=p[0],g=p[1],h=i.useCallback((function(e){c.current&&(c.current(),c.current=void 0),r||m||e&&e.tagName&&(c.current=function(e,a,t){var r=function(e){var a,t={root:e.root||null,margin:e.rootMargin||""},r=s.find((function(e){return e.root===t.root&&e.margin===t.margin}));r?a=o.get(r):(a=o.get(t),s.push(t));if(a)return a;var n=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var a=n.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;a&&t&&a(t)}))}),e);return o.set(t,a={id:t,observer:i,elements:n}),a}(t),n=r.id,i=r.observer,_=r.elements;return _.set(e,a),i.observe(e),function(){if(_.delete(e),i.unobserve(e),0===_.size){i.disconnect(),o.delete(n);var a=s.findIndex((function(e){return e.root===n.root&&e.margin===n.margin}));a>-1&&s.splice(a,1)}}}(e,(function(e){return e&&d(e)}),{root:f,rootMargin:t}))}),[r,f,t,m]),y=i.useCallback((function(){d(!1)}),[]);return i.useEffect((function(){if(!l&&!m){var e=_.requestIdleCallback((function(){return d(!0)}));return function(){return _.cancelIdleCallback(e)}}}),[m]),i.useEffect((function(){a&&g(a.current)}),[a]),[h,m,y]};var i=t(7294),_=t(4686),l="undefined"!==typeof IntersectionObserver;var o=new Map,s=[];("function"===typeof a.default||"object"===typeof a.default&&null!==a.default)&&(Object.assign(a.default,a),e.exports=a.default)},4386:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return x}});var r=t(5893),n=t(7294),i=t(9008),_=t.n(i),l=t(1664),o=t.n(l),s=t(7175),c=(t(8834),t(4986)),u=t.n(c),m=t(8259),d=t.n(m);function p(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,r=new Array(a);t<a;t++)r[t]=e[t];return r}function f(e){return function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,a){if(!e)return;if("string"===typeof e)return p(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return p(e,a)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var g=new Array,h=new Array;var y={root:["root","img"],img:["img"]};function v(e){var a=function(a){var t=(0,s.xf)(a,{name:e,descendantNames:f(y[e]),internalArgPropNames:h,internalVariantPropNames:g});return function(e){e.variants,e.args;var a=e.overrides,t=e.forNode;return e.args,(0,s.eh)(n.Fragment,null,(0,s.eh)(_(),null,(0,s.eh)("meta",{name:"twitter:card",content:"summary"}),(0,s.eh)("title",{key:"title"},"Apartment at Roses by Argazki.Art"),(0,s.eh)("meta",{key:"og:title",property:"og:title",content:"Apartment at Roses by Argazki.Art"}),(0,s.eh)("meta",{key:"description",property:"og:description",name:"description",content:"Family apartment in the town of Santa Margarida (Roses), with awesome views of the valley and the mountainous part of Alt Empord\xe0, where you can enjoy splendid sunsets every afternoon."}),(0,s.eh)("meta",{key:"og:image",property:"og:image",content:"https://site-assets.plasmic.app/d3edfa7124379fb0ff7268af5020df61.jpg"})),(0,s.eh)("style",null,"\n        body {\n          margin: 0;\n        }\n      "),(0,s.eh)("div",{className:u().plasmic_page_wrapper},(0,s.eh)("div",{"data-plasmic-name":"root","data-plasmic-override":a.root,"data-plasmic-root":!0,"data-plasmic-for-node":t,className:(0,s.AK)(u().all,u().root_reset,u().plasmic_default_styles,u().plasmic_mixins,u().plasmic_tokens,d().root)},(0,s.eh)("div",{className:(0,s.AK)(u().all,d().freeBox__fjlOm)},(0,s.eh)("div",{className:(0,s.AK)(u().all,u().__wab_text,d().text__jatEa)},"Welcome"),(0,s.eh)("div",{className:(0,s.AK)(u().all,u().__wab_text,d().text___3JGIt)},"To our apartment at Roses")),(0,s.eh)("div",{className:(0,s.AK)(u().all,d().freeBox__tsCqi)},(0,s.eh)("div",{className:(0,s.AK)(u().all,d().freeBox__ontOj)},(0,s.eh)("div",{className:(0,s.AK)(u().all,u().__wab_text,d().text__uHqBc)},"For reservations or more information: "),(0,s.eh)("div",{className:(0,s.AK)(u().all,d().freeBox__whoqx)},(0,s.eh)(s.L,{className:(0,s.AK)(u().all,u().a,u().__wab_text,d().link___71938),component:o(),href:"https://www.plasmic.app/",platform:"nextjs"},"airbnb"),(0,s.eh)("div",{className:(0,s.AK)(u().all,u().__wab_text,d().text___4M0Od)},"or"),(0,s.eh)(s.L,{className:(0,s.AK)(u().all,u().a,u().__wab_text,d().link___0Dw2M),component:o(),href:"https://www.plasmic.app/",platform:"nextjs"},"email"))),(0,s.eh)("div",{className:(0,s.AK)(u().all,d().freeBox__bNDy)},(0,s.eh)("div",{className:(0,s.AK)(u().all,d().freeBox__jZ9Q)},(0,s.eh)("div",{className:(0,s.AK)(u().all,u().__wab_text,d().text__znuna)},"Price: 40-80 EUR"),(0,s.eh)("div",{className:(0,s.AK)(u().all,u().__wab_text,d().text__rwLw2)}," (depending on the season) ")))),(0,s.eh)("div",{className:(0,s.AK)(u().all,d().freeBox___1Zoh)},(0,s.eh)(s.Vv,{"data-plasmic-name":"img","data-plasmic-override":a.img,alt:"",className:(0,s.AK)(d().img),displayHeight:"auto",displayMaxHeight:"none",displayMaxWidth:"100%",displayMinHeight:"0",displayMinWidth:"0",displayWidth:"auto",loading:"lazy",src:{src:"/plasmic/argazki_a_artment_landing/images/apartmentThumbnailsjpg.jpeg",fullWidth:3e3,fullHeight:4e3,aspectRatio:void 0}})),(0,s.eh)("div",{className:(0,s.AK)(u().all,d().freeBox__lMtnL)},(0,s.eh)("div",{className:(0,s.AK)(u().all,d().freeBox__z8Ju)},(0,s.eh)("div",{className:(0,s.AK)(u().all,u().__wab_text,d().text___9R64K)},"ES:"),(0,s.eh)("div",{className:(0,s.AK)(u().all,u().__wab_text,d().text__cQwqQ)},"Apartamento familiar en la localidad de Santa Margarida (Roses), con magn\xedficas vistas al valle y la parte monta\xf1osa de Alt Empord\xe0, donde podr\xe1 disfrutar de espl\xe9ndidas puestas de sol todas las tardes. Ideal para una estancia corta o larga; alojamiento totalmente equipado y situado en una residencia segura con parking privado y portero.\n\nA 1 km de la playa y en una calle tranquila, el apartamento cuenta con un gran espacio exterior: dos piscinas, una para adultos y otra para ni\xf1os; zona de barbacoa, pista de tenis, volley y zona verde vallada ideal para relajarse o jugar con ni\xf1os.\nEn el interior del piso: sal\xf3n con cama de matrimonio y armario, sof\xe1-cama, tv y wifi, cocina y ba\xf1o totalmente equipados, terraza con mesita y zona chillout.\n\nEl edificio est\xe1 situado en una zona tur\xedstica pero apartado del centro. Ideal si lo que se busca es comodidad y tranquilidad. Perfecto para los amantes del turismo con bicicleta, ya que hay parking espec\xedfico para bicicletas disponible en el edificio y los caminos de alrededor invitan a dar un paseo.\n\nSe encuentra muy cerca de varios supermercados (LIDL, Carrefour y Mercadona) y muchos de ellos abren hasta los domingos. Tambi\xe9n est\xe1 a 6 minutos en bici del Karting Roses y Aquabrava y 8 minutos en bici de las principales playas de la zona.\n\nHabr\xe1 que informar que en Catalunya, por la legislaci\xf3n vigente hay una tasa tur\xedstica de 1\u20ac por d\xeda y por persona mayor de 14 a\xf1os que no est\xe1 incluida en el precio y se recoger\xe1 en el momento de la llegada.\n"))),(0,s.eh)("div",{className:(0,s.AK)(u().all,d().freeBox__o08Pk)},(0,s.eh)("div",{className:(0,s.AK)(u().all,u().__wab_text,d().text__al8T)},"EN:"),(0,s.eh)("div",{className:(0,s.AK)(u().all,u().__wab_text,d().text___3C4Jq)},"Family apartment in the town of Santa Margarida (Roses), with awesome views of the valley and the mountainous part of Alt Empord\xe0, where you can enjoy splendid sunsets every afternoon. Ideal for a short or long stay. Fully equipped accommodation located in a secure residence with private parking and doorman.\n\nIs located at 1 km from the beach and in a quiet street, the apartment has a large outdoor space: two swimming pools, one for adults and one for children; barbecue area, tennis and volleyball field, and fenced green area ideal for relaxing or playing with children.\nInside the apartment: living room with double bed and wardrobe, sofa bed, TV and Wi-Fi, fully equipped kitchen and bathroom, terrace with table and chillout area.\n\nThe building is located in a tourist area but away from the center. Ideal if what you are looking for is comfort and tranquility. Perfect for lovers of bicycle tourism, as there is specific parking for bicycles available in the building and the surrounding paths invite you to take a walk.\n\nIt is very close to several supermarkets (LIDL, Carrefour and Mercadona) and many of them are open until Sundays. It is also 6 minutes by bike from Karting Roses and Aquabrava and 8 minutes by bike from the main beaches in the area.\n\nIt should be noted that in Catalonia, due to current legislation, there is a tourist tax of \u20ac1 per day and per person over 14 years of age, which is not included in the price and will be collected at the time of arrival.\n")),(0,s.eh)("div",{className:(0,s.AK)(u().all,d().freeBox__kNhPb)},(0,s.eh)("div",{className:(0,s.AK)(u().all,d().freeBox__hLjJf)},(0,s.eh)(s.L,{className:(0,s.AK)(u().all,u().a,u().__wab_text,d().link___50XV),component:o(),href:"https://argazki.art",platform:"nextjs"},"Interested in art? Visit: https://argazki.art"))))))}({variants:t.variants,args:t.args,overrides:t.overrides,forNode:e})};return a.displayName="root"===e?"PlasmicHomepage":"PlasmicHomepage.".concat(e),a}var b=Object.assign(v("root"),{img:v("img"),internalVariantProps:g,internalArgProps:h});var x=function(){return(0,r.jsx)(b,{})}},8259:function(e){e.exports={root:"PlasmicHomepage_root__rN5NO",freeBox__fjlOm:"PlasmicHomepage_freeBox__fjlOm__0rtp3",text__jatEa:"PlasmicHomepage_text__jatEa__RApmg",text___3JGIt:"PlasmicHomepage_text___3JGIt__Ulp8y",freeBox__tsCqi:"PlasmicHomepage_freeBox__tsCqi__k_LsY",freeBox__ontOj:"PlasmicHomepage_freeBox__ontOj__1d_WQ",text__uHqBc:"PlasmicHomepage_text__uHqBc__uE9D2",freeBox__whoqx:"PlasmicHomepage_freeBox__whoqx__GMpcZ",link___71938:"PlasmicHomepage_link___71938__BXpS_",text___4M0Od:"PlasmicHomepage_text___4M0Od__PROPG",freeBox__bNDy:"PlasmicHomepage_freeBox__bNDy__eHv2w",freeBox__jZ9Q:"PlasmicHomepage_freeBox__jZ9Q__fP5L8",text__znuna:"PlasmicHomepage_text__znuna__QvhTx",text__rwLw2:"PlasmicHomepage_text__rwLw2__E8PQe",freeBox___1Zoh:"PlasmicHomepage_freeBox___1Zoh__RrVVz",img:"PlasmicHomepage_img__1ympa","__wab_img-spacer":"PlasmicHomepage___wab_img-spacer__0_5zk",freeBox__lMtnL:"PlasmicHomepage_freeBox__lMtnL__RLY90",freeBox__z8Ju:"PlasmicHomepage_freeBox__z8Ju__drMMo",text___9R64K:"PlasmicHomepage_text___9R64K__KnlgO",text__cQwqQ:"PlasmicHomepage_text__cQwqQ__iTFtU",freeBox__o08Pk:"PlasmicHomepage_freeBox__o08Pk__mQrrw",text__al8T:"PlasmicHomepage_text__al8T__fim_8",text___3C4Jq:"PlasmicHomepage_text___3C4Jq___HwAs",freeBox__kNhPb:"PlasmicHomepage_freeBox__kNhPb__0lxIV",freeBox__hLjJf:"PlasmicHomepage_freeBox__hLjJf__y9dzp",link___50XV:"PlasmicHomepage_link___50XV__3Qk8_"}},4986:function(e){e.exports={plasmic_tokens:"plasmic_argazki_a_artment_landing_plasmic_tokens__bIAb_",plasmic_default_styles:"plasmic_argazki_a_artment_landing_plasmic_default_styles__tfW0I",all:"plasmic_argazki_a_artment_landing_all__ruTyQ",img:"plasmic_argazki_a_artment_landing_img___EhO2",li:"plasmic_argazki_a_artment_landing_li__FFIK4",span:"plasmic_argazki_a_artment_landing_span__SpiD2",input:"plasmic_argazki_a_artment_landing_input__GtT5m",textarea:"plasmic_argazki_a_artment_landing_textarea__DL2HE",button:"plasmic_argazki_a_artment_landing_button__Cg_0g",code:"plasmic_argazki_a_artment_landing_code__uW2cB",pre:"plasmic_argazki_a_artment_landing_pre__w9Fxn",p:"plasmic_argazki_a_artment_landing_p__8i_Nr",h1:"plasmic_argazki_a_artment_landing_h1__Jo1Rt",h2:"plasmic_argazki_a_artment_landing_h2__dFRHO",h3:"plasmic_argazki_a_artment_landing_h3__3BWfC",h4:"plasmic_argazki_a_artment_landing_h4___aINl",h5:"plasmic_argazki_a_artment_landing_h5__Mjrdt",h6:"plasmic_argazki_a_artment_landing_h6__MgAnZ",address:"plasmic_argazki_a_artment_landing_address__RrQPB",a:"plasmic_argazki_a_artment_landing_a__K3OMi",ol:"plasmic_argazki_a_artment_landing_ol__pQvMG",ul:"plasmic_argazki_a_artment_landing_ul__SC5Q6",select:"plasmic_argazki_a_artment_landing_select__WTlbi",plasmic_default__component_wrapper:"plasmic_argazki_a_artment_landing_plasmic_default__component_wrapper__4PB9A",plasmic_default__inline:"plasmic_argazki_a_artment_landing_plasmic_default__inline__VlJvA",plasmic_page_wrapper:"plasmic_argazki_a_artment_landing_plasmic_page_wrapper__Lo4pY",root_reset:"plasmic_argazki_a_artment_landing_root_reset__svlX4",plasmic_default__h1:"plasmic_argazki_a_artment_landing_plasmic_default__h1__2hqih",plasmic_default__h2:"plasmic_argazki_a_artment_landing_plasmic_default__h2__v1kf9",plasmic_default__h3:"plasmic_argazki_a_artment_landing_plasmic_default__h3__n5uZa",plasmic_default__h4:"plasmic_argazki_a_artment_landing_plasmic_default__h4__ZrxKV",plasmic_default__h5:"plasmic_argazki_a_artment_landing_plasmic_default__h5__7hEwb",plasmic_default__h6:"plasmic_argazki_a_artment_landing_plasmic_default__h6__CzwUx",plasmic_default__blockquote:"plasmic_argazki_a_artment_landing_plasmic_default__blockquote__XCk5h",blockquote:"plasmic_argazki_a_artment_landing_blockquote__l_qbL",plasmic_default__code:"plasmic_argazki_a_artment_landing_plasmic_default__code__cGPHS",plasmic_default__pre:"plasmic_argazki_a_artment_landing_plasmic_default__pre__HzCTq",plasmic_default__ol:"plasmic_argazki_a_artment_landing_plasmic_default__ol__L_ji5",plasmic_default__ul:"plasmic_argazki_a_artment_landing_plasmic_default__ul__0ymEh"}},8834:function(){},9008:function(e,a,t){e.exports=t(3121)},1664:function(e,a,t){e.exports=t(1551)}},function(e){e.O(0,[774,888,179],(function(){return a=5728,e(e.s=a);var a}));var a=e.O();_N_E=a}]);