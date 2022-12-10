/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ntttest/hasan-ui/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
