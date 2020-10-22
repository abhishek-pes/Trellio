import React from 'react';
import SideBar from "./NavBar";
export const Mainscreen = () => {
    return(
        <span>
        <div className="head">
        <h1>Trellio.</h1>
        </div>
        <div>
        <SideBar />
        </div>
        <div><center><p>Hello World</p></center></div>
        </span>
    );
}
export default Mainscreen;



