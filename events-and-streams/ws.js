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



var ws = new Stream;
ws.writable = true;
var privateBuf = [];
ws.write = function(buf) {
	privateBuf.push(buf);
}

ws.end = function(buf) {
	if (buf) {
		privateBuf.push(buf);	
	}
}

stream.pipe(ws);
stream.on("end", function() {
	// var result = ws.getPrivateBuf();
	console.log(privateBuf);
});