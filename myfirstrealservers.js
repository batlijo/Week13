const http = require("http");
// Define the port to listen on
// YOU CANNOT LISTEN ON PORT 80
const PORTA = 7000;
const PORTB = 7500;

function responseHandler(request, response){
  // Say hi
  response.end("You're a bad listener");
}
function responseHandler2(request, response){
  // Say hi
  response.end("You're a great listener");
}
const server = http.createServer(responseHandler);
// tell the server to LISTEN
server.listen(PORTA, function() {
  console.log("You're a bad listener")
  console.error(`visit http:..localhost:${PORTA}`);
});

const server2 = http.createServer(responseHandler2);
// tell the server to LISTEN
server2.listen(PORTB, function() {
  console.log("You're a great listener")
  console.error(`visit http:..localhost:${PORTB}`);
});
