const express = require('express')
const history = require('connect-history-api-fallback')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 3001

const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const morgan = require('morgan')
var Users = require("./users");
const mongoose = require('mongoose')
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
let dbhost = process.env.DB_HOST_PORT
let database = process.env.DB_NAME
let url = `mongodb://${dbhost}/${database}`


mongoose.connect(url, { useNewUrlParser: true , useUnifiedTopology: true});
mongoose.connection.once("open", function(callback){
  console.log("Connection Succeeded");
});

staticMiddleware = express.static(path.resolve(__dirname, 'frontend', 'dist'))

app.get('/users', (req, res) => {
    Users.find({}, function (error, users) {
        if (error) { console.error(error); }
        res.send({
            users: users
          })
      }).sort({_id:-1})
})

app.post('/createUser', (req, res) => {
    console.log(req.body);
    var fullname = req.body.fullname;
    var username = req.body.username;
    var password = req.body.password;
	var newUser = new Users({
		fullname: fullname,
        username: username,
        password: password
	})

	newUser.save(function (error) {
		if (error) {
			console.log(error)
        }
        console.log("them thanh cong")
		res.send({
			success: true
		})
	})
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
