var http = require("http");
var fs = require("fs");

var server = http.createServer(function (req, res) {
    fs.readFile(__dirname + "/data.txt", function (err, data) {
    	if (err) throw err;
    	res.write(data);
        res.end();
    });
});

server.listen(8080, function() {
	console.log("Created server http://localhost:8080");
});