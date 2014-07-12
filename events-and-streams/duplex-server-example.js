var Duplex = require("stream").Duplex || require("readable-stream/duplex");
var inherits = require("util").inherits;
var colors = require("colors");

function Server(options) {
	Duplex.call(this, options)
	this.records = []
}
//inherits(Server, Duplex);
Server.prototype = Object.create(Duplex.prototype, { 
	value: { constructor: Server }
});

Server.prototype._read = function (size) {
	var value = this.records.shift();
	this.push(value);
}

Server.prototype._write = function (chunk, encoding, callback) {
	var newChunk = (chunk + "\n").toUpperCase();
	var records = this.records;
	records[records.length] = newChunk.green;
	callback();
}

var s = new Server({objectMode: true});

s.write("Hello");
s.write("World!");

s.pipe(process.stdout);
