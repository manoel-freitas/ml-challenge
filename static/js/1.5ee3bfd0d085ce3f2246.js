webpackJsonp([1],{212:function(t,i,e){"use strict";function o(t){e(235)}Object.defineProperty(i,"__esModule",{value:!0});var a=e(219),n=e(241),r=e(19),c=o,s=r(a.a,n.a,!1,c,"data-v-64a9a8a9",null);i.default=s.exports},213:function(t,i,e){"use strict";i.a={metaInfo:{title:"Os melhores produtos na sua mão",titleTemplate:"%s ← Desafio Mercado Livre ",meta:[{"http-equiv":"Content-Type",content:"text/html; charset=utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{name:"description",content:"Página para seleção de um produto"},{property:"og:title",content:"Os melhores produtos na sua mãoe"},{property:"og:site_name",content:"Defafio Mercado Livre"},{property:"og:type",content:"website"},{property:"og:url",content:"https://www.my-site.com/my-special-page"},{property:"og:image",content:"https://www.my-site.com/my-special-image.jpg"},{property:"og:description",content:"Página para seleção de um produto."}],links:[{rel:"canonical",href:"https://www.my-site.com/my-special-page"}]}}},214:function(t,i,e){"use strict";i.a={computed:{condition:function(){var t="";return"new"===this.product.condition?t=this.$capitalize("novo"):"used"===t&&(t=this.$capitalize("usado")),t+" -  "+this.product.sold_quantity+" vendidos"}}}},219:function(t,i,e){"use strict";var o=e(71),a=e.n(o),n=e(34),r=(e(35),e(237)),c=e(213);i.a={computed:a()({},Object(n.c)(["selectedProduct"])),components:{ProductInformation:r.a},mixins:[c.a]}},220:function(t,i,e){"use strict";var o=e(214);i.a={mixins:[o.a],props:{product:{required:!0,type:Object}}}},235:function(t,i,e){var o=e(236);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);e(209)("ae0c49d0",o,!0,{})},236:function(t,i,e){i=t.exports=e(208)(!1),i.push([t.i,".selected-product[data-v-64a9a8a9]{background-color:#fff!important;border-radius:1%;display:-webkit-box;display:-ms-flexbox;display:flex}",""])},237:function(t,i,e){"use strict";function o(t){e(238)}var a=e(220),n=e(240),r=e(19),c=o,s=r(a.a,n.a,!1,c,"data-v-61f8a992",null);i.a=s.exports},238:function(t,i,e){var o=e(239);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);e(209)("bf61a614",o,!0,{})},239:function(t,i,e){i=t.exports=e(208)(!1),i.push([t.i,".product-information[data-v-61f8a992]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;width:100%}@media screen and (max-width:500px){.product-information[data-v-61f8a992]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}}.product-information--image[data-v-61f8a992]{width:100%}.product-information--details[data-v-61f8a992]{color:#000;display:-webkit-box;display:-ms-flexbox;display:flex;width:40%;height:100%;margin-left:5%;padding-right:2rem;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;text-align:justify}@media screen and (max-width:500px){.product-information--details[data-v-61f8a992]{width:100%;margin-left:0;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-right:0}}.product-information--details---condition[data-v-61f8a992]{padding-top:1rem;font-size:.875rem}.product-information--details---title[data-v-61f8a992]{font-weight:500;letter-spacing:0;line-height:20px}.product-information--details---price[data-v-61f8a992]{font-weight:500}.product-information--details button[data-v-61f8a992]{background-color:#3483fa;text-align:center;border:none;padding:8px;color:#fff;border-radius:5%;width:85%}.product-description[data-v-61f8a992]{width:100%}.product-description h2[data-v-61f8a992]{color:#000}.product-description p[data-v-61f8a992]{line-height:20px;letter-spacing:1px;font-weight:500;text-justify:distribute-all-lines}",""])},240:function(t,i,e){"use strict";var o=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{},[e("div",{staticClass:"product-information"},[e("img",{staticClass:"product-information--image",attrs:{src:t.product.picture,alt:"Imagem do produto "+t.product.description}}),t._v(" "),e("div",{staticClass:"product-information--details"},[e("h4",{staticClass:"product-information--details---condition"},[t._v(t._s(t.condition))]),t._v(" "),e("h3",{staticClass:"product-information--details---title"},[t._v(t._s(t.product.title))]),t._v(" "),e("h2",{staticClass:"product-information--details---price"},[t._v(" "+t._s(t.product.price))]),t._v(" "),e("button",[t._v("Comprar")])])]),t._v(" "),e("div",{staticClass:"product-description"},[e("h2",[t._v("Descrição do produto")]),t._v(" "),e("p",[t._v(t._s(t.product.description))])])])},a=[],n={render:o,staticRenderFns:a};i.a=n},241:function(t,i,e){"use strict";var o=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("section",{staticClass:"selected-product"},[e("ProductInformation",{attrs:{product:t.selectedProduct}})],1)},a=[],n={render:o,staticRenderFns:a};i.a=n}});