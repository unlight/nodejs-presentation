var foo = require("./foo/index.js");
var baz = require("./baz");

require("./foo/index.js");
require("./baz");

console.log('baz === foo', baz === foo);