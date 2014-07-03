var charStream = require("./readable2.js");
var consoleStream = require("./writeable2.js");

charStream.pipe(consoleStream);