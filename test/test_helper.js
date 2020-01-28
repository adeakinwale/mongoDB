const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/users_test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

before(done => {
  mongoose.connection
    .once("open", () => {
      done();
    })
    .on("error", error => {
      console.warn("Warning", error);
    });
});

beforeEach(done => {
  const { users, comments, blogposts } = mongoose.connection.collections;

  users.drop(() => {
    comments.drop(() => {
      blogposts.drop(() => {
        // Ready to run the next test!
        done();
      });
    });
  });
});
