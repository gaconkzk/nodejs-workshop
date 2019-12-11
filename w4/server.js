
var net = require('net');

class server {
	constructor(port, ip) {
        this.port = port
        this.ip = ip
    }
  async handle(port, ip) {
    var server = net.createServer(function(socket) {
		socket.write('Echo from server\n');

		socket.on('data', (data) => {
			console.log(`Server received: ${data}`)
		})
	});

	server.on('error', (err) => {
		throw err
	})

	server.listen(port, ip);
  }
}

module.exports = server
