var fs = require("fs");
var file = fs.createReadStream(__dirname + "/data.txt");
file.on("readable", function() {
	var data = file.read(10);
	console.log(data.toString());
});
file.on("end", function() {
	console.log('end()');
});