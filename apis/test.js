"use strict";
exports.__esModule = true;
var httpclinet = require("http");
httpclinet.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
}).listen(8080);
