
require('dotenv').config()
const Server = require('./server.js')

var argv = require('yargs')
    .usage('Usage: $0 -w [num] -h [num]')
    .demandOption(['w','h'])
    .argv;

    console.log("The area is:", argv.w * argv.h);

// TODO create cli to start an http server
// cli params:
// --port (or -p) (default 8080) - server port
// --ip (or -i) (default 127.0.0.1) - server external ip
// --folder - (the default folder that server will serve static files)
// we will start a http server at port, with input ip
// and serve all static files inside the input folder (include images)
// if user not input port/ip/folder, those will be read using
// env
