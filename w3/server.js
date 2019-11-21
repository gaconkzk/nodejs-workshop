var net = require('net');

var server = net.createServer(function(socket) {
	socket.write('Echo from server\n');
	
	socket.on('data', (data) => {
		console.log(`Server received: ${data}`)
	})
});

server.on('error', (err) => {
	throw err
})

server.listen(1337, '127.0.0.1');