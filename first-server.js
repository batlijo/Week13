
// Import HTTP module
const http = require("http");
// Define the port to listen on
// YOU CANNOT LISTEN ON PORT 80
const PORT = 8080;

function responseHandler(reques, response){
  // Say hi
  response.end("hi");
}
const server = http.createServer(responseHandler);
// tell the server to LISTEN
server.listen(PORT, function() {
  console.log("I'm listening")
  console.error(`visit http:..localhost:${PORT}`);
});


// on the command line
// enter: node first-server.js
