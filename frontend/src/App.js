import "./App.css";
import React, { useState, useEffect } from "react";
//import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import Navigation from "./Navigation";
import Home from "./Home";
import Login from "./Login";
import Quiz from "./Quiz";
//import queryString from "querystring";




const App = () => {
  const [ accessToken, setAccessToken ] = useState("")

  const [rerender, setRerender] = useState(false); // Boolean
  const [userData, setUserData] = useState({}); // Object


  useEffect(() => {
    // localhost:3000/?code=j34hjtb3j4hbj3h4bjh3
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const codeParam = urlParams.get("code");
    console.log(codeParam);

    if (codeParam && localStorage.getItem("accessToken") === null) {
      async function getAccessToken() {
        await fetch("http://localhost:4000/getAccessToken?code=" + codeParam, {
          method: "GET",
        })
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log(data);
            if (data.access_token) {
              localStorage.setItem("accessToken", data.access_token);
              setRerender(!rerender);
            }
          });
      }
      getAccessToken();
    }
  }, []);




  // useEffect(() => {
  //   console.log(localStorage.token)  
  //   async function fetchAccessToken() {
  //     const params = queryString.parse(
  //       window.location.search.replace(/^\?/, "")
  //     );
  //     localStorage.token = params.code;
  //     const response = await axios("http://localhost:3000/auth/token/", {
  //       headers: {
  //         token: localStorage.token,
  //       },
  //     });
  //     setAccessToken(localStorage.token);
  //   }
  //   fetchAccessToken();
  //   setAccessToken(localStorage.token);
  //   console.log(localStorage.token)
  // }, []);


  async function getUserData() {
    await fetch("http://localhost:4000/getUserData", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"), // Bearer ACCESSTOKEN
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("User data below");
        console.log(data);
        // User data in Json format
        setUserData(data);
      });
  }



  return (
    <div className="App">
      {localStorage.getItem("accessToken") ? (
        <>
          <h1>We have the access token</h1>
          <button
            className="btn btn-primary mt-5 mx-1"
            onClick={() => {
              localStorage.removeItem("accessToken");
              setRerender(!rerender);
            }}
          >
            Log Out
          </button>
          <h3>Get data from api</h3>
          <button className="btn btn-primary mt-5" onClick={getUserData}>
            Get User Data
          </button>
          {Object.keys(userData).length !== 0 ? (
            <>
              <h3>Hello {userData.login}</h3>
              <img width="100px" height="100px" src={userData.avatar_url}></img>
              <a href={userData.html_url}>Link to the GitHub profile</a>
            </>
          ) : (
            <></>
          )}
        </>
      ) : (
        <>
          <Login />
        </>
      )}
    </div>
  );



  // if (!accessToken) {
  //   return (
  //     <>
  //       <Login />
  //       <p>Hello {accessToken}</p>
  //     </>
  //   );
  // }

  // if (accessToken){
  //   return (
  //     <Router>
  //       <div className="App">
  //         {/* <Navigation isLoggedIn={jwt ? true : false} /> */}
  //         <Routes>
  //           <Route exact path="/" element={<Home />} />
  //           <Route exact path="/quizzes/:id" element={<Quiz />} />
  //         </Routes>
  //         <p>Hello {accessToken}</p>
  //         <button
  //             className="btn btn-primary mt-5 mx-1"
  //             onClick={() => {
  //               localStorage.removeItem("token");
  //               setAccessToken("");
  //             }}
  //           >
  //             Log Out
  //           </button>
  
  //       </div>
  //     </Router>
  //   );
  // }

 
};

export default App;
