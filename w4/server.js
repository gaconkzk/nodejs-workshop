
var net = require('net');

class server {
	constructor(req, res) {
        this.req = req
        this.res = res
    }
  async handle(req, res) {
    var server = net.createServer(function(socket) {
		socket.write('Echo from server\n');
		
		socket.on('data', (data) => {
			console.log(`Server received: ${data}`)
		})
	});
	
	server.on('error', (err) => {
		throw err
	})
	
	server.listen(req, res);
  }
}

module.exports = server
