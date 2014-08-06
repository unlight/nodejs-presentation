var stream = require("stream");
var Readable = require("stream").Readable;
var Writable = require("stream").Writable;


function SourceStream(options) {
	Readable.call(this, options || {});
	this._c = "a".charCodeAt(0);
}

SourceStream.prototype = Object.create(Readable.prototype, {
	constructor: {value: SourceStream}
});

SourceStream.prototype._read = function(size) {
	var letter = String.fromCharCode(this._c++);
	var isEnd = (this._c > "i".charCodeAt(0));
	if (isEnd) {
		this.push(null);
		return;
	}
	var stream = this;
	setTimeout(function() {
		stream.push(letter);
	}, ~~(Math.random() * 100));
};


function TargetStream(options) {
	Writable.call(this, options);
}

TargetStream.prototype = Object.create(Writable.prototype, {
	constructor: {value: TargetStream}
});

TargetStream.prototype._write = function(chunk, encoding, callback) {
	var string = chunk.toString();
	var stream = this;
	setTimeout(function() {
		console.log(string);
		callback();
	}, ~~(Math.random() * 100));
}


function TransformStream() {
	var ts = stream.Transform();
	ts._transform = function(chunk, encoding, callback) {
		var transformed = ("" + chunk + chunk).toUpperCase();
		setTimeout(function() {
			ts.push(transformed);
			callback();
		}, 100);
	}
	return ts;
}

var source = new SourceStream();
var target = new TargetStream();
var upper = new TransformStream();

source.pipe(target);
// source.pipe(upper).pipe(target);
	
	