const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const path = require('path')

app.use(express.static(path.resolve(__dirname, 'www')))
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))