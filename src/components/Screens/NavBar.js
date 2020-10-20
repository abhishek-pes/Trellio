import React from "react";
import { slide as Menu } from "react-burger-menu";
import './NavBar.css';

export default props => {
  return (
    <Menu {...props}>
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