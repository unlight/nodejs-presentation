const fs = require('fs');
const spawn = require('child_process').spawn;
const filename = process.argv[2];

if (!filename) { 
	throw Error("A file to watch must be specified!");
}

var w = fs.watch(filename, function() { 
	var ls = spawn('ls', ['-alh', filename]);
	ls.stdout.pipe(process.stdout);
});

console.log("Now watching " + filename + " for changes...");
