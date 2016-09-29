var CB = require('cloudboost');
var gzippo = require('gzippo');
var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

CB.CloudApp.init('objilwmlieyf', '5b3b0f7c-7fab-42b8-a297-fd476d98d1fc');
 app.use(express.static(__dirname + "/www"));
 app.use('/bower_components',  express.static(__dirname + '/bower_components'));
 app.use('/node_modules',  express.static(__dirname + '/node_modules'));
 app.get('/', function(req, res) {
    res.sendfile('index.html', {root: __dirname })
});




app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());



  //app.use(gzippo.staticGzip("" + __dirname + "/dist"));
  app.listen(process.env.PORT || 5000);
