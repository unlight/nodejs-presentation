var EventEmitter = require("events").EventEmitter;
var logger = new EventEmitter();
// Listen for error event
// logger.on("error", function(message) {
//   console.log("ERROR: " + message);
// });
logger.emit("error", "Egg cracked");