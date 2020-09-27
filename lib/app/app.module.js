"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppModule = void 0;

var _platformBrowser = require("@angular/platform-browser");

var _core = require("@angular/core");

var _appRouting = require("./app-routing.module");

var _app = require("./app.component");

var _dec, _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AppModule = (_dec = (0, _core.NgModule)({
  declarations: [_app.AppComponent],
  imports: [_platformBrowser.BrowserModule, _appRouting.AppRoutingModule],
  providers: [],
  bootstrap: [_app.AppComponent]
}), _dec(_class = function AppModule() {
  _classCallCheck(this, AppModule);
}) || _class);
exports.AppModule = AppModule;