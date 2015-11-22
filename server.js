var express = require('express');
var config = require('./config');
var app = express();

app.get('/', function(req, res) {
    res.json({ endpoints: 'urls' });
});

app.get('/admin', function(req, res) {
    res.json({ admin: 'yes' });
});

process.on('uncaughtException', function uncaughtExceptions(err) {
    console.log(err);
});

// Move port to config file with env
var server = app.listen(config.port, function startServer() {
    console.log('Server application listening at port %s.', config.port);
});
