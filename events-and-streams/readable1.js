var Stream = require("stream");
var stream = new Stream;
stream.readable = true;

var c = "a".charCodeAt(0);
var iv = setInterval(function () {
	stream.emit("data", String.fromCharCode(c));
	if (++c > "k".charCodeAt(0)) {
		clearInterval(iv);
		stream.emit("end");
	}
}, 100);

stream.pipe(process.stdout);
