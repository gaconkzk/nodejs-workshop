const parser = require('./cli_parser.js')
const writer = require('./writer.js')

let args = process.argv

// receive input data
let name = parser.getValueByKey('n', args)
let file = parser.getValueByKey('f', args)

// processing
let data = JSON.stringify({ name }, null, 2);

// handling result
try{
    writer.write(file, data)
}
 catch(e){
    console.log(e);
}
