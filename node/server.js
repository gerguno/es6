var http = require('http');
var url = require('url');
var querystring = require('querystring');
var static = require('node-static');
var file = new static.Server('.', {
  cache: 0
});


function accept(req, res) {
  if (req.url == '/files/user.json') {
    file.serve(req, res);
  } else {
    file.serve(req, res);
  }
}


// ------ запустить сервер -------

if (!module.parent) {
  http.createServer(accept).listen(8080);
} else {
  exports.accept = accept;
}

console.log('Server is running on port 8080');