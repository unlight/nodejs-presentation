const log = require("util").log;

var startTime = +new Date();

var t1 = setInterval(function() {
	var elapsed = +new Date() - startTime;
	log(elapsed + "ms.");
	if (elapsed > 3000) {
		log("t1 clearInterval.");
		clearInterval(t1);
	}
}, 1000);


var t2 = setInterval(function() {
	log(new Date());
}, 2000);


// t2.unref();