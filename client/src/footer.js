import React from "react";
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LanguageIcon from '@material-ui/icons/Language';

const Footer = () => (
  <div className="footer">
  <center>
    <p>&copy;{new Date().getFullYear()} Copyright: <a href="https://github.com/Abhishek4848/Trellio"> Team Trellio </a> <br/>
    <a href="https://github.com/Abhishek4848/Trellio" target="_blank"><GitHubIcon/></a>
    <a href="mailto:v.abhishek1347@gmail.com" target="_blank"><MailOutlineIcon/></a>
    <a href="https://trellio.herokuapp.com/" target="_blank"><LanguageIcon/></a>
    </p>
    </center>
  </div>
);

export default Footer;