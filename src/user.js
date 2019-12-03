const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// blue print of data / collection
const userSchema = new Schema({
  name: String,
  postCount: Number
});

// creates user collection using the defined userSchema
const User = mongoose.model("user", userSchema);
module.exports = User;
