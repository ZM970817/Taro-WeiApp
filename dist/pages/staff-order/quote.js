(wx.webpackJsonp=wx.webpackJsonp||[]).push([[49],{"150":function(t,e,n){t.exports=n.p+"pages/staff-order/quote.wxml"},"235":function(t,e,n){"use strict";n.r(e);n(236);var o=n(89);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r)},"236":function(t,e,n){"use strict";n(150)},"34":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{"value":!0});var o=function(t,e,n){return e&&defineProperties(t.prototype,e),n&&defineProperties(t,n),t};function defineProperties(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var r,i,a=n(0),u=function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}(a),s=n(10);function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}n(87);var c=(function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{"constructor":{"value":t,"enumerable":!1,"writable":!0,"configurable":!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(Quote,a.Component),o(Quote,[{"key":"_constructor","value":function _constructor(){(function get(t,e,n){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,e);if(void 0===o){var r=Object.getPrototypeOf(t);return null===r?void 0:get(r,e,n)}if("value"in o)return o.value;var i=o.get;return void 0!==i?i.call(n):void 0})(Quote.prototype.__proto__||Object.getPrototypeOf(Quote.prototype),"_constructor",this).call(this),this.state={"staffPrice":0,"id":"","type":"","doorFee":"","nightFee":"","servicePrice":"","materialsPrice":"","totalAmount":0,"repairOrderOfferPlanVoList":[],"dispatchId":""},this.$$refs=new u.default.RefsArray}},{"key":"componentWillMount","value":function componentWillMount(){var t=this,e=this.$router.params,n=e.id,o=e.type,r=e.dispatchId;console.log(r),this.setState({"id":n,"type":o,"dispatchId":r},function(){t.getFee()})}},{"key":"_createData","value":function _createData(t,e,n){var o=this;return this.__state=t||this.state||{},this.__props=e||this.props||{},this.$prefix,this.anonymousFunc0=function(t){return o.handlePriceChange(t,"servicePrice")},this.anonymousFunc1=function(t){return o.handlePriceChange(t,"materialsPrice")},Object.assign(this.__state,{}),this.__state}},{"key":"anonymousFunc0","value":function anonymousFunc0(){}},{"key":"anonymousFunc1","value":function anonymousFunc1(){}}]),i=r=Quote,r.$$events=["filterInput","anonymousFunc0","anonymousFunc1","submitPlan"],r.$$componentPath="pages/staff-order/quote",i);function Quote(){var t,e,o;!function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,Quote);for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=o=_possibleConstructorReturn(this,(t=Quote.__proto__||Object.getPrototypeOf(Quote)).call.apply(t,[this].concat(r)))).$usedState=["staffPrice","id","type","doorFee","nightFee","servicePrice","materialsPrice","totalAmount","repairOrderOfferPlanVoList","dispatchId"],o.config={"navigationBarTitleText":"报价清单","navigationStyle":"default"},o.getFee=function(){(0,s.orderDetail)(o.state.id).then(function(t){if(0===t.data.code){var e=0,n=t.data.data.repairOrderOfferPlanVoList.filter(function(t){return"MATERIAL_PROJECT"!==t.planType&&"SERVICE_PROJECT"!==t.planType&&(e+=t.amount,!0)});o.setState({"repairOrderOfferPlanVoList":n,"totalAmount":e})}})},o.submitPlan=function(){if(o.state.servicePrice||o.state.materialsPrice){u.default.showLoading({"title":"提交中"});var t=[{"planType":"SERVICE_PROJECT","serviceCost":o.state.servicePrice},{"planType":"MATERIAL_PROJECT","serviceCost":o.state.materialsPrice}];(0,s.setPricePlan)(o.state.dispatchId,t).then(function(t){0===t.data.code?u.default.showToast({"title":"报价方案提交成功"}).then(function(){u.default.navigateBack()}):u.default.showToast({"title":t.data.msg,"icon":"none"})})}else u.default.showToast({"title":"请至少填写服务费或材料费中一项","icon":"none"})},o.handlePriceChange=function(t,e){var n=t.detail.value;o.setState(function _defineProperty(t,e,n){return e in t?Object.defineProperty(t,e,{"value":n,"enumerable":!0,"configurable":!0,"writable":!0}):t[e]=n,t}({},e,parseFloat(n)))},o.filterInput=function(t){var e=t.detail.value;return e.toString().split(".")[1]&&2<=e.toString().split(".")[1].length?parseFloat(e).toFixed(2):-1<e.indexOf(".")&&2<e.split(".").length?"":void 0},o.customComponents=[],_possibleConstructorReturn(o,e)}e.default=c,Component(n(0).default.createComponent(c,!0))},"89":function(t,e,n){"use strict";n.r(e);var o=n(34),r=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);e.default=r.a}},[[235,0,1,2]]]);