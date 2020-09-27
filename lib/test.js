"use strict";

require("zone.js/dist/zone-testing");

var _testing = require("@angular/core/testing");

var _testing2 = require("@angular/platform-browser-dynamic/testing");

// This file is required by karma.conf.js and loads recursively all the .spec and framework files
// First, initialize the Angular testing environment.
(0, _testing.getTestBed)().initTestEnvironment(_testing2.BrowserDynamicTestingModule, (0, _testing2.platformBrowserDynamicTesting)()); // Then we find all the tests.

var context = require.context('./', true, /\.spec\.ts$/); // And load the modules.


context.keys().map(context);