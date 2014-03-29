console.log('b starting');
var bem = new (require("events").EventEmitter);
module.exports = bem;

var a = require("./a.js");

bem.on("check", function(aInMain) {
	console.log("aInMain === a in b.js");
	console.log(aInMain === a);
});