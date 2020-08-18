const mongoose = require("mongoose");

const problemSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true,
        
  },
  description: {},
  difficulty: {},
    contestId: {},
    creatorId: {
      
  }
});
