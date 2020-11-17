import React,{useState,useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import SideNav from "./SideNav";
import "./Project.css";

function Myprojects() {
    
    const [data,setdata] = useState([])
    function getposts()
    {
    fetch("http://localhost:5000/api/profile/me/",{
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
        
    getposts();
        // eslint-disable-next-line
    },[]);


   // console.log(data)

    let history = useHistory()

    const submitHandler = (pid) => {
        try{
            console.log(pid)
            const url = "http://localhost:5000/api/profile/delete/"+pid
            fetch(url, {
    
            method: "delete",
            headers: {
                "x-auth-token": localStorage.getItem('token')
            }
            })
            .then(res => {
                alert("deleted")
                getposts();
            })
        }
        catch(err){}
    }

    const updateForm = (pid)=>{
        localStorage.setItem('pid',pid);
        history.push("/UpdatePosts")
    }
    let h = ""
    if(data.length === 0)
    {
        h+="no posts"
    }
    return (
        <div>
        <div className="header">
       <h1>MY PROJECTS</h1>
       </div>
           <SideNav />
        <h1>{h}</h1>
    
   { data.map((response) => {
       return(
        <div className="cards4" key={response._id}>
        <div className="card4">
            <div className="details4">
                <span>
                <img src= {response.user.avatar} alt="logo"></img><br></br>
                author : {response.user.name}<br></br>
                posted on : {response.date}
                </span>
                <br></br><br></br>
                <hr></hr>
                <br></br>
                <h2> {response.title} </h2>
                <p> {response.desc} </p>
                <p>Tech Stack: {response.techStack}</p>
                <p>Rating : {response.rating}</p>
                <hr></hr>
               <div className="tags4">
                   <button className="random" onClick = {() => submitHandler(response._id)}>DELETE</button>
                   <button className="random" onClick = {() => updateForm(response._id)}>UPDATE</button>
                   <a href = {response.git} rel="noopener noreferrer" target="_blank">
                            <button className="random">View Project</button>
                        </a>
               </div>
               </div>
   </div>
   </div>
       )
   })
}
   
</div> 
    )
}

export default Myprojects
