var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.use(express.static(__dirname + '/public'));

io.sockets.on("connection", function(client) {
  //El callback reemplaza la data que se envia desde main.js
	client.on("user image", function (imagen) {
		console.log(imagen);
		io.sockets.emit("addimage", "", imagen);
	});
});

server.listen(3000, function() {
	console.log("El servidor ha iniciado en el puerto 3000");
});