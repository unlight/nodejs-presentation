var Readable = require("stream").Readable;
var stream = new Readable();

var c = "a".charCodeAt(0);
var isEnd = false;

stream._read = function(size) {
	var timer = (function() {
		if (isEnd) {
			this.push();
			return;
		}
		var ch = String.fromCharCode(c++);
		this.push(ch);
		isEnd = (c > "f".charCodeAt(0));
	}).bind(this);

	setTimeout(timer, ~~(Math.random() * 100));
}

module.exports = stream;