'use strict';
const shell = require('shelljs'),
	  ncp = require("copy-paste")

module.exports = function () {
	if (process.platform === 'darwin') {
		const output = shell.exec("ls /Applications", {silent:true}).output
		ncp.copy(output.replace(/.app/g,''))
	} else {
		throw new Error('Unknown OS!')
	}
}
