const log = require("util").log;

var startTime = +new Date();

var t1 = setInterval(function() {
	log(+new Date());
	var elapsed = +new Date() - startTime;
	if (elapsed > 2000) {
		log("t1 clearInterval.");
		clearInterval(t1);
	}
}, 1000);


var t2 = setInterval(function() {
	log(new Date());
}, 2000);


// t2.unref();