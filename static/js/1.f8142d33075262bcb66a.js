webpackJsonp([1],{153:function(t,i,o){"use strict";function e(t){o(171)}Object.defineProperty(i,"__esModule",{value:!0});var a=o(159),r=o(177),n=o(16),c=e,d=n(a.a,r.a,!1,c,"data-v-64a9a8a9",null);i.default=d.exports},154:function(t,i,o){"use strict";i.a={metaInfo:{title:"Os melhores produtos na sua mão",titleTemplate:"%s ← Desafio Mercado Livre ",meta:[{"http-equiv":"Content-Type",content:"text/html; charset=utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{name:"description",content:"Página para seleção de um produto"},{property:"og:title",content:"Os melhores produtos na sua mãoe"},{property:"og:site_name",content:"Defafio Mercado Livre"},{property:"og:type",content:"website"},{property:"og:url",content:"https://www.my-site.com/my-special-page"},{property:"og:image",content:"https://www.my-site.com/my-special-image.jpg"},{property:"og:description",content:"Página para seleção de um produto."}],links:[{rel:"canonical",href:"https://www.my-site.com/my-special-page"}]}}},155:function(t,i,o){"use strict";i.a={computed:{condition:function(){var t="";return"new"===this.product.condition?t=this.$capitalize("novo"):"used"===t&&(t=this.$capitalize("usado")),t+" -  "+this.product.sold_quantity+" vendidos"}}}},159:function(t,i,o){"use strict";var e=o(55),a=o.n(e),r=o(29),n=(o(17),o(173)),c=o(154);i.a={computed:a()({},Object(r.c)(["selectedProduct"])),components:{ProductInformation:n.a},mixins:[c.a]}},160:function(t,i,o){"use strict";var e=o(155);i.a={mixins:[e.a],props:{product:{required:!0,type:Object}}}},171:function(t,i,o){var e=o(172);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);o(150)("ae0c49d0",e,!0,{})},172:function(t,i,o){i=t.exports=o(149)(!1),i.push([t.i,".selected-product[data-v-64a9a8a9]{background-color:#fff!important;border-radius:1%;display:-webkit-box;display:-ms-flexbox;display:flex}",""])},173:function(t,i,o){"use strict";function e(t){o(174)}var a=o(160),r=o(176),n=o(16),c=e,d=n(a.a,r.a,!1,c,"data-v-b25b4842",null);i.a=d.exports},174:function(t,i,o){var e=o(175);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);o(150)("5ce02a12",e,!0,{})},175:function(t,i,o){i=t.exports=o(149)(!1),i.push([t.i,".product-information[data-v-b25b4842]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;width:100%}@media screen and (max-width:500px){.product-information[data-v-b25b4842]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}}.product-information--image[data-v-b25b4842]{width:100%}.product-information--details[data-v-b25b4842]{color:#000;display:-webkit-box;display:-ms-flexbox;display:flex;width:40%;height:100%;margin-left:5%;padding-right:2rem;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;text-align:justify}@media screen and (max-width:500px){.product-information--details[data-v-b25b4842]{width:100%;margin-left:0;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-right:0}}.product-information--details---condition[data-v-b25b4842]{padding-top:1rem;font-size:.875rem}.product-information--details---price[data-v-b25b4842],.product-information--details---title[data-v-b25b4842]{font-weight:500}.product-information--details button[data-v-b25b4842]{background-color:#3483fa;text-align:center;border:none;padding:8px;color:#fff;border-radius:5%;width:85%}.product-description[data-v-b25b4842]{width:100%;margin:5%}.product-description h2[data-v-b25b4842]{color:#000}.product-description p[data-v-b25b4842]{line-break:auto}",""])},176:function(t,i,o){"use strict";var e=function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("div",{},[o("div",{staticClass:"product-information"},[o("img",{staticClass:"product-information--image",attrs:{src:t.product.picture,alt:"Imagem do produto "+t.product.description}}),t._v(" "),o("div",{staticClass:"product-information--details"},[o("h4",{staticClass:"product-information--details---condition"},[t._v(t._s(t.condition))]),t._v(" "),o("h2",{staticClass:"product-information--details---title"},[t._v(t._s(t.product.title))]),t._v(" "),o("h2",{staticClass:"product-information--details---price"},[t._v("$ "+t._s(t.product.price))]),t._v(" "),o("button",[t._v("Comprar")])])]),t._v(" "),o("div",{staticClass:"product-description"},[o("h2",[t._v("Descrição do produto")]),t._v(" "),o("p",[t._v(t._s(t.product.description))])])])},a=[],r={render:e,staticRenderFns:a};i.a=r},177:function(t,i,o){"use strict";var e=function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("section",{staticClass:"selected-product"},[o("ProductInformation",{attrs:{product:t.selectedProduct}})],1)},a=[],r={render:e,staticRenderFns:a};i.a=r}});