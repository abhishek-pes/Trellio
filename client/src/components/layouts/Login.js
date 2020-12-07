import React, {useContext,useState} from 'react'
import "./login.css";
import {Link} from 'react-router-dom';
import {authContext} from '../../context/auth-context'
import logo from './images/icon.svg';
 
function Login() {
    const auth = useContext(authContext)
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    
    const submitHandler = event =>
    {
        try{
        event.preventDefault()

        fetch("http://localhost:5000/api/auth", {

        method: "post",

        body: JSON.stringify({
            email, password
        }),
        headers: {
            "Content-type": "application/json"
        }
        })
        .then((res) => res.json())
        .then(res => {
            //console.log(res)
            if(res.token)
            {
                localStorage.setItem('token',res.token)
                auth.login()
                //getUserDetails()
            }
            else{alert('INVALID CREDENTIALS')}
        })
    }
    catch(err){
        alert(err.message)
    }

     }
    
    return (
        <div>
            <form className="box" onSubmit = {submitHandler}>
                <h1>Login</h1>
                <input type="email" name="" placeholder="E-mail Addres" required onChange = {(e) => setEmail(e.target.value)} ></input>
                <input type="password" name="" placeholder="Password" onChange= {(e) => setPassword(e.target.value)} required></input>
               <input type="submit" name="" value="Login"></input>
                <p>Don't have an account? <Link to="/Register">Register</Link></p>
            </form>
            <header>
                    <Link to="/"><img src={logo} height="70px" width="70px" alt="icon"></img></Link>
            </header>
        </div>
            
    )
    }
export default Login
    
    