var fs = require("fs");
var file = fs.createReadStream(__dirname + "/data.txt");
file.on("readable", function() {
	var data = file.read(2);
	if (data !== null) {
		console.log(data.toString());
	}
});
file.on("end", function() {
	console.log('end.');
});