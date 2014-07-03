var crypto = require('crypto');
var fs = require('fs');
var readStream = fs.createReadStream('data.txt');
var hash = crypto.createHash('md5');
readStream.on('readable', function () {
	var chunk;
	while (null !== (chunk = readStream.read())) {
	  hash.update(chunk);
	}
});
readStream.on('end', function () {
	console.log("hash", hash.digest('hex'));
});