import React from "react";
import { slide as Menu } from "react-burger-menu";
import './NavBar.css';
import Logo from "../layouts/images/icon.svg";

export default props => {
  return (
    <Menu {...props}>
      <span>
      <img src = {Logo} height="40px" width="40px" alt="logo"></img>
      <span id="icon">Trillio.</span>
      </span>
      <a className="menu-item" href="/">
        My Profile
      </a>
      <a className="menu-item" href="/">
        Start New Project
      </a>
      <a className="menu-item" href="/">
        View Existing Projects
      </a>
      <a className="menu-item" href="/">
        Search Projects
      </a>
      <span className="btn">
      <button className="logout"><span>Logout</span></button>
      </span>
    </Menu>
  );
};