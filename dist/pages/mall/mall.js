(wx.webpackJsonp=wx.webpackJsonp||[]).push([[40],{"143":function(t,e,o){t.exports=o.p+"pages/mall/mall.wxml"},"215":function(t,e,o){"use strict";o.r(e);o(216);var n=o(81);for(var a in n)"default"!==a&&function(t){o.d(e,t,function(){return n[t]})}(a)},"216":function(t,e,o){"use strict";o(143)},"217":function(t,e,o){},"24":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{"value":!0});var n=function(t,e,o){return e&&defineProperties(t.prototype,e),o&&defineProperties(t,o),t};function defineProperties(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var a,r,i=o(0),s=function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}(i),l=o(8);function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}o(217);var u=(function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{"constructor":{"value":t,"enumerable":!1,"writable":!0,"configurable":!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(Mall,i.Component),n(Mall,[{"key":"_constructor","value":function _constructor(){(function get(t,e,o){null===t&&(t=Function.prototype);var n=Object.getOwnPropertyDescriptor(t,e);if(void 0===n){var a=Object.getPrototypeOf(t);return null===a?void 0:get(a,e,o)}if("value"in n)return n.value;var r=n.get;return void 0!==r?r.call(o):void 0})(Mall.prototype.__proto__||Object.getPrototypeOf(Mall.prototype),"_constructor",this).apply(this,arguments),this.state={"pageNo":1,"pageSize":10,"hasNextPage":!0,"lists":[]},this.$$refs=new s.default.RefsArray}},{"key":"componentWillMount","value":function componentWillMount(){this.getSubscribeLists()}},{"key":"onPullDownRefresh","value":function onPullDownRefresh(){this.getSubscribeLists()}},{"key":"onReachBottom","value":function onReachBottom(){this.getSubscribeLists()}},{"key":"_createData","value":function _createData(t,e,o){return this.__state=t||this.state||{},this.__props=e||this.props||{},this.$prefix,Object.assign(this.__state,{}),this.__state}}]),r=a=Mall,a.$$events=[],a.$$componentPath="pages/mall/mall",r);function Mall(){var t,e,a;!function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,Mall);for(var o=arguments.length,n=Array(o),r=0;r<o;r++)n[r]=arguments[r];return(e=a=_possibleConstructorReturn(this,(t=Mall.__proto__||Object.getPrototypeOf(Mall)).call.apply(t,[this].concat(n)))).$usedState=["pageNo","pageSize","hasNextPage","lists"],a.config={"navigationBarTitleText":"预约商城","navigationStyle":"default"},a.getSubscribeLists=function(){var t=a.state,e=t.pageNo,o=t.pageSize;if(t.hasNextPage){var n={"pageNo":e,"pageSize":o};s.default.showLoading({"title":"加载中"}),(0,l.subscribeLists)(n).then(function(t){if(s.default.hideLoading(),s.default.stopPullDownRefresh(),0===t.data.code){var e=t.data.data;a.setState(function(t){return{"lists":t.lists.concat(e.list),"hasNextPage":e.hasNextPage,"pageNo":e.hasNextPage?e.nextPage:e.pageNo}})}})}else s.default.showToast({"title":"没有更多了~","icon":"none"})},a.customComponents=[],_possibleConstructorReturn(a,e)}e.default=u,Component(o(0).default.createComponent(u,!0))},"81":function(t,e,o){"use strict";o.r(e);var n=o(24),a=o.n(n);for(var r in n)"default"!==r&&function(t){o.d(e,t,function(){return n[t]})}(r);e.default=a.a}},[[215,0,1,2]]]);