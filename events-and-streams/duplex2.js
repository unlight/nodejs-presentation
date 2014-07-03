var Duplex = require("stream").Duplex;

function GreenStream(options) {
	Duplex.call(this, options);
	this.items = [];
}

GreenStream.prototype = Object.create(Duplex.prototype)
GreenStream.prototype.constructor = GreenStream;

GreenStream.prototype._read = function(size) {
	var self = this;
	console.log("size", size);
	setTimeout(function() {
		console.log("self.items length in setTimeout", self.items.length);
		if (self.items.length === 0) {
			//console.log("self.items is empty");
			//var pr = self.push("_");
			//console.log("push result 0", pr);
		} else {
			var v = self.items.shift();
			console.log("pushing v", v);
			var pr = self.push(v);
			console.log("push result 2", pr);
		}
		// var v = self.items.shift();
		// self.push(v);
	}, ~~(Math.random() * 100));
}

GreenStream.prototype._write = function(chunk, encoding, callback) {
	var item = chunk.toString();
	console.log("GreenStream.prototype._write", item);
	var self = this;
	setTimeout(function() {
		self.items.push(item);
		// console.log(item);
		// self.emit("readable");
		callback();
	}, ~~(Math.random() * 100));
}

module.exports = new GreenStream({objectMode: true, highWaterMark: 1});