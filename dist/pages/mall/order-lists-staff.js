(wx.webpackJsonp=wx.webpackJsonp||[]).push([[42],{"148":function(t,e,o){t.exports=o.p+"pages/mall/order-lists-staff.wxml"},"227":function(t,e,o){"use strict";o.r(e);o(228);var a=o(85);for(var n in a)"default"!==n&&function(t){o.d(e,t,function(){return a[t]})}(n)},"228":function(t,e,o){"use strict";o(148)},"28":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{"value":!0});var x=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function sliceIterator(t,e){var o=[],a=!0,n=!1,r=void 0;try{for(var i,s=t[Symbol.iterator]();!(a=(i=s.next()).done)&&(o.push(i.value),!e||o.length!==e);a=!0);}catch(t){n=!0,r=t}finally{try{!a&&s.return&&s.return()}finally{if(n)throw r}}return o}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},a=function(t,e,o){return e&&defineProperties(t.prototype,e),o&&defineProperties(t,o),t};function defineProperties(t,e){for(var o=0;o<e.length;o++){var a=e[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var n,r,i=o(6),F=o(0),u=function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}(F),l=o(8),s=o(5);function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}o(147);var c=(function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{"constructor":{"value":t,"enumerable":!1,"writable":!0,"configurable":!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(OrderListsStaff,F.Component),a(OrderListsStaff,[{"key":"_constructor","value":function _constructor(t){(function get(t,e,o){null===t&&(t=Function.prototype);var a=Object.getOwnPropertyDescriptor(t,e);if(void 0===a){var n=Object.getPrototypeOf(t);return null===n?void 0:get(n,e,o)}if("value"in a)return a.value;var r=a.get;return void 0!==r?r.call(o):void 0})(OrderListsStaff.prototype.__proto__||Object.getPrototypeOf(OrderListsStaff.prototype),"_constructor",this).call(this,t),this.state={"current":0,"pageNo":1,"pageSize":5,"hasNextPage":!0,"lists":[],"showAction":!1,"id":"","showPriceModal":!1,"itemPrice":0,"currentItem":null,"countDownPay":120,"showCountDown":!1},this.$$refs=new u.default.RefsArray}},{"key":"componentDidShow","value":function componentDidShow(){this.$router.params.from&&"pay"===this.$router.params.from?this.refreshPageData(1):this.getLists()}},{"key":"onPullDownRefresh","value":function onPullDownRefresh(){this.refreshPageData()}},{"key":"onReachBottom","value":function onReachBottom(){this.getLists()}},{"key":"_createData","value":function _createData(t,e,o){var s=this;this.__state=t||this.state||{},this.__props=e||this.props||{};var c=this.$prefix,a=(0,F.genCompid)(c+"$compid__87"),n=x(a,2),r=n[0],i=n[1],u=(0,F.genCompid)(c+"$compid__88"),l=x(u,2),d=l[0],p=l[1],f=(0,F.genCompid)(c+"$compid__89"),h=x(f,2),m=h[0],g=h[1],_=(0,F.genCompid)(c+"$compid__90"),y=x(_,2),P=y[0],v=y[1],w=(0,F.genCompid)(c+"$compid__91"),S=x(w,2),I=S[0],b=S[1],$=(0,F.genCompid)(c+"$compid__92"),C=x($,2),O=C[0],M=C[1],A=(0,F.genCompid)(c+"$compid__93"),D=x(A,2),N=D[0],T=D[1],k=[{"title":"抢单"},{"title":"待服务"},{"title":"已完成"}];this.anonymousFunc1=function(){return s.waitPay("user")},this.anonymousFunc2=function(){return s.waitPay("qr-code")};var L=0<this.__state.lists.length?this.__state.lists.map(function(t,e){t={"$original":(0,F.internal_get_original)(t)};var o="gezzz"+e;s.anonymousFunc0Map[o]=function(){return s.callPhone(t.$original.userPhone)};var a=(0,F.genCompid)(c+"gfzzzzzzzz"+e,!0),n=x(a,2),r=n[0],i=n[1];return F.propsManager.set({"current":s.__state.current,"item":t.$original,"setPrice":s.togglePriceModal,"setPay":s.setPay,"getGrag":s.getGrag},i,r),{"_$indexKey":o,"$compid__86":i,"$original":t.$original}}):[];return F.propsManager.set({"className":"fix-header","current":this.__state.current,"tabList":k,"onClick":this.handleClick},i,r),F.propsManager.set({"isOpened":this.__state.showAction,"cancelText":"取消","title":"请选择收款方式"},p,d),F.propsManager.set({"onClick":this.anonymousFunc1},g,m),F.propsManager.set({"onClick":this.anonymousFunc2},v,P),F.propsManager.set({"className":"price-modal","isOpened":this.__state.showPriceModal},b,I),F.propsManager.set({"className":"price-input","title":"服务费：","name":"itemPrice","border":!1,"type":"number","placeholder":"请填写服务人工费","value":this.__state.itemPrice,"onChange":this.handleItemPriceChange},M,O),this.__state.showCountDown&&F.propsManager.set({"value":"loading-3","size":"30","color":"#02BB00"},T,N),Object.assign(this.__state,{"anonymousState__temp":k,"loopArray61":L,"$compid__87":i,"$compid__88":p,"$compid__89":g,"$compid__90":v,"$compid__91":b,"$compid__92":M,"$compid__93":T}),this.__state}},{"key":"anonymousFunc0","value":function anonymousFunc0(t){for(var e,o=arguments.length,a=Array(1<o?o-1:0),n=1;n<o;n++)a[n-1]=arguments[n];return this.anonymousFunc0Map[t]&&(e=this.anonymousFunc0Map)[t].apply(e,a)}},{"key":"anonymousFunc1","value":function anonymousFunc1(){}},{"key":"anonymousFunc2","value":function anonymousFunc2(){}}]),r=n=OrderListsStaff,n.$$events=["anonymousFunc0","togglePriceModal","setPrice"],n.$$componentPath="pages/mall/order-lists-staff",r);function OrderListsStaff(){var t,e,c;!function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,OrderListsStaff);for(var o=arguments.length,a=Array(o),n=0;n<o;n++)a[n]=arguments[n];return(e=c=_possibleConstructorReturn(this,(t=OrderListsStaff.__proto__||Object.getPrototypeOf(OrderListsStaff)).call.apply(t,[this].concat(a)))).$usedState=["anonymousState__temp","loopArray61","$compid__87","$compid__88","$compid__89","$compid__90","$compid__91","$compid__92","$compid__93","current","pageNo","pageSize","hasNextPage","lists","showAction","id","showPriceModal","itemPrice","currentItem","countDownPay","showCountDown","appStore"],c.config={"navigationBarTitleText":"预约订单","navigationStyle":"default"},c.refreshPageData=function(t){c.setState({"current":t||0,"pageNo":1,"pageSize":5,"lists":[],"hasNextPage":!0,"showPriceModal":!1,"showAction":!1,"itemPrice":0,"currentItem":null,"countDownPay":120,"showCountDown":!1},function(){c.getLists()})},c.getGrag=function(t){var e={"orderId":t,"serviceUserId":u.default.getStorageSync("masterInfo").masterId};(0,l.grabOrder)(e).then(function(t){0===t.data.code?u.default.showToast({"title":"抢单成功"}).then(function(){return setTimeout(function(){c.refreshPageData(0)},1e3)}):u.default.showToast({"title":"抢单失败："+t.data.msg,"icon":"none"})})},c.getLists=function(){var t=c.state,e=t.current,o=t.pageNo,a=t.pageSize,n=t.hasNextPage,r=u.default.getStorageSync("masterInfo"),i={};switch(e){case 0:i={"searchType":"VYING","repairStationId":r.repairStationId};break;case 1:i={"searchType":"STAY_SERVICE","serviceUserId":r.masterId,"repairStationId":r.repairStationId};break;case 2:i={"serviceUserId":r.masterId,"repairStationId":r.repairStationId,"searchType":"FINISH"}}var s={"pageNo":o,"pageSize":a,"userId":u.default.getStorageSync("userId")};n?(u.default.showNavigationBarLoading(),u.default.showLoading({"title":"加载中"}),(0,l.customOrderLists)(s,i).then(function(t){if(u.default.hideLoading(),u.default.hideNavigationBarLoading(),u.default.stopPullDownRefresh(),0===t.data.code){var e=t.data.data;c.setState(function(t){return{"hasNextPage":e.hasNextPage,"pageNo":e.hasNextPage?e.nextPage:e.pageNo,"lists":t.lists.concat(e.list)}})}})):u.default.showToast({"title":"没有更多了","icon":"none"})},c.handleClick=function(t){c.setState({"current":t,"pageNo":1,"hasNextPage":!0,"lists":[]},function(){c.getLists()})},c.setPay=function(t){c.setState({"id":t.id,"showAction":!0,"controlOrder":t})},c.getPayResult=function(){var t=c.state.controlOrder.id;(0,l.searchPayRes)(t).then(function(t){0===t.data.code&&(c.setState({"payRes":t.data.data}),"Y"===t.data.data&&u.default.showToast({"title":"收款成功"}).then(function(){return setTimeout(function(){var t=c.state.payTimer;clearInterval(t),c.refreshPageData(1)},1e3)}))})},c.waitPay=function(t){c.setState({"showAction":!1},function(){"user"===t?c.setState({"showCountDown":!0,"countDownPay":120},function(){var o=setInterval(function(){var t=c.state.countDownPay;if(--t%3==0&&c.getPayResult(),t<=0)c.setState({"payTimer":null,"showCountDown":!1}),clearInterval(c.state.payTimer);else{var e={"countDownPay":t};c.state.payTimer||(e.payTimer=o),c.setState(e)}},1e3)}):"qr-code"===t&&(c.props.appStore.setBookItem(c.state.controlOrder),u.default.navigateTo({"url":"/pages/staff-order/pay?type=book&id="+c.state.id}))})},c.handleItemPriceChange=function(t){c.setState({"itemPrice":t})},c.togglePriceModal=function(e){c.setState(function(t){return{"currentItem":e||null,"showPriceModal":!t.showPriceModal,"itemPrice":t.showPriceModal?0:t.itemPrice}})},c.setPrice=function(){var t={"orderId":c.state.currentItem.id,"serviceUserId":u.default.getStorageSync("masterInfo").masterId,"serviceAmount":c.state.itemPrice};u.default.showLoading({"title":"处理中"}),(0,l.setPriceNow)(t).then(function(t){u.default.hideLoading(),0===t.data.code?(u.default.showToast({"title":"设置成功"}),c.refreshPageData(1)):u.default.showToast({"title":t.data.msg,"icon":"none"})})},c.callPhone=function(t){u.default.makePhoneCall({"phoneNumber":t})},c.anonymousFunc0Map={},c.customComponents=["AtTabs","FootBtn","AtActionSheet","AtActionSheetItem","AtModal","AtModalHeader","AtModalContent","AtInput","AtModalAction","AtIcon"],_possibleConstructorReturn(c,e)}c=(0,i.__decorate)([(0,s.inject)("appStore"),s.observer],c),e.default=c,Component(o(0).default.createComponent(c,!0))},"85":function(t,e,o){"use strict";o.r(e);var a=o(28),n=o.n(a);for(var r in a)"default"!==r&&function(t){o.d(e,t,function(){return a[t]})}(r);e.default=n.a}},[[227,0,1,2]]]);