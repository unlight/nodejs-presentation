var fs = require('fs');
fs.readFile('test.txt', function(err, data) {
	if (err) throw err;
	console.log('Read file: ', data);
});

console.log('Reading file ...');
