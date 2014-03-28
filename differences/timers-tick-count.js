var start = +Date.now();
var tickCount = 0;

var timer = setInterval(function() {
	tickCount++;
	var now = +Date.now();
	if (now - start > 1000) {
		clearInterval(timer);
		console.log("tickCount %s", tickCount);
	}
}, 1);
