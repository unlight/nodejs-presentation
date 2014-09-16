var http = require('http'); // How we require modules 
var server = http.createServer(function(request, response) { 
    response.writeHead(200); // Status code in header 
     // Response body 
    response.write(" You requested url: " + request.url);
    response.write(" You requested method: " + request.method);
    response.end(); // Close the connection 
});
server.listen(8080); // Listen for connections on this port
console.log("Listing server... http://127.0.0.1:8080/");
