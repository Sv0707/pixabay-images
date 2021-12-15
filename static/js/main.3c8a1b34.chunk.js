(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{13:function(e,t,a){e.exports={backdrop:"Modal_backdrop__FqAw6",modal:"Modal_modal__2rhTf"}},14:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__Z5bQs",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__3pPPf"}},26:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__spxKU"}},27:function(e,t,a){e.exports={Button:"Button_Button__376aZ"}},29:function(e,t,a){e.exports={loader:"Loader_loader__3gN0K"}},34:function(e,t,a){},5:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__3oCey",SearchForm:"Searchbar_SearchForm__1DpRp",SearchFormButton:"Searchbar_SearchFormButton__mCXxv",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__1F_OP",SearchFormInput:"Searchbar_SearchFormInput__2_jGC","SearchForm-input":"Searchbar_SearchForm-input__BCTCY"}},75:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(9),o=a.n(r),s=a(15),u=a(4),i=(a(34),a(12)),l=a.n(i),m=a(24),b=a(25),j=a.n(b),h=function(){var e=Object(m.a)(l.a.mark((function e(t,a){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://pixabay.com/api/","23791107-11d3cac259792c6d6696bfd74",e.next=4,j.a.get("".concat("https://pixabay.com/api/","?q=").concat(t,"&page=").concat(a,"&key=").concat("23791107-11d3cac259792c6d6696bfd74","&image_type=photo&orientation=horizontal&per_page=12"));case 4:return c=e.sent,e.abrupt("return",c.data);case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),p=h,d=a(5),f=a.n(d),O=a(1),g=function(e){var t=e.onSubmit,a=Object(c.useState)(""),n=Object(u.a)(a,2),r=n[0],o=n[1],s=function(){o("")};return Object(O.jsx)("header",{className:f.a.Searchbar,children:Object(O.jsxs)("form",{className:f.a.SearchForm,onSubmit:function(e){e.preventDefault(),t(r),s()},children:[Object(O.jsx)("button",{type:"submit",className:f.a.SearchFormButton,children:Object(O.jsx)("span",{className:f.a.SearchFormButtonLabel,children:"Search"})}),Object(O.jsx)("input",{className:f.a.SearchFormInput,type:"text",value:r,onChange:function(e){o(e.target.value),console.log(r)},autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})},_=a(13),S=a.n(_),x=document.querySelector("#modal-root"),y=function(e){var t=e.onClose,a=e.children;Object(c.useEffect)((function(){var e=function(e){"Escape"===e.code&&t()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t]);return Object(r.createPortal)(Object(O.jsx)("div",{className:S.a.backdrop,onClick:function(e){e.target===e.currentTarget&&t()},children:Object(O.jsx)("div",{className:S.a.modal,children:a})}),x)},I=a(14),v=a.n(I),F=function(e){var t=e.image,a=e.openImg;return Object(O.jsx)("li",{className:v.a.ImageGalleryItem,onClick:function(){a(t.largeImageURL)},children:Object(O.jsx)("img",{src:t.webformatURL,alt:t.tags,className:v.a.ImageGalleryItemImage})})},k=a(26),w=a.n(k),C=function(e){var t=e.gallery,a=e.openImg;return Object(O.jsx)("ul",{className:w.a.ImageGallery,children:t.map((function(e){return Object(O.jsx)(F,{image:e,openImg:a},e.id)}))})},G=a(27),N=a.n(G),B=function(e){var t=e.onClick;return Object(O.jsx)("button",{type:"button",className:N.a.Button,onClick:t,children:"Load more"})},L=a(28),E=a.n(L),q=a(29),P=a.n(q),M=function(){return Object(O.jsx)("div",{className:P.a.loader,children:Object(O.jsx)(E.a,{type:"Circles",color:"#3f51b5",height:200,width:200})})},T={textAlign:"center"},R=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(""),o=Object(u.a)(r,2),i=o[0],l=o[1],m=Object(c.useState)(1),b=Object(u.a)(m,2),j=b[0],h=b[1],d=Object(c.useState)(!1),f=Object(u.a)(d,2),_=f[0],S=f[1],x=Object(c.useState)(""),I=Object(u.a)(x,2),v=I[0],F=I[1],k=Object(c.useState)(0),w=Object(u.a)(k,2),G=w[0],N=w[1],L=Object(c.useState)(!1),E=Object(u.a)(L,2),q=E[0],P=E[1],R=Object(c.useState)(!1),U=Object(u.a)(R,2),A=U[0],D=U[1],J=Object(c.useState)(!1),K=Object(u.a)(J,2),Z=K[0],z=K[1];Object(c.useEffect)((function(){P(!0),console.log(j),p(i,j).then((function(e){var t=e.hits,a=e.total;if(0===t.length)return z(!1),n([]),Promise.reject(new Error("There is no pictures by ".concat(i," name, please try another request")));D(!1),n((function(e){return[].concat(Object(s.a)(e),Object(s.a)(t))})),N(a)})).catch((function(e){return D(e)})).finally((function(){return P(!1)}))}),[i,j]),Object(c.useEffect)((function(){Math.ceil(G/12)>j?z(!0):z(!1)}),[G,j]);var Q=function(){S(!_)};return Object(O.jsxs)("div",{children:[Object(O.jsx)(g,{onSubmit:function(e){l(e),n([]),h(1)}}),A&&Object(O.jsx)("h2",{style:T,children:A.message}),q&&Object(O.jsx)(M,{}),a.length>0&&Object(O.jsx)(C,{gallery:a,openImg:function(e){console.log(e),F(e),Q()}}),Z&&!q&&Object(O.jsx)(B,{onClick:function(){return h(j+1)}}),_&&Object(O.jsx)(y,{onClose:Q,children:Object(O.jsx)("img",{src:v,alt:v})})]})};o.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(R,{})}),document.querySelector("#root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.3c8a1b34.chunk.js.map