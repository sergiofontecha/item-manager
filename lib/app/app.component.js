"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppComponent = void 0;

var _core = require("@angular/core");

var _dec, _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var AppComponent = (_dec = (0, _core.Component)({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
}), _dec(_class = (_temp = function AppComponent() {
  _classCallCheck(this, AppComponent);

  _defineProperty(this, "title", 'item-manager-app');
}, _temp)) || _class);
exports.AppComponent = AppComponent;