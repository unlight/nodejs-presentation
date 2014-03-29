```javascript
"use strict";
const fs = require('fs');

fs.watch('target.txt', function() {
	console.log("File 'target.txt' just changed!");
});
console.log("Now watching target.txt for changes...");

// SyntaxError
// fs = "x";
// var fs; 
```

```javascript
const path = require("path");
const events = require("events");
```