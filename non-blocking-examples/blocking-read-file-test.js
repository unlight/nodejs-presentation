var fs = require('fs');
console.log('Reading file ...');
var data = fs.readFileSync('test.txt');
console.log('Read file: ', data);