const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const config = require('./config/db'); // needed?
const Location = require('./models/location');
const queries = require('./queries')

var port = 3000;

mongoose.connect(config.db).then(
	() => { console.log('Connected successfully to rpivrardb') },
	err => { console.log('Can\'t connect to db') }
);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'))


var app = express();

var dir = __dirname; // this will probably need to be updated

app.use(express.static(dir));


/* website routes */
app.get('/', function(req, res) {
	res.sendFile(path.join(dir + '/index.html'));
})

app.get('/about', function(req, res) {
	res.sendFile(path.join(dir + '/index.html'));
})

app.get('/contact', function(req, res) {
	res.sendFile(path.join(dir + '/index.html'));
})


/* WebVR program routes */
app.get('/vr-map', function(req, res) {
	res.sendFile(path.join(dir + '/index.html'));
})


/* Queries */
app.get('/query/buildings', queries.buildings);

app.get('/query/outdoor-locs', queries.outdoorLocs);


const server = app.listen(port, function() {
	console.log('listening on port ' + port);
});

// look up
// - state management
// - redux
// - insomnia and postman