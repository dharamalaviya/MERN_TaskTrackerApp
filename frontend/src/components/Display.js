import axios from "axios";
import { useEffect, useState } from "react";
const Display = () => {

    useEffect(()=>{
        getAllTasks();
    },[]);

    const getAllTasks = () => {
        axios.get("/api/Display").then((res) => setTask(res.data.data));
    };

    // function deleteTask(taskname){
    //     axios.delete('/api/deleteTask/').then(res => console.log(res.data));
    //   };


    const deleteTask = (id) =>{
        axios.delete(`/api/deleteTask/${id}`).then((res)=>{console.log(res.data);});
    }

    const [task,setTask] = useState([]);

    return(
        <table class="table">
                            <thead>
                                <tr>
                                <th scope="col">Task</th>
                                <th scope="col">Date & Time</th>
                                <th>Delete</th>
                                </tr>
                            </thead>
                        {
                            task.map((item) => {
                                return(
                                    <tbody>
                                        <tr>
                                        <th scope="row" >{item.task}</th>
                                        <td>{item.date_time}</td>
                                        <div className="fa fa-close" style={{color: "red"}} onClick={()=>{deleteTask(item._id)}}></div>
                                        </tr>
                                    </tbody>
                                )
                            })
                        }
        </table>
    );
};

export default Display;