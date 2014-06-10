var EventEmitter = require("events").EventEmitter;

var logger = new EventEmitter();

// Listen for error event
logger.on("error", function(message) {
   console.log("ERR: " + message);
});
// addListener() is alias
// once - adds a one time listener for the event.

logger.emit("error", "Egg cracked");
// ERR: Egg cracked