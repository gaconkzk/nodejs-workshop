const { CliBuilder } = require('./async_cli_parser.js')
const writer = require('./async_writer.js')
const cmdParams = require('./cmd.format.js')
const { realPath } = require('./utils.js')

const start = async () => {
  try {
    let cliBuilder = (new CliBuilder()).params(cmdParams)
    let parsedData = await cliBuilder.match()

    // processing
    // we should know the cmdparams for using the business data
    let data = JSON.stringify({ name: parsedData.name }, null, 2);

    // output
    await writer.write(parsedData.filepath, data)
  } catch (err) {
    console.error(err)
  }
}

start()
