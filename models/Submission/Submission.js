const mongoose = require("mongoose");

const submissionSchema = mongoose.Schema({
  scoredPoints: {
    type: Number,
    required: true,
    immutable: false,
  },
  submissionTime: {
    type: Date,
    required: true,
    default: Date.now,
    immutable: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
    immutable: true,
  },
  problemId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Problem",
    immutable: true,
  },
});

const Submission = mongoose.model("Submission", submissionSchema);

module.exports = Submission;
