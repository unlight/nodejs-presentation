process.env.NODE_DEBUG = "module net stream timer";

var charStream = require("./readable2.js");
var consoleStream = require("./duplex2.js");

charStream.pipe(consoleStream).pipe(process.stdout);

