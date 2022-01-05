const taskModel = require("./models/task");
const express = require("express");
const app = express();
app.use(express.json());
const port = 5000;
const mongoose = require("mongoose");

mongoose.connect(
    "mongodb://localhost:27017/TaskTracker"
)
.then(() => console.log("Mongodb Connected"));

app.get("/api/",(req,res) => res.send("Hello Fullstack!!"));

app.post("/api/AddTask", (req, res) => {
    const newTask = req.body;
    const data = taskModel.create(newTask);
    if(data){
        return res.json({data : "Task Added Successfully"});
    }
});

app.get("/api/Display", async (req,res)=>{
    const details = await taskModel.find();

    if(details === 0){
        return res.json({data:"No data found"});
    }

    return res.json({data:details});
});

app.delete("/api/deleteTask/:id",async (req,res)=>{
    const task = req.params.id;
    const deleteTask = await taskModel.findOneAndDelete({_id:task});
    if(deleteTask){
        res.json({data:"Task Deleted Successfully"});
    }
    else{
        res.json({data:"Task Deleted not Successfully"});
    }
})

app.listen(port, () => {
    console.log('Server running on port',port);
})

