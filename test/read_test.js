const assert = require("assert");
const User = require("../src/user");

describe("Reading users out of database", () => {
  let joe;

  beforeEach(done => {
    joe = new User({ name: "joe" });
    joe.save().then(() => done());
  });

  it("finds all users with a name of joe", done => {
    User.find({ name: "joe" }).then(users => {
      console.log(users[0]._id);
      console.log(joe._id);
      assert(users[0]._id.toString() === joe._id.toString());
      done();
    });
  });

  it("find a user with a particular id", done => {
    //setTimeout(done, 300);
    User.findOne({ _id: joe._id }).then(user => {
      assert(user.id === joe.id);
      done();
    });
  });
});
