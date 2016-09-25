#!/usr/bin/env node
'use strict';
var iapps = require('./index')

iapps(function (err, stderr, stdout) {
	if (!err && !stderr) {
		console.log(stdout)
	}
});
