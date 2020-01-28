const mongoose = require("mongoose");
const PostSchema = require("./post");
const Schema = mongoose.Schema;

// blue print of data / collection
const userSchema = new Schema({
  name: {
    type: String,
    validate: {
      validator: name => name.length > 2,
      message: "Name must be longer than 2 characters."
    },
    required: [true, "Name is required."]
  },

  posts: [PostSchema],
  likes: Number
});

userSchema.virtual("postCount").get(function() {
  return this.posts.length;
});

// creates user collection using the defined userSchema
const User = mongoose.model("user", userSchema);
module.exports = User;
