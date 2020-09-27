"use strict";

var _testing = require("@angular/core/testing");

var _testing2 = require("@angular/router/testing");

var _app = require("./app.component");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

describe('AppComponent', function () {
  beforeEach( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _testing.TestBed.configureTestingModule({
              imports: [_testing2.RouterTestingModule],
              declarations: [_app.AppComponent]
            }).compileComponents();

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  it('should create the app', function () {
    var fixture = _testing.TestBed.createComponent(_app.AppComponent);

    var app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
  it("should have as title 'item-manager-app'", function () {
    var fixture = _testing.TestBed.createComponent(_app.AppComponent);

    var app = fixture.componentInstance;
    expect(app.title).toEqual('item-manager-app');
  });
  it('should render title', function () {
    var fixture = _testing.TestBed.createComponent(_app.AppComponent);

    fixture.detectChanges();
    var compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('item-manager-app app is running!');
  });
});