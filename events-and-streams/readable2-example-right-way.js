var Readable = require("stream").Readable;

var c = "a".charCodeAt(0);

function Source(options) {
	Readable.call(this, options || {});
}

Source.prototype = Object.create(Readable.prototype);
Source.prototype.constructor = Source;

Source.prototype._read = function(size) {
	var letter = String.fromCharCode(c++);
	var isEnd = (c > "i".charCodeAt(0));
	if (isEnd) {
		this.push(null);
		return;
	}
	var stream = this;
	setTimeout(function() {
		stream.push(letter);
	}, ~~(Math.random() * 100));
};

var source = new Source();
source.pipe(process.stdout);
