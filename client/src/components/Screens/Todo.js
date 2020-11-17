import React, { useState, useEffect } from 'react';
import './Todo.css';
import SideNav from "./SideNav";



function Todo(){
    const [data,setdata] = useState([])
    const [task, setTextInput] = useState("")
    const [error, setError] = useState(false)

    function getTask()
    {
    fetch("http://localhost:5000/api/todo/tasks",{
        method:"get",
        headers:{
            "x-auth-token":localStorage.getItem('token')
        }
    })
    .then((res) => res.json())
    .then((res) => {
        setdata(res)
    })
}
    useEffect(() => {
        
    getTask();
        // eslint-disable-next-line
    },[]);





    const submitHandler = (event) => {
        try {
          event.preventDefault();
    
          fetch("http://localhost:5000/api/todo/", {
            method: "post",
    
            body: JSON.stringify({
              task,
            }),
            headers: {
              "Content-type": "application/json",
              "x-auth-token": localStorage.getItem("token"),
            },
          })
            .then((res) => res.json())
            .then((res) => {
            //   console.log(res)
              getTask();
            });
        } catch (err) {}
      };


    //this hook displays a error message when the input characters exceed 25
    //Displays nothing if characters<25
    useEffect(() => {
        if(task.length > 50)setError(true);
        else setError(false)
    },[task])
    
    // console.log(data)


    const Completed = (tid) => {
        try{
            // console.log(tid)
            const url = "http://localhost:5000/api/todo/delete/"+tid
            fetch(url, {
    
            method: "delete",
            headers: {
                "x-auth-token": localStorage.getItem('token')
            }
            })
            .then(res => {
                alert("Congrats! On completing your Task")
                getTask();
            })
        }
        catch(err){}
    }

    return(
        <div>
        <header className="header">
            <h1>TODO</h1>        
        </header>
        <SideNav/>
            <div className="inp1">
            <form onSubmit={submitHandler}>
                <label className="inputLabel1">
                    Add Your Task:
                    <input type="text" onChange={(e) =>setTextInput(e.target.value)} placeholder="Enter task" className="inputfield1"/>
                </label>
                <input type = "submit" value = "Add" className="submitbtn1"/>    
            </form>
            </div>
            {error ? alert("Enter a short task name !!"): null}
            {
                 data.map((response) =>{
                     return(
                    <section className="card-list1" key={response._id}>
                        <article className="card1" >
                          <header className="card-header1">
                            <p className="date">{response.date}
                            </p>
                            <h2 className="item">{response.task}</h2>
                          </header>
                            <p>Author</p>
                            <p>{response.user.name}</p>
                          <div className="tags1">
                            <button  className="deletebtn1" onClick = {() => Completed(response._id)}>Completed</button>
                          </div>
                        </article>
                    </section>
                    )
                })
            }
        </div>
    )
}

export default Todo;