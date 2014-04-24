var fs = require("fs");

console.log("Begin");

fs.open(__filename, "r", function(err, file) {
	console.log("I/O");
});

setImmediate(function() {
	console.log("Immediate after I/O events");
});

process.nextTick(function() {
	console.log("nextTick");
});

// setTimeout(function() {
// 	console.log("Timeout");
// }, 0);


































// WIN
// nextTick
// Immediate after I/O events
// I/O
// ON LINUX
// Begin
// nextTick
// Timeout
// I/O
// Immediate after I/O events