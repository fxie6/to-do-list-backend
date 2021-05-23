const mongoose = require("mongoose");

const TodoSchema = mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Todos", TodoSchema);
