console.log('main starting');
var a = require('./a.js');
var b = require('./b.js');

b.emit("check", a);