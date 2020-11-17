import React , {useContext} from 'react'
import "./homepage.css";
import {Link} from "react-router-dom";
import {authContext} from "../../context/auth-context"

function Navbar() {
    const auth = useContext(authContext)
    return (
        <div className="navbar">
            {!auth.isLoggedIn && (
            <a href="#about_page">ABOUT</a>
            )}
            <Link to = '/Learn'>LEARN</Link>
            {!auth.isLoggedIn && (
            <Link to="/Register" className="right">SIGN UP</Link>
            )}
            {!auth.isLoggedIn && (
            <Link to="/Login" className="right">LOG IN</Link>
            )}
            {auth.isLoggedIn && (
                <Link to = "/" className ="right" onClick = {() => auth.logout()}>LOG OUT</Link>
            )}
            {auth.isLoggedIn && (
                <Link to = "/Myprojects" className ="right">MY POSTS</Link>
            )}
            {auth.isLoggedIn &&(
            <Link to="/Projects" className="right">PROJECTS</Link>
            )}
            {auth.isLoggedIn && (
            <Link to="/POSTS" className="right">POSTS</Link>
            )}
        </div>
    )

}

export default Navbar
