var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UsersSchema = new Schema({
  fullname: String,
  username: String,
  password: String
});

var Users = mongoose.model("Users", UsersSchema);
module.exports = Users;