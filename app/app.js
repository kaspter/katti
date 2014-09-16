
/**
 * Module dependencies
 */

var express = require('express'),
  routes = require('./routes'), //GET
  api = require('./routes/api'), //POST
  http = require('http'),
  https = require('https'),
  fs = require("fs"),
  path = require('path'),
  gzippo = require('gzippo');

var app = module.exports = express();

var options = {
    key: fs.readFileSync('./cert/key.pem').toString(),
    cert: fs.readFileSync('./cert/cert.pem').toString()
};

/**
* Configuration
*/

// all environments
app.set('port', process.env.PORT || 9090);
app.set(gzippo.staticGzip('views', __dirname + '/views'));
app.set('view engine', 'jade');
app.locals.pretty = true;
app.use(require('static-favicon')('public/img/favicon.ico'));
app.use(require('compression')());
//app.use(express.logger('dev'));
app.use(require('body-parser').urlencoded({
  extended: true
}));
app.use(require('body-parser').json())
app.use(require('cookie-parser')());
app.use(require('cookie-session')({ secret: 'super-duper-secret-secret' , cookie: { maxAge: 60000 }}));
app.use(require('method-override')());
app.use(require('stylus').middleware({ src: __dirname + '/public' }));
app.use(gzippo.staticGzip(__dirname + '/public'));
//app.use(app.router);

// development only
if (app.get('env') === 'development') {
   app.use(require('errorhandler')());
};

// production only
if (app.get('env') === 'production') {
  // TODO
}; 

// Routes
app.get('/', routes.index);
app.get('/partials/:name', routes.partial);
app.get('/resetpassword', routes.resetpassword);
app.get('/class/:id', routes.guest);

// JSON API

app.post('/home',api.home);

// redirect all others to the index (HTML5 history)
app.get('*', routes.index);

/**
* Start Server
*/

http.createServer(app).listen(app.get('port'), function(){
	console.log("Express server listening on port " + app.get('port'));
});

