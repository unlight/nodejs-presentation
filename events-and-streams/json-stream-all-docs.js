var request = require("request");
var JSONStream = require("JSONStream");
var es = require("event-stream");

var logger = es.map(function (data, callback) {  //create a stream that logs to stderr,
	console.log(data);
	callback(null, data)
});

request({url: "http://isaacs.couchone.com/registry/_all_docs"})
	.pipe(JSONStream.parse("rows.*"))
	.pipe(logger);