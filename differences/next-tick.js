function log(n) { console.log(n); }


process.nextTick(function() {
  process.nextTick(function() {
    log(1);
    process.nextTick(function() { log(2); });
    process.nextTick(function() { log(3); });
  });
  process.nextTick(function() {
    log(4);
    process.nextTick(function() { log(5); });
    process.nextTick(function() { log(6); });
  });
});

setTimeout(function timeout() {
  console.log('TIMEOUT FIRED');
}, 1)