"use strict";var _interopRequireDefault=function(e){return e&&e.__esModule?e:{"default":e}};Object.defineProperty(exports,"__esModule",{value:!0});var _React=require("react"),_React2=_interopRequireDefault(_React),_Router$Route$DefaultRoute=require("react-router"),_Router$Route$DefaultRoute2=_interopRequireDefault(_Router$Route$DefaultRoute),_App=require("./app"),_App2=_interopRequireDefault(_App),_Search=require("./views/search"),_Search2=_interopRequireDefault(_Search),_MangaView=require("./views/manga-view"),_MangaView2=_interopRequireDefault(_MangaView),_MangaDetail=require("./views/manga-detail"),_MangaDetail2=_interopRequireDefault(_MangaDetail),_MangaChapter=require("./views/manga-chapter"),_MangaChapter2=_interopRequireDefault(_MangaChapter);exports["default"]=_React2["default"].createElement(_Router$Route$DefaultRoute.Route,{handler:_App2["default"],path:"/"},_React2["default"].createElement(_Router$Route$DefaultRoute.DefaultRoute,{name:"main",handler:_Search2["default"]}),_React2["default"].createElement(_Router$Route$DefaultRoute.Route,{name:"manga",handler:_MangaView2["default"],path:"manga/:alias"},_React2["default"].createElement(_Router$Route$DefaultRoute.DefaultRoute,{name:"detail",handler:_MangaDetail2["default"]}),_React2["default"].createElement(_Router$Route$DefaultRoute.Route,{name:"chapter",handler:_MangaChapter2["default"],path:":chapter"}))),module.exports=exports["default"];