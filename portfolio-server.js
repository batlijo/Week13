//load http module
const http = require("http");
//Application PORT
const PORT = 8080;
function displayRoot(path, request, response) {
  const html = `
  <html>
    <body>
      <h2> My Portfolio </h2>
        <a href='/portfolio'>Portfolio</a>
    </body>
  <html>
  `;
  response.writeHead(200, {"Content-Type": "text/html"});
  response.end(html);
}
  const old =
//handle incoming requests
function handleRequest(request, response) {
  const path = request.url;

  switch (path) {
    case '/':
      response.end(`You're at root`);
    case '/portfolio':
      displayPortfolio(path, request, response);

    default:
      response.end(`404`);
  }
}
const server = http.createServer(handleRequest);
server.listen(PORT, function( {
  console.log(`Yes I am listening`);
  console.log(`Visit me at http://localhost:${PORT}`);
});
