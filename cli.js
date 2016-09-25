#!/usr/bin/env node
'use strict';
var iapps = require('./')

iapps(function (err, stderr, stdout) {
	if (!err && !stderr) {
		console.log(stdout)
	}
});
