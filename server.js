var http = require("http");
var express = require('express');
var serveStatic = require("serve-static");



var fac  = require(__dirname + "/app/app.js");
var app  = express();
var PORT = 3030;
app.use(serveStatic(__dirname + "/app"));


app.get('/api/factures/:recFact',fac.getFacture); 
		

var server = http.createServer(app).listen(PORT);
console.log("Serveur port " + PORT);