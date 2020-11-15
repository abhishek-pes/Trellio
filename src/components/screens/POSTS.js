import React,{useState,useEffect,} from 'react'
import { useHistory } from 'react-router-dom'
import Navbar from '../layouts/Navbar'
function POSTS() {
    const [userdata,setuserdata] = useState([])

    const [desc,setDesc] = useState('')
    const [title,setTitle] = useState('')

    useEffect(() => 
     {
        fetch("http://localhost:5000/api/auth", {

        method: "get",
        headers: {
            "x-auth-token": localStorage.getItem('token')
        }
        })
        .then((res) => res.json())
        .then( res => {
            //console.log(res)
            setuserdata(res)
        })
    },[])
    //console.log(userdata)
    let i = ''
    let name = ''
    if(userdata)
    {
        i = userdata._id
        localStorage.setItem('id',i)
        name = userdata.name
    }
    let history = useHistory();
    const submitHandler = event => {
        try{
            event.preventDefault()
    
            fetch("http://localhost:5000/api/profile", {
    
            method: "post",
    
            body: JSON.stringify({
                desc, title
            }),
            headers: {
                "Content-type": "application/json",
                "x-auth-token": localStorage.getItem('token')
            }
            })
            .then((res) => res.json())
            .then(res => {
                //console.log(res)
                history.push("/Projects")
            })
        }
        catch(err){}
    }
    return (
        <div>
            <Navbar />
            
            <p>logged id : {i}</p>
            <p>logged in is  {name}</p>
            <div>
                <form onSubmit = {submitHandler}>
                <label>Project Details</label>
                <input type="text" onChange = {(e) => setDesc(e.target.value)}></input><br></br>
                <label>Project Title</label> 
                <input type="text" onChange = {(e) => setTitle(e.target.value)}>
                </input>
                <br></br>
                <input type = "submit" value = "submit"></input>                  
                </form>
            </div>

        </div>
    )
}

export default POSTS
