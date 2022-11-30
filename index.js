const http = require('http');
const server = http.createServer( (request, response) => {
    if (request.url === '/about') response.end('The about page');
    else if (request.url === '/contact') response.end('The contact page');
    else if (request.url === '/') response.end('The home page');
    else {
        response.writeHead(404);
        response.end('page not found')
    } 
})

server.listen(3000);