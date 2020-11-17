import React from "react";
import { slide as Menu } from "react-burger-menu";
import './SideNav.css';
import {Link} from "react-router-dom";
import {useContext} from 'react'
import {authContext} from "../../context/auth-context"

export default props => {
  const auth = useContext(authContext)
  return (
    <Menu {...props}>
      {!auth.isLoggedIn &&(
      <a className="menu-item" href="/">
        Home
      </a>
      )}
       {auth.isLoggedIn && (
        <Link to = "/Todo" className ="right" >Todo</Link>
    )}
      <Link to ="/Learn" className="menu-item">
        Learn Tech
      </Link>
      {auth.isLoggedIn && (
        <Link to = "/POSTS" className ="right">Start new Project</Link>
      )}
      {auth.isLoggedIn && (
        <Link to = "/Myprojects" className ="right">My Projects</Link>
      )}
      {auth.isLoggedIn && (
        <Link to = "/Projects" className ="right">Explore Projects</Link>
      )}
      {auth.isLoggedIn && (
        <Link to = "/" className ="right" >
        <span className="btn">
        <button className="logout" onClick = {() => auth.logout()}><span>Logout</span></button>
        </span>
        </Link>
    )}
   
    {!auth.isLoggedIn && (
        <Link to = "/" className ="right" >
        <span className="btn">
          <Link to="/Login">
        <button className="logout"><span>Sign In</span></button>
        </Link>
        </span>
        </Link>
    )}
    </Menu>
  );
};
