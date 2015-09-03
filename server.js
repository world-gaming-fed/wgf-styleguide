var express = require('express');

var app = express();

app.use(express.static('dist'));

app.start = function() {
  var port = process.env.PORT || 3000;

  // start the web server
  return app.listen(port, function() {
    console.log('[Web] server listening at: ' + port + ', in: ' + process.env.NODE_ENV);
  });
};

// start the server if `$ node server.js`
if (require.main === module) {
  app.start();
}
