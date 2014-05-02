var http = require('http'),
    ms = require('mediaserver');

http.createServer(function (req, res) {
    ms.pipe(req, res, "music.mp3");
}).listen(1337, '127.0.0.1');

/**
 * from the client side
 * <audio controls>
    <source src="http://127.0.0.1:1337/" type="audio/mpeg">
    Your browser does not support the audio element.
</audio>
 */