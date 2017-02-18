var express = require("express");
var app = express();
var httpProxy = require('http-proxy');

var proxy = httpProxy.createProxyServer();

app.use(express.static('./app'));

app.use('/api', function(req, res) {
	proxy.web(req, res, { target: 'http://api.openweathermap.org' });
});

app.listen(8080, function(){
    console.log("Listening at port 8080");
})

exports = module.exports = app;