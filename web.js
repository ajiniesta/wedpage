var gzippo = require('gzippo');
var express = require('express');
var morgan = require('morgan');
var cool = require('cool-ascii-faces');
var pg = require('pg');
var bodyParser  = require("body-parser");
var methodOverride = require("method-override");
var fs = require('fs');

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
  var fileName = "" + __dirname + "/dist/views/admin_template.html";
  fs.readFile(fileName, function (err, html) {
    if (err) {
        throw err; 
    }       
    console.log("File " + fileName + " loaded.");
    response.set('Content-Type', 'text/html');
    response.send(new Buffer(html));
    response.end();
  });
});

app.get('/getcomments', function(request, response){
  pg.connect(process.env.HEROKU_POSTGRESQL_NAVY_URL, function(err, client, done) {
    if(client){
        client.query('SELECT * FROM comments', function(err, result) {
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

app.get('/test/:id', function(request, response) {
  console.log("Param: "+request.params);
  console.log("Body: "+request.body);
  response.send("test...."+request.params.id);
});

app.post('/respuesta', function (request, response) {
  if(pg){
    pg.connect(process.env.HEROKU_POSTGRESQL_NAVY_URL, function(err, client, done) {
      if(client){
          client.query('INSERT INTO comments(who, email, assist, number, allergies) VALUES ($1, $2, $3, $4, $5)',
          [request.body.who, request.body.email, request.body.assist, request.body.howmany, request.body.allergies]);
      } else {
        response.send("<h1>No Client</h1>");
      }
    });
  }else{
    response.send("<h1>No Client</h1>");
  }
});

app.get('/queries/getall', function(request, response) {
  console.log("pg? " + pg);
  pg.connect(process.env.HEROKU_POSTGRESQL_NAVY_URL, function(err, client, done) {
    if(client){
        client.query('SELECT * FROM comments', function(err, result) {
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
