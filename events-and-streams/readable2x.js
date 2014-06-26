var Readable = require("stream").Readable;
var stream = new Readable();

var c = "a".charCodeAt(0);
stream._read = function(size) {
	if (++c > "k".charCodeAt(0)) {
		this.push(null);
		return;
	}
	setTimeout((function() {
		this.push(String.fromCharCode(c));
	}).bind(this), 100);
}

stream.pipe(process.stdout);
