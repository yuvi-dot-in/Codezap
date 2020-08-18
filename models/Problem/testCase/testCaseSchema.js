const mongoose = require("mongoose");
const testCaseSchema = mongoose.Schema({
  // input to be given
  input: {
    type: String,
    required: true,
    default: "",
  },
  // expected output
  output: {
    type: String,
    required: true,
    default: "",
  },
  //points alloted for given test case
  points: {
    type: Number,
    required: true,
    default: 0,
  },
  // determines if test case is private or public
  public: {
    type: Boolean,
    required: true,
    default: false,
  },
});

module.exports = testCaseSchema;
