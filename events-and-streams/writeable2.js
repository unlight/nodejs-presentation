var Writable = require("stream").Writable;

function GreenStream(options) {
	Writable.call(this, options);
	this.items = [];
}

GreenStream.prototype = Object.create(Writable.prototype)
GreenStream.prototype.constructor = GreenStream;

GreenStream.prototype._read = function(size) {
	var data = this.items.slice(0, size);
	this.push(data.join(""));
}

GreenStream.prototype._write = function(chunk, encoding, callback) {
	var item = chunk.toString();
	this.items.push(item);
	callback();
}

module.exports = new GreenStream();