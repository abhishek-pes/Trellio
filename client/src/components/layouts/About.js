import React from 'react'
import './homepage.css'
import './about.css'
import SideNav from "../Screens/SideNav";
import abhipfp from "./images/abhishek_mishra.JPG"
import abhiv from "./images/abhiv.jpeg"
import Mail from '@material-ui/icons/MailOutlineOutlined'
function about() {
    return (
        
        <div>
            <SideNav></SideNav>
            <div class="about-sectionabt">
            <h1>Trellio.</h1>
            <p>Trellio is a platform where fellow developers can meet , connect and collaborate.</p>
            <p>Developers can post their project ideas and other fellow developers can view the project ideas and conncet to work on it.</p>
            </div>
            <br></br><br></br>
            <h2 style={{textAlign : "center"}}>Our Team</h2>
            <div className="rowabt">
            <div className="column">
            <div className="card">
            <br></br>
            <img src={abhiv} alt="Abhishek V" style= {{width:"60%", height:"278px", borderTop:"10%" ,  marginLeft:"21%" , borderRadius:"50%"}}></img>
            <div className="containerabt">
            <br></br><br></br>
            <h2>Abhishek V</h2>
            <p className="title">PES University</p>
            <br></br><br></br>
            <h3>Frontend Designer & Developer</h3>
            <br></br>
            {/* <p>Worked on Creating todo functionality, side navigation bar, learn tech page </p> */}
            {/* <p><button className="buttonabt">Contact</button></p> */}
            <br></br>
            <p>
            <a href="mailto:v.abhishek1347@gmail.com">
            <Mail style = {{fontSize:"40px"}}></Mail></a>
            </p>
      </div>
    </div>
  </div>
        </div>
        <div className="column">
            <div className="card">
            <br></br>
            <img src="https://www.searchpng.com/wp-content/uploads/2019/02/Profile-ICon.png" alt="Jane" style= {{width:"60%", height:"278px", borderTop:"10%" ,  marginLeft:"21%"}} ></img>
            <br></br><br></br>
            <div className="containerabt">
            <h2>Anush P</h2>
            <p className="title">PES University</p>
            <br></br><br></br>
            <h3>Frontend Designer</h3>
            <br></br>
            {/* <p>Worked on Creating homepage layout, interface for login and register</p> */}
            {/* <p><button className="buttonabt">Contact</button></p> */}
            <br></br>
            <p>
            <a href="mailto:anushpupadhya@gmail.com">
            <Mail style = {{fontSize:"40px"}}></Mail></a>
            </p>
      </div>
    </div>
  </div>
  <div className="column">
            <div className="card">
            <br></br>
            <img src={abhipfp} alt="Abhishek Mishra" style= {{width:"60%", height:"278px", borderTop:"10%" ,  marginLeft:"21%" , borderRadius:"50%"}}></img>
            <br></br><br></br>
            <div className="containerabt">
            <h2>Abhishek Mishra</h2>
            <p className="title">PES University</p>
            <br></br><br></br>
            <h3>Backend developer</h3>
            <br></br>
            {/* <p>Worked on Creating the interface for adding a new project, front-end back-end Integration, routing pages</p> */}
            {/* <p><button className="buttonabt">Contact</button></p> */}
            <br></br>
            <p>
            <a href="mailto:abhishekmis40@gmail.com">
            <Mail style = {{fontSize:"40px"}}></Mail></a>
            </p>
      </div>
    </div>
  </div>
</div>
        
    )
}

export default about
