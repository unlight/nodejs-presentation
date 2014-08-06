var Readable = require("stream").Readable;
var stream = new Readable();

var c = "a".charCodeAt(0);

stream._read = function(size) {
	var letter = String.fromCharCode(c++);
	var isEnd = (c > "i".charCodeAt(0));
	if (isEnd) {
		this.push(null);
		return;
	}
	setTimeout(function() {
		stream.push(letter);
	}, ~~(Math.random() * 100));
}

stream.pipe(process.stdout);
