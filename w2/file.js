const path = require('path')
const fs = require('fs')

const content = fs.readFileSync('w2/data/data.txt', 'utf8')
const lines = content.split('\n').map(l => l.trim()).filter(l => !!l)

console.log(lines);

lines.push('Vision')

fs.writeFileSync('w2/data/data.txt', lines.join('\n'))
