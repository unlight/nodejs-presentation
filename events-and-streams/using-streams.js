http.createServer(function(request, response) { 
	var file = fs.createReadStream(__dirname + "/data.txt");
	file.on("data", function(chunk) {
		response.write(chunk);
	});
	file.on("end", function() {
		response.end();
	});
});