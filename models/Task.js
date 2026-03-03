const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  isCompleted: {
    // convert from string to boolean
    type: Boolean,
    //delete Double quotes from string
    default: false,
  },
});

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
