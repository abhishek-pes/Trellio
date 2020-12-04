import React, { useState, useEffect } from "react";
import SideNav from "./SideNav";
import "./Project.css";
import "./search.css"


function Post() {
  const [responses, setResponses] = useState([]);
  const [userdata, setuserdata] = useState([]);
  const [searchdata, setSearchData] = useState("");

  useEffect(() => {
    fetch("/api/auth", {
      method: "get",
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        //console.log(res)
        setuserdata(res);
      });
  }, []);

  let i = "";
  if (userdata) {
    i = userdata._id;
    localStorage.setItem("id", i);
  }

  useEffect(() => {
    fetch("/api/profile")
      .then((res) => res.json())
      .then((res) => setResponses(res));
  }, []);
  //console.log(responses)
  var search = responses
    .map((res) => res.techStack)
    .map((res) => res)
    .filter((s) => s.toLowerCase().includes(searchdata.toLowerCase()));
  search = Array.from( new Set(search))
  // console.log(search)
  // const finaldata = responses.filter((res)=> res.techStack == (search.map((s)=>s)) )
  // console.log(finaldata)

  //console.log("search query: "+ searchdata)
  // if(!searchdata)
  // {
  //   console.log("no search data")
  // }
  // else{
  //   console.log("search data")
  // }
  return (
    <div>
      <div className="header">
        <h1>Explore Projects</h1>
        <h3>Trellio.</h3>
      </div>
      <SideNav />
      <div className="wrap">
        <div className="search">
          <input className="searchTerm"
            type="text"
            placeholder="Search Based on Tech Stack (ex: js,python)"
            onChange={(e) => setSearchData(e.target.value)}
          ></input>

               <img src="https://www.flaticon.com/svg/static/icons/svg/93/93642.svg" className="searchButton" alt="logo_Search"></img>


        </div>
        </div>

      
      <div className="components">
      {!searchdata &&
        responses.map((response) => {
          const mailser = "mailto:" + response.user.email;
          return (
            <div className="cards5" key={response._id}>
              <div className="card4">
                <div className="details4">
                  <span>
                    <img src={response.user.avatar} alt="logo"></img>
                    <br></br>
                    author : {response.user.name}
                    <br></br>
                    posted on : {response.date}
                  </span>
                  <br></br>
                  <br></br>
                  <hr></hr>
                  <br></br>
                  <h2> {response.title} </h2>
                  <p> {response.desc} </p>
                  <p>Tech Stack: {response.techStack}</p>
                  <p>Rating : {response.rating}</p>
                  <hr></hr>
                  <div className="tags4">
                    <a href={mailser}>
                      <button className="random">Connect</button>
                    </a>
                    <a
                      href={response.git}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <button className="random">View Project</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        
      {
        // eslint-disable-next-line
        searchdata &&responses.filter((res) => res.techStack == search.map((s) => s)).map((response) => {
          const mailser = "mailto:" + response.user.email;
          return (
            <div className="cards5" key={response._id}>
              <div className="card4">
                <div className="details4">
                  <span>
                    <img src={response.user.avatar} alt="logo"></img>
                    <br></br>
                    author : {response.user.name}
                    <br></br>
                    posted on : {response.date}
                  </span>
                  <br></br>
                  <br></br>
                  <hr></hr>
                  <br></br>
                  <h2> {response.title} </h2>
                  <p> {response.desc} </p>
                  <p>Tech Stack: {response.techStack}</p>
                  <p>Rating : {response.rating}</p>
                  <hr></hr>
                  <div className="tags4">
                    <a href={mailser}>
                      <button className="random">Connect</button>
                    </a>
                    <a
                      href={response.git}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <button className="random">View Project</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
            })
      }
      </div>
      
    </div>
  );
}

export default Post;
