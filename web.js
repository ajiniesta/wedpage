var gzippo = require('gzippo');
var express = require('express');
var morgan = require('morgan');
var cool = require('cool-ascii-faces');
var pg = require('pg');
var bodyParser  = require("body-parser");
var methodOverride = require("method-override");

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(gzippo.staticGzip("" + __dirname + "/dist"));
app.listen(process.env.PORT || 5000, function () {
  console.log("Node server running....");
});

app.get('/pg', function(request, response) {
  console.log("where is the pg: " + process.env.HEROKU_POSTGRESQL_NAVY_URL);
  console.log("pg? " + pg);
  pg.connect(process.env.HEROKU_POSTGRESQL_NAVY_URL, function(err, client, done) {
    console.log("err: " + err + " - client: " + client + " done: " + done);
    if(client){
        client.query('SELECT * FROM test_table', function(err, result) {
        done();
        if (err){ 
        	console.error(err); response.send("Error " + err); 
        } else { 
        	response.send(result.rows); 
        }
      });
    } else {
      response.send("<h1>No Client</h1>");
    }
  });
});

app.get('/admin', function(request, response){
  response.writeHeader(200, {"Content-Type": "text/html"});  
  response.write('<html><head><title>Administration</title></head><body><h1>Administration</h1></body></html>');
  response.end();
});

app.post('/save', function(request, response){
  console.log("Saving new entry");
  console.log("Param: "+request.params);
  console.log("Param1: "+request.body.param1);
  console.log("Param2: "+request.body.param2);
  console.log("Body: "+request.body);
  response.send();
});

app.get('/test/:id', function(request, response) {
  console.log("Param: "+request.params);
  console.log("Body: "+request.body);
  response.send("test...."+request.params.id);
});

app.post('/respuesta', function (request, response) {
  console.log("Param: "+request.params);
  console.log("Param1: "+request.body.param1);
  console.log("Param2: "+request.body.param2);
  console.log("Body: "+request.body);
  console.log("Who!!!" + request.body.who);
  console.log("Email!!!" + request.body.email);
  console.log("Assist!!!" + request.body.assist);
  console.log("Who3!!!" + request.body.assist);
  response.send ('......\n');
});