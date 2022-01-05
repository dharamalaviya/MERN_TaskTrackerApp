import axios from "axios";
import React, { useState } from "react";

function AddTask(){
      const [task,setTask] = useState([{
        task: "",
        date_time: "",
        reminder: "",
    }]);

      const addTask = () => {
        axios.post('/api/AddTask',task).then(res => console.log(res.data));
      };
     
    return (
        <div className="App">
          <div></div>
           <table align="center">
               <tr>
                   <th colSpan={2}><h3>Task Tracker</h3></th>
               </tr>
    
               <tr>
                   <td align="left"><label for="exampleFormControlInput1">Taks</label></td>
                </tr>
                <tr>
                   <td><input type="text" placeholder = "Add Task" id="exampleFormControlInput1" onChange={(e) => setTask({...task, task:e.target.value})}/></td>
               </tr>
    
               <tr>
                   <td align="left"><label for="exampleFormControlInput1">Day & Time</label></td>
                </tr>
                <tr>
                   <td><input type="text" placeholder = "Add Day & Time" id="exampleFormControlInput1" onChange={(e) => setTask({...task, date_time:e.target.value})}/></td>
               </tr>
    
               <tr>
                   <td align="left"><label for="exampleFormControlInput1">Set Reminder</label></td>
                   <td align="left"><input type="checkbox" onChange={(e) => setTask({...task, reminder:e.currentTarget.checked})}/></td>
                </tr>
               <tr>
                   <td><button onClick={addTask}>Save Task</button></td>
               </tr>
           </table>
        </div>
      );
}

export default AddTask;