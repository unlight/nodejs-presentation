setImmediate(function() {
	console.log("1");
	setImmediate(function() {
		console.log("1.2");
	});
});

process.nextTick(function() {
	console.log("2");
	setImmediate(function() {
		console.log("2.1");
		setImmediate(function() {
			console.log("2.2");
		});
	});
});

var fs = require("fs");

fs.open(__filename, "r", function(err, file) {
  console.log("I/O");
});