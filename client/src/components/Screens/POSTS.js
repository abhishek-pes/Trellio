import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./POSTS.css";
import SideNav from "./SideNav";

function POSTS() {

  const [desc, setDesc] = useState("");
  const [title, setTitle] = useState("");
  const [techStack, settech] = useState("");
  const [git, setGit] = useState("");
  const [rating, setRating] = useState("");

 
  //console.log(userdata)
 
  let history = useHistory();
  const submitHandler = (event) => {
    try {
      event.preventDefault();

      fetch("/api/profile", {
        method: "post",

        body: JSON.stringify({
          title,
          desc,
          techStack,
          git,
          rating,
        }),
        headers: {
          "Content-type": "application/json",
          "x-auth-token": localStorage.getItem("token"),
        },
      })
        .then((res) => res.json())
        .then((res) => {
          //console.log(res)
          history.push("/Projects");
        });
    } catch (err) {}
  };

  return (
    // <div>
    //     <Navbar />

    //     <p>logged id : {i}</p>
    //     <p>logged in is  {name}</p>
    //     <div>
    //         <form onSubmit = {submitHandler}>
    //         <label>Project Details</label>
    //         <input type="text" onChange = {(e) => setDesc(e.target.value)}></input><br></br>
    //         <label>Project Title</label>
    //         <input type="text" onChange = {(e) => setTitle(e.target.value)}>
    //         </input>
    //         <br></br>
    //         <input type = "submit" value = "submit"></input>
    //         </form>
    //     </div>

    // </div>
    <div>
      <div className="header">
        <h1>Trellio.</h1>
        <h3>MEET . CONNECT . COLLABORATE</h3>
      </div>
      <SideNav />
      <div className="wrapper">
        <div className="title">
          <h1>Start New Project</h1>
        </div>
        <form onSubmit={submitHandler}>
          <div className="contact-form">
            <div className="input-fields">
              <input
                type="text"
                className="input"
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Project Title"
                required
              ></input>
              <input
                type="text"
                className="input"
                onChange={(e) => setDesc(e.target.value)}
                placeholder="Description"
                required
              ></input>
              <input
                type="text"
                className="input"
                placeholder="Technologies Used"
                onChange={(e) => settech(e.target.value)}
                required
              ></input>
              <input
                type="url"
                className="input"
                placeholder="github project link"
                onChange={(e) => setGit(e.target.value)}
                required
              ></input>
              <br></br>
              <h4>Project Rating</h4>
              <br></br>
              <select onChange={(e) => setRating(e.target.value)} required>
                <option value="">choose</option>
                <option value="easy">easy</option>
                <option value="intermediate">intermediate</option>
                <option value="expert">expert</option>
              </select>
              <br></br>
              <br></br>
              <input
                type="submit"
                className="createbtn"
                value="Create Project"
              ></input>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default POSTS;
