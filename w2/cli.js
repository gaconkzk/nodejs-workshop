const parser = require('./cli_parser.js')
const writer = require('./writer.js')

let args = process.argv

// receive input data
let name = parser.getValueByKey('n', args)
let file = parser.getValueByKey('f', args)

try {
  if (!!name && !!file) {
    // processing
    let data = JSON.stringify({ name }, null, 2);
     // handling result
    writer.write(file, data)
  } else {
    throw new Error("name/file not input")
  }
} catch (error) {
  console.log(error)
}
