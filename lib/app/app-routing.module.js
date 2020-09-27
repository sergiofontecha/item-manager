"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppRoutingModule = void 0;

var _core = require("@angular/core");

var _router = require("@angular/router");

var _dec, _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var routes = [];
var AppRoutingModule = (_dec = (0, _core.NgModule)({
  imports: [_router.RouterModule.forRoot(routes)],
  exports: [_router.RouterModule]
}), _dec(_class = function AppRoutingModule() {
  _classCallCheck(this, AppRoutingModule);
}) || _class);
exports.AppRoutingModule = AppRoutingModule;