import React, { useState, useEffect } from "react";
import SideNav from "./SideNav";
import "./Learn.css";
import "./search.css"


function Post() {
  const [responses, setResponses] = useState([]);
  const [userdata, setuserdata] = useState([]);
  const [searchdata, setSearchData] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/auth", {
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
    fetch("http://localhost:5000/api/profile")
      .then((res) => res.json())
      .then((res) => setResponses(res));
  }, []);
  //console.log(responses)
  const search = responses
    .map((res) => res.techStack)
    .map((res) =>  res)
    .filter((s) => s.includes(searchdata));
  //  const  search1 = search.map((s) => s.toLowerCase() )
  // console.log(search1)
  // const finaldata = responses.filter((res)=> toString(res.techStack).toLowerCase() == (search1.map((s)=>s)) )
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

               <img src="https://www.flaticon.com/svg/static/icons/svg/93/93642.svg" className="searchButton" alt="logo"></img>


        </div>
        </div>

      
      <div className="components">
      {!searchdata &&
        responses.map((response) => {
          const mailser = "mailto:" + response.user.email;
          return (
            <div className="cards" key={response._id}>
              <div className="card card1">
                <div className="details">
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
                  <h3> {response.desc} </h3>
                  <h3>Tech Stack: {response.techStack}</h3>
                  <h3>Rating : {response.rating}</h3>
                  <hr></hr>
                  <div className="tags">
                    <a href={mailser}>
                      <button className="Visitbtn">Connect</button>
                    </a>
                    <a
                      href={response.git}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <button className="Visitbtn">View Project</button>
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
                <div className="cards" key={response._id}>
                  <div className="card card1">
                    <div className="details">
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
                      <h3> {response.desc} </h3>
                      <h3>Tech Stack: {response.techStack}</h3>
                      <h3>Rating : {response.rating}</h3>
                      <hr></hr>
                      <div className="tags">
                        <a href={mailser}>
                          <button className="Visitbtn">Connect</button>
                        </a>
                        <a
                          href={response.git}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <button className="Visitbtn">View Project</button>
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
