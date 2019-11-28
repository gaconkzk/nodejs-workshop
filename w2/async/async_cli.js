const parser = require('./async_cli_parser.js')
const writer = require('./async_writer.js')

const start = () => {
    let args = process.argv

    // receive input data
    let name = parser.getValueByKey('n', args)
    let file = parser.getValueByKey('f', args)

    //TODO error if name/file not input
    try {
        if (!!name && !!file) {
            // processing
            let data = JSON.stringify({ name }, null, 2);
            
            //TODO handling result / error
            // print `OK` if success
            writer.write(file, data)
        } else {
            throw new Error("name/file not input")
        }
    } catch (error) {
        console.log(error)
    }
    
}

start()
