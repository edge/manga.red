"use strict";var _interopRequireDefault=function(e){return e&&e.__esModule?e:{"default":e}};Object.defineProperty(exports,"__esModule",{value:!0});var _React=require("react"),_React2=_interopRequireDefault(_React),PureRenderMixin=_React2["default"].addons.PureRenderMixin;exports["default"]=_React2["default"].createClass({displayName:"progress",mixins:[PureRenderMixin],render:function(){var e=""+(this.props.loading?"indeterminate":"determinate")+" teal lighten-4";return _React2["default"].createElement("div",{className:"progress teal"},_React2["default"].createElement("div",{className:e}))}}),module.exports=exports["default"];