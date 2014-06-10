var fs = require("fs");

setImmediate(function() {
	console.log("Immediate after I/O events");
	// setImmediate(function() {
	// 	console.log("Immediate after I/O events tick #2");
	// });
});

fs.open(__filename, "r", function(err, file) {
	console.log("I/O");
});

process.nextTick(function() {
	console.log("nextTick");
});

setTimeout(function() {
	console.log("Timeout");
}, 0);


































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