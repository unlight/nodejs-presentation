var fs = require("fs");

var readStream = fs.createReadStream('data.txt');
var consoleStream = require("./duplex2.js");

readStream.pipe(consoleStream).pipe(process.stdout);