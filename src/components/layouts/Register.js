import React from "react";
import "./login.css";
import logo from './images/icon.svg'; 
import {Link} from 'react-router-dom';

export const Register = () => {
  return (
    <div>
      <form class="box" action="index.html" method="post">
        <h1>Sign Up</h1>
        <input type="text" name="" placeholder="Username"></input>
        <input type="email" name="" placeholder="E-mail"></input>
        <input type="password" name="" placeholder="Password"></input>
        <input type="password" name="" placeholder="confirm Password"></input>
        <input type="submit" name="" value="Login"></input>
        <p>
          already have an account? <Link to="/Login">Sign in</Link>
        </p>
      </form>
      <footer>
                    <Link to="/"><img src={logo} height="70px" width="70px" alt="icon"></img></Link>
      </footer>
    </div>
  );
};
export default Register;
