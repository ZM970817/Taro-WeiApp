(wx.webpackJsonp=wx.webpackJsonp||[]).push([[29],{"143":function(t,n,e){t.exports=e.p+"pages/custom-order/detail.wxml"},"222":function(t,n,e){"use strict";e.r(n);e(223);var o=e(82);for(var a in o)"default"!==a&&function(t){e.d(n,t,function(){return o[t]})}(a)},"223":function(t,n,e){"use strict";e(143)},"224":function(t,n,e){},"29":function(t,n,u){"use strict";Object.defineProperty(n,"__esModule",{"value":!0});var k=function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function sliceIterator(t,n){var e=[],o=!0,a=!1,i=void 0;try{for(var r,s=t[Symbol.iterator]();!(o=(r=s.next()).done)&&(e.push(r.value),!n||e.length!==n);o=!0);}catch(t){a=!0,i=t}finally{try{!o&&s.return&&s.return()}finally{if(a)throw i}}return e}(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},e=function(t,n,e){return n&&defineProperties(t.prototype,n),e&&defineProperties(t,e),t};function defineProperties(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var o,a,L=u(0),s=function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}(L),c=u(142),m=u(66),l=u(7);function _possibleConstructorReturn(t,n){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?t:n}u(224);var i=(function _inherits(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);t.prototype=Object.create(n&&n.prototype,{"constructor":{"value":t,"enumerable":!1,"writable":!0,"configurable":!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(t,n):t.__proto__=n)}(Lists,L.Component),e(Lists,[{"key":"_constructor","value":function _constructor(){(function get(t,n,e){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var a=Object.getPrototypeOf(t);return null===a?void 0:get(a,n,e)}if("value"in o)return o.value;var i=o.get;return void 0!==i?i.call(e):void 0})(Lists.prototype.__proto__||Object.getPrototypeOf(Lists.prototype),"_constructor",this).call(this),this.state={"id":"","cancelReasonId":"","orderDetail":{},"cancelReasonLists":[],"reasonModal":!1,"baseInfo":{"orderState":"ASSIGNED"},"repairOrderOfferPlanVoList":[],"dispatchInfo":null,"repairOrderAmountVos":[],"waitPay":0,"payed":0,"commentInfo":{},"currentComment":0,"commentNowModal":!1,"commentOptions":[],"commentActiveTags":[],"commentDetail":[],"commentDetailModal":!1},this.$$refs=new s.default.RefsArray}},{"key":"componentWillMount","value":function componentWillMount(){var t=this,n=this.$router.params.id;this.setState({"id":n},function(){t.getOrderDetail(),t.getCancelReason(),t.getCommentLists()})}},{"key":"_createData","value":function _createData(t,n,e){var c=this;this.__state=t||this.state||{},this.__props=n||this.props||{};var u=this.$prefix,o=(0,L.genCompid)(u+"$compid__94"),a=k(o,2),i=a[0],r=a[1],s=(0,L.genCompid)(u+"$compid__95"),m=k(s,2),l=m[0],d=m[1],f=(0,L.genCompid)(u+"$compid__96"),p=k(f,2),_=p[0],y=p[1],h=(0,L.genCompid)(u+"$compid__97"),g=k(h,2),v=g[0],C=g[1],O=(0,L.genCompid)(u+"$compid__98"),$=k(O,2),b=$[0],A=$[1],S=(0,L.genCompid)(u+"$compid__99"),F=k(S,2),M=F[0],z=F[1],I=[];this.__state.cancelReasonLists.forEach(function(t){if("Y"===t.isValid){var n={"label":t.reasonName,"value":t.id};I.push(n)}});var P=this._createFootData(u+"hdzzzzzzzz")();this.anonymousFunc0=function(){return c.call(c.__state.dispatchInfo.masterPhone)};var w=this.__state.commentOptions.map(function(t){return{"title":t.name}}),T=this.__state.commentDetail.map(function(t){return{"title":t.name}});this.anonymousFunc1=function(){return console.log("111")},this.anonymousFunc2=function(){return c.setState({"commentDetailModal":!1})};var R=this.__state.commentOptions.map(function(t,s){var n=(t={"$original":(0,L.internal_get_original)(t)}).$original.children.map(function(t,n){t={"$original":(0,L.internal_get_original)(t)};var e=-1<c.__state.commentActiveTags.indexOf(t.$original.id),o=(0,L.genCompid)(u+"hezzzzzzzz"+s+"-"+n,!0),a=k(o,2),i=a[0],r=a[1];return L.propsManager.set({"className":"tag-item","name":t.$original.id,"active":e,"type":"primary","onClick":c.clickCommentTag},r,i),{"$loopState__temp4":e,"$compid__90":r,"$original":t.$original}}),e=(0,L.genCompid)(u+"hfzzzzzzzz"+s,!0),o=k(e,2),a=o[0],i=o[1];return L.propsManager.set({"className":"comment-pane","current":c.__state.currentComment,"index":s},i,a),{"$anonymousCallee__8":n,"$compid__91":i,"$original":t.$original}}),D=this.__state.commentDetail.map(function(t,r){var n=(t={"$original":(0,L.internal_get_original)(t)}).$original.children.map(function(t,n){t={"$original":(0,L.internal_get_original)(t)};var e=(0,L.genCompid)(u+"hgzzzzzzzz"+r+"-"+n,!0),o=k(e,2),a=o[0],i=o[1];return L.propsManager.set({"className":"tag-item","name":t.$original.id,"active":!0,"type":"primary"},i,a),{"$compid__92":i,"$original":t.$original}}),e=(0,L.genCompid)(u+"hhzzzzzzzz"+r,!0),o=k(e,2),a=o[0],i=o[1];return L.propsManager.set({"className":"comment-pane","current":c.__state.currentComment,"index":r},i,a),{"$anonymousCallee__9":n,"$compid__93":i,"$original":t.$original}});return L.propsManager.set({"isOpened":this.__state.reasonModal},r,i),L.propsManager.set({"options":I,"value":this.__state.cancelReasonId,"onClick":this.handleRadioChange},d,l),L.propsManager.set({"className":"comment-modal","isOpened":this.__state.commentNowModal},y,_),L.propsManager.set({"animated":!1,"current":this.__state.currentComment,"tabList":w,"onClick":this.handleCommentTab.bind(this)},C,v),L.propsManager.set({"isOpened":this.__state.commentDetailModal},A,b),L.propsManager.set({"animated":!1,"current":0,"tabList":T,"onClick":this.anonymousFunc1},z,M),Object.assign(this.__state,{"anonymousState__temp2":w,"anonymousState__temp5":T,"loopArray68":R,"loopArray69":D,"$compid__94":r,"$compid__95":d,"$compid__96":y,"$compid__97":C,"$compid__98":A,"$compid__99":z,"anonymousState__temp":P}),this.__state}},{"key":"_createFootData","value":function _createFootData(){var c=this;return function(){var t,n,e=c.state,o=e.dispatchInfo,a=e.waitPay,i=e.payed,r=e.baseInfo,s=e.commentInfo;if("STAY_PAY"===r.orderState)t=u(83),c.anonymousFunc3=function(){return c.call(r.stationPhone)},n=u(144),c.anonymousFunc4=function(){return c.call(o.masterPhone)};else if("ASSIGNED"===r.orderState)c.anonymousFunc5=function(){return c.call(r.stationPhone)};else if("WAIT_DOOR"===r.orderState)c.anonymousFunc6=function(){return c.call(o.masterPhone)};else{if("CANCEL"===r.orderState)return null;"FINISH"===r.orderState&&(c.anonymousFunc7=function(){return c.setState({"commentNowModal":!0})},c.anonymousFunc8=function(){return c.setState({"commentDetailModal":!0})})}return{"_$anonymousState__temp":t,"_$anonymousState__temp2":n,"waitPay":a,"baseInfo":r,"payed":i,"commentInfo":s}}}},{"key":"anonymousFunc0","value":function anonymousFunc0(){}},{"key":"anonymousFunc1","value":function anonymousFunc1(){}},{"key":"anonymousFunc2","value":function anonymousFunc2(){}},{"key":"anonymousFunc3","value":function anonymousFunc3(){}},{"key":"anonymousFunc4","value":function anonymousFunc4(){}},{"key":"anonymousFunc5","value":function anonymousFunc5(){}},{"key":"anonymousFunc6","value":function anonymousFunc6(){}},{"key":"anonymousFunc7","value":function anonymousFunc7(){}},{"key":"anonymousFunc8","value":function anonymousFunc8(){}}]),a=o=Lists,o.$$events=["anonymousFunc0","handleCancelModal","handleConfirmModal","cancelComment","confirmComment","anonymousFunc2","anonymousFunc3","anonymousFunc4","startPay","handleCancelModal","anonymousFunc5","anonymousFunc6","anonymousFunc7","anonymousFunc8"],o.$$componentPath="pages/custom-order/detail",a);function Lists(){var t,n,i;!function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,Lists);for(var e=arguments.length,o=Array(e),a=0;a<e;a++)o[a]=arguments[a];return(n=i=_possibleConstructorReturn(this,(t=Lists.__proto__||Object.getPrototypeOf(Lists)).call.apply(t,[this].concat(o)))).$usedState=["anonymousState__temp2","anonymousState__temp5","loopArray68","loopArray69","$compid__94","$compid__95","$compid__96","$compid__97","$compid__98","$compid__99","anonymousState__temp","id","cancelReasonId","orderDetail","cancelReasonLists","reasonModal","baseInfo","repairOrderOfferPlanVoList","dispatchInfo","repairOrderAmountVos","waitPay","payed","commentInfo","currentComment","commentNowModal","commentOptions","commentActiveTags","commentDetail","commentDetailModal"],i.config={"navigationBarTitleText":"报修详情","navigationStyle":"default"},i.getCommentLists=function(){(0,c.getCommentOption)().then(function(t){0===t.data.code&&i.setState({"commentOptions":t.data.data})})},i.getOrderDetail=function(){var t=i.state.id;(0,c.getDetail)(t).then(function(t){if(0===t.data.code){var n=t.data.data,e=0,o=0;n.repairOrderAmountVos.forEach(function(t){"STAY_PAY_AMOUNT"===t.type&&(e=t.amount),"ALREADY_PAY_AMOUNT"===t.type&&(o=t.amount)}),i.setState({"orderDetail":t.data.data,"baseInfo":n.baseInfo,"repairOrderOfferPlanVoList":n.repairOrderOfferPlanVoList,"dispatchInfo":n.dispatchInfo,"repairOrderAmountVos":n.repairOrderAmountVos,"waitPay":e,"payed":o,"commentInfo":n.commentInfo,"commentDetail":n.commentInfo.comment?[n.commentInfo.comment.comment]:[]})}})},i.startPay=function(){var t={"orderIds":[i.state.baseInfo.id],"payBusinessType":"W_REPAIR_ORDER","payCode":"WX_XCX"};(0,m.getWxPay)(t).then(function(t){if(0===t.data.code){var n=t.data.data;console.log("支付信息",n),s.default.requestPayment(r({"success":function success(){i.orderSuccess()},"fail":function fail(){console.log("接口调用失败"),console.log("支付失败")}},n))}else s.default.showToast({"title":t.data.msg,"icon":"none"})})},i.orderSuccess=function(){s.default.showModal({"content":"订单支付成功，可在【我的】-【报修订单】中查看","confirmText":"查看订单","cancelText":"回到首页","success":function success(t){t.confirm?s.default.reLaunch({"url":"/pages/mine/mine"}):s.default.reLaunch({"url":"/pages/index/index"})}})},i.getCancelReason=function(){(0,c.cancelReason)().then(function(t){if(0===t.data.code){var n=t.data.data;i.setState({"cancelReasonLists":n})}})},i.handleRadioChange=function(t){i.setState({"cancelReasonId":t})},i.handleCancelModal=function(){i.setState(function(t){return{"reasonModal":!t.reasonModal,"cancelReasonId":""}})},i.handleConfirmModal=function(){var t={"repairOrderId":i.state.id,"cancelReasonId":i.state.cancelReasonId};(0,c.cancelOrder)(t).then(function(t){0===t.data.code?(s.default.showToast({"title":"订单取消成功","icon":"none"}),s.default.navigateBack({"delta":-1})):s.default.showToast({"title":"订单取消失败："+t.data.msg,"icon":"none"})})},i.call=function(t){s.default.makePhoneCall({"phoneNumber":t})},i.clickCommentTag=function(t){var n=JSON.parse(JSON.stringify(i.state.commentActiveTags));n.indexOf(t.name)<=-1?n.push(t.name):n.splice(n.indexOf(t.name),1),i.setState({"commentActiveTags":n})},i.handleCommentTab=function(t){i.setState({"commentActiveTags":[],"currentComment":t})},i.cancelComment=function(){i.setState({"commentNowModal":!1,"commentActiveTags":[]})},i.confirmComment=function(){var t=i.state.id,n=i.state.currentComment,e=(0,l.simpleClone)(i.state.commentOptions[n]),o=i.state.commentActiveTags;e.children=e.children.filter(function(t){return-1<o.indexOf(t.id)});var a=e;(0,c.submitComment)(t,a).then(function(t){0===t.data.code&&(s.default.showToast({"title":"评价成功","icon":"none"}),setTimeout(function(){s.default.navigateBack({"delta":-1})},1500))})},i.customComponents=["AtModal","AtModalHeader","AtModalContent","AtRadio","AtModalAction","AtTabs","AtTabsPane","AtTag"],_possibleConstructorReturn(i,n)}n.default=i,Component(u(0).default.createComponent(i,!0))},"82":function(t,n,e){"use strict";e.r(n);var o=e(29),a=e.n(o);for(var i in o)"default"!==i&&function(t){e.d(n,t,function(){return o[t]})}(i);n.default=a.a}},[[222,0,1,2]]]);