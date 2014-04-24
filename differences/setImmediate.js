// http://stackoverflow.com/questions/17502948/nexttick-vs-setimmediate-visual-explanation
var fs = require("fs");

fs.open(__filename, "r", function(err, file) {
  console.log("I/O");
});

function log(n) { console.log(n); }

setImmediate(function() {
  log("start second iteration");
  setImmediate(function() {
    log(1);
    setImmediate(function() { log(2); });
    setImmediate(function() { log(3); });
  });
  setImmediate(function() {
    log(4);
    setImmediate(function() { log(5); });
    setImmediate(function() { log(6); });
  });
});


setTimeout(function timeout() {
  console.log('TIMEOUT FIRED');
}, 0);



// 'TIMEOUT FIRED' 1 4 2 3 5 6
// OR
// 1 'TIMEOUT FIRED' 4 2 3 5 6
// OR
// 1 4 TIMEOUT FIRED 2 3 5 6 