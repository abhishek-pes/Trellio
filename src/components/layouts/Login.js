import React from 'react'
import "./login.css";
import {Link} from 'react-router-dom';
import logo from './images/icon.svg'; 
export const Login = () => {
    return (
        <div>
            <form className="box" method="post">
                <h1>Login</h1>
                <input type="email" name="" placeholder="E-mail Addres"></input>
                <input type="password" name="" placeholder="Password"></input>
                <input type="submit" name="" value="Login"></input>
                <p>don't have an account? <Link to="/Register">Register</Link></p>
            </form>
            <footer>
                    <Link to="/"><img src={logo} height="70px" width="70px" alt="icon"></img></Link>
            </footer>
        </div>
            
    )
}
export default Login
