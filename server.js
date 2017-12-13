const http = require(`http`);
const fs = require(`fs`); //file system
const PORT = 1313;

function sendPage(fileName, responseCode, response){
  fs.readFile("home.html", function(err,data) {
    if (err) {
      throw err;
    }

    response.writeHead(responseCode, {
      "Content-Type": 'text/html'
    });
    response.end(data);
  });

}

function handleResponse(request, response) {
  const path = request.url;
  switch (path){
    case '/':
      response.end(`Home, movies, frameworks, food`);
      break;
    case '/home':
      sendPage("home.html",200,path, request, response);
      break;
    case '/movies':
        sendPage("movies.html",200,path, request, response);
        break;
    case '/frameworks':
        sendPage("frameworks.html",path, request, response);
        break;
    case '/food':
        sendPage("food.html",path, request, response);
        break;
    default:
      response.end(`404`);
  }
}

const server = http.createServer(handleResponse);

server.listen(PORT, function() {
  console.log(`listening on http://localhost:${PORT}`);
});
