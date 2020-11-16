import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./POSTS.css";
import SideNav from "./SideNav";

function UpdatePosts() {

  const [desc, setDesc] = useState("");
  const [title, setTitle] = useState("");
  const [techStack, settech] = useState("");
  const [git, setGit] = useState("");
  const [rating, setRating] = useState("");

  
  let history = useHistory();
  const submitHandler = (event) => {
    try {
      event.preventDefault();

      fetch("http://localhost:5000/api/profile/update/"+localStorage.getItem("pid"), {
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
          localStorage.removeItem('pid');
          history.push("/Myprojects");
        });
    } catch (err) {}
  };

  return (
    <div>
      <div className="header">
        <h1>Trellio.</h1>
        <h3>MEET . CONNECT . COLLABORATE</h3>
      </div>
      <SideNav />
      <div class="wrapper">
        <div class="title">
          <h1>Update Your Project Details</h1>
        </div>
        <form onSubmit={submitHandler}>
          <div class="contact-form">
            <div class="input-fields">
              <input
                type="text"
                class="input"
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Project Title"
                required
              ></input>
              <input
                type="text"
                class="input"
                onChange={(e) => setDesc(e.target.value)}
                placeholder="Description"
                required
              ></input>
              <input
                type="text"
                class="input"
                placeholder="Technologies Used"
                onChange={(e) => settech(e.target.value)}
                required
              ></input>
              <input
                type="url"
                class="input"
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
                class="createbtn"
                value="Create Project"
              ></input>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdatePosts;
