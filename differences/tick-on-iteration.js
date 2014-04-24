// require("fs").open(__filename, "r", function() {
// 	console.log("I/O");
// });

setImmediate(function(hrtime) {
  	var diff = process.hrtime(hrtime);
	console.log("Iteration took", ((diff[0] * 1e9 + diff[1]) / 1e6) + " ms");
}, process.hrtime());