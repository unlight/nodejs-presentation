var fs = require("fs");

fs.readFile('/etc/profile', function (err, data) {
	if (err) throw err;
	console.log(data);
});

fs.readFile('/etc/hosts', function (err, data) {
	if (err) throw err;
	console.log(data);
});
// other javascript code ...