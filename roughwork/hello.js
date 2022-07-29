var http = require('http');

http.createServer(function (req, res) {
 // res.writeHead(200, {'Content-Type': 'text/html'});
  res.render("webpages/homepage");
   // res.end('Hello World!');
}).listen(8080);