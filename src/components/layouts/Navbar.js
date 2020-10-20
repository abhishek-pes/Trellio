import React from "react";
import "./navbar.css";
export const Navbar = () => {
  return (
    <div class="topnav" id="myTopnav">
      <a href="#home" class="active">
        Home
      </a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
    </div>
  );
};

export default Navbar;
