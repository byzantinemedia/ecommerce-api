var express = require('express');
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
var server = app.listen(1337, function startServer() {
    console.log('Server application listening at port %s.', 1337);
});