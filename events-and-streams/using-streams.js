var fs = require("fs");
var file = fs.createReadStream(__dirname + "/data.txt");
// file.on("readable", function() {
// 	var data = file.read(2);
// 	console.log(data.toString());
// });
file.on("data", function(chunk) {
	console.log(chunk.toString());
});
file.on("end", function() {
	console.log('end.');
});