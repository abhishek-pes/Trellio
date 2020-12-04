import React,{useState} from "react";
import "./login.css";
import logo from './images/icon.svg'; 
import {Link,useHistory} from 'react-router-dom';

function Register() {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [name,setName] = useState('')


    let history = useHistory();
    const submitHandler = event =>
    {
        try{
        event.preventDefault()

        fetch("/api/users", {

        method: "post",

        body: JSON.stringify({
             name,email, password
        }),
        headers: {
            "Content-type": "application/json"
        }
        })
        .then((res) => res.json())
        .then(res => {
          try{
            alert((res.error[0].msg))
            }
            catch{
              alert("User Created")
              history.push("/Login")
  
            }
        })
    }
    catch(err){            
      alert('USER ALREADY EXISTS')
  }

     }


  return (
    <div>
      <form className="box" onSubmit = {submitHandler}>
        <h1>Sign Up</h1>
        <input type="text" name="" placeholder="Username" required onChange = {(e) =>setName(e.target.value)}></input>
        <input type="email" name="" placeholder="E-mail" onChange = {(e) => {setEmail(e.target.value)}}></input>
        <input type="password" name="" placeholder="Password" pattern=".{6,}" title="6 character minimum" onChange ={(e)=>{setPassword(e.target.value)}}></input>
        <input type="submit" name="" value="Register"></input>
        <p>
          Already have an account? <Link to="/Login">Sign in</Link>
        </p>
      </form>
      <footer>
                    <Link to="/"><img src={logo} height="70px" width="70px" alt="icon"></img></Link>
      </footer>
    </div>
  );
}
export default Register;
