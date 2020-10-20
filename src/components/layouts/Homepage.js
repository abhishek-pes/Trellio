import React from "react";
import "./homepage.css";
import logo from './images/icon.svg'; 
import {Link} from "react-router-dom";
export const Homepage = () => {
  return (
    <div>
        <div className="header">
            <h1>Trellio.</h1>
            <h3>MEET . CONNECT . COLLABORATE</h3>
        </div>
        <div className="navbar">
            <a href="#about_page">ABOUT</a>
            <Link to="/Register" className="right">SIGN UP</Link>
            <Link to="/Login" className="right">LOG IN</Link>
        </div>
        <div className="main" id="about_page">
            <h1 className="heart">ABOUT TRELLIO</h1>
            <div className="about">
                Trellio is a platform where fellow developers can meet , connect and collaborate. Developers can post their project ideas
                and other fellow developers can view the project ideas and conncet to work on it.
            </div>
            <span className="buttons">
            <Link to="/Register">
            <button className="button"><span>REGISTER</span></button></Link>
            <Link to="/Login">
            <button className="button"><span>LOGIN</span></button></Link>
            </span>
            <hr></hr>
            <img src={logo} height="70px" width="70px" alt="icon"></img>
        </div>
    </div>
  );
};

export default Homepage;