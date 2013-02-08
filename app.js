/*###############################################
# 
# App.js
#
###############################################*/

// Load dependencies
var express   = require('express'),
    http      = require('http'),
    path      = require('path'),
    app       = express();

// Config
var config_server = require('./config')(app, express, path);

// Controllers
var controllers = require('./app/controller')(app);

// Connection to database
var db = require('./db');

// Server launch
http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port') + ' in ' + app.get('env') + ' mode.');
});