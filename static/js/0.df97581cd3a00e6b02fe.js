webpackJsonp([0],{210:function(t,e,i){"use strict";function o(t){i(221)}Object.defineProperty(e,"__esModule",{value:!0});var r=i(215),a=i(233),c=i(19),n=o,s=c(r.a,a.a,!1,n,null,null);e.default=s.exports},213:function(t,e,i){"use strict";e.a={metaInfo:{title:"Os melhores produtos na sua mão",titleTemplate:"%s ← Desafio Mercado Livre ",meta:[{"http-equiv":"Content-Type",content:"text/html; charset=utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{name:"description",content:"Página para seleção de um produto"},{property:"og:title",content:"Os melhores produtos na sua mãoe"},{property:"og:site_name",content:"Defafio Mercado Livre"},{property:"og:type",content:"website"},{property:"og:url",content:"https://www.my-site.com/my-special-page"},{property:"og:image",content:"https://www.my-site.com/my-special-image.jpg"},{property:"og:description",content:"Página para seleção de um produto."}],links:[{rel:"canonical",href:"https://www.my-site.com/my-special-page"}]}}},214:function(t,e,i){"use strict";e.a={computed:{condition:function(){var t="";return"new"===this.product.condition?t=this.$capitalize("novo"):"used"===t&&(t=this.$capitalize("usado")),t+" -  "+this.product.sold_quantity+" vendidos"}}}},215:function(t,e,i){"use strict";var o=i(71),r=i.n(o),a=i(223),c=i(229),n=(i(35),i(34)),s=i(213);e.a={name:"products-page",components:{ProductListItem:a.a,NoProductsInfo:c.a},props:{search:String},mixins:[s.a],computed:r()({},Object(n.c)(["products","selectedProduct"])),methods:r()({},Object(n.b)(["fetchProducts","fetchProductById","fetchProductDescriptionById"]),{goDetailProduct:function(t){var e=this;this.fetchProductById(t).then(function(){e.$router.push({name:"DetailProduct",params:{id:t}})})}}),beforeRouteLeave:function(t,e,i){this.selectedProduct.id&&this.fetchProductDescriptionById(this.selectedProduct.id).then(function(){i()})}}},216:function(t,e,i){"use strict";var o=i(214);e.a={mixins:[o.a],computed:{hasShipping:function(){return this.product.free_shipping}},props:{product:{required:!0,type:Object}}}},217:function(t,e,i){"use strict";e.a={}},221:function(t,e,i){var o=i(222);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);i(209)("e96a3f88",o,!0,{})},222:function(t,e,i){e=t.exports=i(208)(!1),e.push([t.i,".product-list{background-color:#fff!important;border-radius:1%;display:-webkit-box;display:-ms-flexbox;display:flex}",""])},223:function(t,e,i){"use strict";function o(t){i(224)}var r=i(216),a=i(226),c=i(19),n=o,s=c(r.a,a.a,!1,n,null,null);e.a=s.exports},224:function(t,e,i){var o=i(225);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);i(209)("65db363a",o,!0,{})},225:function(t,e,i){e=t.exports=i(208)(!1),e.push([t.i,".product-list-item{display:-webkit-box;display:-ms-flexbox;display:flex;margin-top:16px;margin-bottom:16px;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.product-list-item:hover{opacity:.7;cursor:pointer}.product-list-item--product-information{display:-webkit-box;display:-ms-flexbox;display:flex;color:#000;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-left:5%}@media screen and (max-width:500px){.product-list-item{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.product-list-item--product-information{-webkit-box-align:center;-ms-flex-align:center;align-items:center}}.product--price{padding-bottom:32px}.product--shipping{border-radius:50%;height:10;width:10}.product--image{border:1px solid #ddd;border-radius:4px;height:180px;width:300px;margin:16px}.product--location{margin:10%}",""])},226:function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"product-list-item",on:{click:function(e){t.$emit("product-selected",t.product)}}},[o("img",{staticClass:"product--image",attrs:{src:t.product.picture,alt:"img"}}),t._v(" "),o("div",{staticClass:"product-list-item--product-information"},[o("span",{staticClass:"product--price"},[t._v(" "+t._s(t.product.price)+"  "),t.hasShipping?o("img",{staticClass:"product--shipping",attrs:{src:i(227),srcset:i(228),alt:""}}):t._e()]),t._v(" "),o("span",{staticClass:"product--description"},[t._v(" "+t._s(t.product.title))])]),t._v(" "),o("span",{staticClass:"product--location"},[t._v("\n    "+t._s(t.product.location)+"\n  ")])])},r=[],a={render:o,staticRenderFns:r};e.a=a},227:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAfFJREFUOBGdVM1LFGEY/73vrCNukK27WRBkrsjSX+ApC4yuQoe6dDDMk0ehi54FO3sLyauBB/UWCn2cPIqIbVKWESRLzIKu2rI7r+/vaWd2ZhJWfWHm+f69zzwfo3DGuV0cHVJ+/SmUGjQGt+iiFH7BmI9GOwt7hbm1ZJiKKvJfR/rrVfXawNyP6pO8gvrguGbsW9/8TmALgXqLI/fqPpasIRMYW1DP0RjeLcx/op8AMZNaFetWPi9IcIeXcjHAzDQ1/JxLgDA004iFYmHh11ep5XE3D9G2c2TrakRWlrgbByhP5WHa5V7Rx17aeailOxFt58wuUPNtl2xJ7QOt4OwdIze6hfTifsSzyRIjxRbb65tay1We3IzJFJxSFe7nCjrGt+FN98PvTDV9LIYO5qSpPZur5dpQnszjZCiLq7M/Y07EiMDGbDGh8rg7lMlff7YZygGjZWIDqUGvvP2N3IstkPLo/b/omijKQz55iJHi2FtDIWpMr5RwMpgBaXq5JKZaPi00O/El6vqPtxj/tZ8WZtLx7g+OH2Wl8Mzi2qvvElR+eQf+jXbhw5dtv0x2z/bz9632KwxKMNy7H3ffPJAJ4wJau5fwOY/oNWIhQNwVLuAFwWRpgz9AOPPcYi4gU22VCn3oG2w+/aVGycDL/NhOAcfUuRqz001nAAAAAElFTkSuQmCC"},228:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAA7BJREFUWAnNWE1IVFEUPuc56lgzOGZWODgWRU5BtBQ0FwVCUi0iSoqE1FWLMAjatWkZRGVBKzOiTUa4qOhnoBam0C5qkVJQY4z9mKloOY4zczvnjff15jXvZ3Rm9C7evffcc8/3cc/9OechZFkC4dMVMBc9AAKaEUWA6moBWM1mEMQYfcaEwFGqQ1Dmfjxae3MyGwh0qlw70nEYhDgjBDQBCJezeRhHhAFAvB6uu9XvZI4tocBwZyNC8pIQosGJQTMdRBwSoJwfDfYMmumw3JTQUdFX9HrkyWValS4rA1mPIV6rr2s5dx+PJTLNzUho86ezvmR0uo9c05xpUg5kzxW3r/XzlqtTRlv/EWIyYn56iFy0w6icyz658D2WljcYSSl6EHYTr0y+yTAmYzAWY+o5pHVmj3uukOoJvUKe21sjEx/Lp2+8eSpxNJfxaQKReCUHClpj0R55+jSX8dEuKAkdmB5bJcSX3nLvGZ39rJuMrV68NDN149INbGal5O0MeHsioEwsmKlo8mRlMcx0+CG226vJHDdSHPpRfZv+RH+YPQeVXcOOyEjg5LpimOgOym4WNcZhjXuDC6Kxg2Zk2JpcmfG7u2yNV518B8qvBeBalri/FCYvbgMo1barHDLU9D4SFwVFIl+3sQroisyD93bEAJ65y1x4D9VkHl66VK4mk/Fd+ADugSlY2OmBaFOFndEaheMZO62ljrO7Ztv96nRPbwSYoGUhLooMriwVlzHIqxJt8gHGBHi7w5aWmIuLAii6Biz1HA9KVxknzJzyq26zWyHmQi4TX40Gct63PWGLiMTFxTEw7aPtdiQwLmDtg+9QMpAKkWPkit9HNlIwqz2H4ETHEoe4uNSAnBjZFSZT9nBcU5Pt2dZNmsyJjqacocFcMDDS2QbJxJ0M46pIf8mxILp/Pd2jAO5nP82mWOqY7TPVGGKbAu6SRxRax02tGwfsF1MlbJxm3ycOlDapG6B2uP0FHbW9VpM8976luYx15w5Vgd5lTnTMMCikfRkO9u5LvfaUN9FpsyTEG5iLcVPrAZzo6PXT2syBinZEaJUGVyom4pyNVqeRCWlPMCdxLFiJosfWCKkxLSVxBSdEmDKeZmyNEHc4oyQvhrhdmIKhFOY/NG0PSdGqShSZFGeSnFHmd6UwlClrZfw0l7GAC5OqD7a00G+U3O8p/tlAto0pdApZd+ylwFivmt8xRmKr5oeVkZiaNlF2sJgc1HAILKNO+UuP5nwRWBTidzLbX3p/AQ4pj74FjBtdAAAAAElFTkSuQmCC"},229:function(t,e,i){"use strict";function o(t){i(230)}var r=i(217),a=i(232),c=i(19),n=o,s=c(r.a,a.a,!1,n,"data-v-13afcfbe",null);e.a=s.exports},230:function(t,e,i){var o=i(231);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);i(209)("97a50eae",o,!0,{})},231:function(t,e,i){e=t.exports=i(208)(!1),e.push([t.i,".hero[data-v-13afcfbe]{height:100vh;width:100%;background-image:url(https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=71d59cd22de21da8d2939bc203617983&auto=format&fit=crop&w=1560&q=80);background-position:50%;color:#fff;background-size:cover;background-repeat:no-repeat;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.hero #header[data-v-13afcfbe],.hero[data-v-13afcfbe]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.hero .hero-footer[data-v-13afcfbe]{display:-webkit-box;display:-ms-flexbox;display:flex}.hero #logo[data-v-13afcfbe]{font-size:5vh}.hero #menu-icon[data-v-13afcfbe]{font-size:6vh}.hero .hero-title[data-v-13afcfbe]{font-size:7vh;padding-bottom:50%}.hero .button[data-v-13afcfbe]{font-size:3vh;text-decoration:none;color:#fff;padding:15px;text-align:center;border:1px solid #000;margin-bottom:15px}",""])},232:function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"hero"},[t._m(0),t._v(" "),t._m(1),t._v(" "),i("footer",{staticClass:"hero-footer"},[i("router-link",{staticClass:"button",attrs:{to:{name:"Products"}}},[t._v("Volte para a nossa tela inicial e veja mais produtos")])],1)])},r=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",{attrs:{id:"header"}},[o("img",{attrs:{src:i(72),srcset:i(73),alt:"Logo mercado livre",width:"60",height:"35 "}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",{staticClass:"hero-header"},[i("h1",{staticClass:"hero-title"},[t._v("Infelizmente não temos o que procura")])])}],a={render:o,staticRenderFns:r};e.a=a},233:function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return 0!==t.products.length?i("section",{staticClass:"product-list"},[i("div",t._l(t.products,function(e,o){return i("ProductListItem",{key:o,attrs:{product:e},on:{"product-selected":function(i){t.goDetailProduct(e.id)}}})}))]):i("NoProductsInfo")},r=[],a={render:o,staticRenderFns:r};e.a=a}});