require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const history = require('connect-history-api-fallback')
const app = express()

const auth = require('./backend/auth')

const port = process.env.PORT || 3000

const path = require('path')

staticMiddleware = express.static(path.resolve(__dirname, 'frontend', 'dist'))

app.use(cors())

app.use(bodyParser.json())

app.use(staticMiddleware)

app.use(history())

app.use(staticMiddleware)

app.post('/api/register', auth.register)
app.get('/api/accounts', auth.list)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
