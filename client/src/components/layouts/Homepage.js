import React,{useContext,useEffect} from "react";
import "./homepage.css";
import logo from './images/icon.svg'; 
import {Link} from "react-router-dom";
import Navbar from './Navbar'
import {authContext} from '../../context/auth-context'
import collab1 from './images/collab1.jpg';

export const Homepage = () => {
  const auth = useContext(authContext)
  useEffect(()=>{
  if(localStorage.getItem('token'))
  {
    auth.login()
  }
  else
  {
    auth.logout()
  }
})
  return (
    <div>
        <div className="header">
            <h1>Trellio.</h1>
            <h3>MEET . CONNECT . COLLABORATE</h3>
        </div>
        <Navbar />
        <div className ="title">
        </div>
        <div className="main" id="about_page">
        <div className="colabimg">
        <img src={collab1} /> 
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
            <br></br>
            <br></br>
            <hr></hr>
            <img src={logo} height="70px" width="70px" alt="icon" className = "trellio"></img>
        </div>
    </div>
  );
};

export default Homepage;