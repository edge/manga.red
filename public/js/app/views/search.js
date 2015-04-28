"use strict";var _interopRequireDefault=function(e){return e&&e.__esModule?e:{"default":e}};Object.defineProperty(exports,"__esModule",{value:!0});var _React=require("react"),_React2=_interopRequireDefault(_React),_Symbiosis=require("../mixins/symbiosis-mixin"),_Symbiosis2=_interopRequireDefault(_Symbiosis),_MangaUIActions=require("../actions/manga-ui-actions"),_MangaUIActions2=_interopRequireDefault(_MangaUIActions),_MangaIndexStore=require("../stores/manga-index-store"),_MangaIndexStore2=_interopRequireDefault(_MangaIndexStore),_MangaCard=require("../views/manga-card"),_MangaCard2=_interopRequireDefault(_MangaCard),_Progress=require("../views/progress"),_Progress2=_interopRequireDefault(_Progress);exports["default"]=_React2["default"].createClass({displayName:"search",mixins:[_Symbiosis2["default"](_MangaIndexStore2["default"])],renderManga:function(){return(this.state.results.length?this.state.results:this.state.sorted).slice(0,20).map(function(e){return _React2["default"].createElement(_MangaCard2["default"],{key:e.i,manga:e})})},search:function(){_MangaUIActions2["default"].search(this.state.fuzzy,this.refs.search.getDOMNode().value)},render:function(){return _React2["default"].createElement("div",null,_React2["default"].createElement(_Progress2["default"],{loading:this.state.loading}),_React2["default"].createElement("div",{className:"input-field teal-text text-lighten-4"},_React2["default"].createElement("input",{type:"text",ref:"search",onChange:this.search}),_React2["default"].createElement("label",null,"Search titles")),_React2["default"].createElement("h2",{className:"grey-text text-darken-3"},this.state.results.length?this.state.results.length:this.state.sorted.length," titles"),_React2["default"].createElement("div",{className:"row"},this.renderManga()))}}),module.exports=exports["default"];