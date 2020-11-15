import React,{useState,useEffect} from 'react'
import Navbar from '../layouts/Navbar'
import "./Learn.css";

function Post() {
    const [responses, setResponses] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/api/profile')
            .then(res => res.json())
            .then(res => setResponses(res))
    }, [])
    console.log(responses)
    return (
        <div>
             <div className="header">
            <h1>PROJECTS</h1>
            </div>
                <Navbar />
               
        { responses.map((response) => {
            const mailser = "mailto:"+response.user.email
            return(
            <div className="cards" key={response._id}>
                <div className="card card1">
                    <div className="details">
                        <span>
                        <img src= {response.user.avatar} alt="logo"></img><br></br>
                        author : {response.user.name}<br></br>
                        posted on : {response.date}
                        </span>
                        <h2>  {response.title} </h2>
                        <h3> {response.desc} </h3>
                    <div className="tags">
                        <a href={mailser}>
                        <button className="Visitbtn">Connect</button>
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

export default Post
