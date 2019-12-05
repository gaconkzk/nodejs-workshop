const path = require('path')
const readline = require('readline')

// file and path related
const realPath = (filepath) => path.isAbsolute(filepath) ? filepath : path.resolve(__dirname, 'test', filepath)

// readline and question related
const question = (rl, str) => new Promise(resolve => rl.question(str, resolve))

async function ask(questionStr) {
  const rl = readline.createInterface({ input: process.stdin , output: process.stdout })
  let answer = await question(rl, questionStr)
  rl.close()

  return answer
}

module.exports = {
  realPath,
  ask
}
