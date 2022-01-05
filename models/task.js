const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
    task:String,
    date_time:String,
    reminder:Boolean
});

const taskModel = mongoose.model("TaskTracker",taskSchema,"TaskTracker");

module.exports = taskModel;