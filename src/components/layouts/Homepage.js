import React,{useContext} from "react";
import "./homepage.css";
import logo from './images/icon.svg'; 
import {Link} from "react-router-dom";
import Navbar from './Navbar'
import {authContext} from '../../context/auth-context'
export const Homepage = () => {
  const auth = useContext(authContext)
  if(localStorage.getItem('token'))
  {
    auth.login()
  }
  else
  {
    auth.logout()
  }
  return (
    <div>
        <div className="header">
            <h1>Trellio.</h1>
            <h3>MEET . CONNECT . COLLABORATE</h3>
        </div>
        <Navbar />
        <div className ="title">
        <h1 className="heart">ABOUT TRELLIO</h1>
        </div>
        <div className="main" id="about_page">
            <div className="about">
                Trellio is a platform where fellow developers can meet , connect and collaborate. Developers can post their project ideas
                and other fellow developers can view the project ideas and conncet to work on it.
            </div>
            <span className="buttons">
            <Link to="/Register">
            <button className="button"><span>REGISTER</span></button></Link>
            {auth.isLoggedIn &&(
            <Link to="/Login">
            <button className="button"><span>LOGIN</span></button></Link>
            )}
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