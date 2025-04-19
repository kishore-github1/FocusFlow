const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  priority: Number,
  pending: Boolean,
  Deadline : Date
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
