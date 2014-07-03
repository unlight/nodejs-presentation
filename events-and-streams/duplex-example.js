process.env.NODE_DEBUG = "module net stream timer";

var charStream = require("./readable2.js");
var consoleStream = require("./duplex2.js");

// console.log(charStream.read());

// consoleStream.write("");
// charStream.resume();

// charStream.pipe(consoleStream).pipe(process.stdout);

// charStream.pipe(process.stdout);


process.stdin.pipe(process.stdout);
// consoleStream.resume();

// charStream.resume();

// var oldEm = consoleStream.emit;
// consoleStream.emit = function(name) {
// 	console.log(name);
// 	return oldEm.call(this, name);
// };

// consoleStream.on("finish", function() {
// 	consoleStream.pipe(process.stdout);
// });