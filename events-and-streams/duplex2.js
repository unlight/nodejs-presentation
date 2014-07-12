var Duplex = require("stream").Duplex;

var log = function() {
	console.log.apply(console, arguments);
};

function GreenStream(options) {
	Duplex.call(this, options);
	this.items = [];
}

GreenStream.prototype = Object.create(Duplex.prototype)
GreenStream.prototype.constructor = GreenStream;

GreenStream.prototype._read = function readChunk(size) {
	var self = this;
	if (self.items.length === 0) {
		log('self._readableState.ended', self._readableState.ended);
		log('self._writableState.ended', self._writableState.ended);
		log('wait 100 ms');
		// throw 1;
		setTimeout(readChunk.bind(this), 100, size);
		return;
	}
	setTimeout(function() {
		log("self.items length in setTimeout", self.items.length);
		if (self.items.length === 0) {
			log("self.items is empty");
			//var pr = self.push("_");
			//log("push result 0", pr);
		} else {
			var v = self.items.shift();
			log("pushing v", v.length);
			var pr = self.push(v);
			log("push result 2", pr);
			log('self._readableState.ended', self._readableState.ended);
			log('self._writableState.ended', self._writableState.ended);
		}
		// var v = self.items.shift();
		// self.push(v);
	}, ~~(Math.random() * 100));
}

GreenStream.prototype._write = function(chunk, encoding, callback) {
	var item = chunk.toString();
	//log("GreenStream.prototype._write", item.length);
	var self = this;
	setTimeout(function() {
		self.items.push(item);
		// log(item);
		// self.emit("readable");
		callback();
	}, ~~(Math.random() * 100));
}

module.exports = new GreenStream({objectMode: true, highWaterMark: 1});