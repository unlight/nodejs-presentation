var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    fs.readFile(__dirname + '/data.txt', function (err, data) {
    	res.write(data);
        res.end();
    });
});
server.listen(8080);

