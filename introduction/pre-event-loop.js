var fs = require("fs");
fs.open("./data.txt", "r", function(err, fd) {
	if (err) throw err;
});

// var s = Date.now();
// while (Date.now() - s < 4000);