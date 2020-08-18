const mongoose = require("mongoose");

const contestSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    unique: true,
    required: true,
  },
  logo: {
    type: String,
  },
  startTime: {
    type: Date,
  },
  endTime: {
    type: Date,
  },
  description: {
    type: String,
    default: "",
  },
  approved: {
    type: Boolean,
    default: false,
  },
  creatorId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
    immutable: true,
  },
});

const Contest = mongoose.model("Contest", contestSchema);

module.exports = Contest;
