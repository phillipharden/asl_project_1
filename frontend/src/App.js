//  Template: https://startbootstrap.com/previews/modern-business
import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import QuizzesPage from "./pages/QuizzesPage";
import Login from "./Login";
import Quiz from "./pages/Quiz";
import queryString from "querystring";

const App = () => {
  const [jwt, setJwt] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    async function fetchJwt() {
      const params = queryString.parse(
        window.location.search.replace(/^\?/, "")
      );
      console.log(localStorage.token);
      localStorage.token = params.token;
      console.log(params.token);
      console.log(localStorage.token);
      const response = await axios("http://localhost:3000/auth/token/", {
        headers: {
          token: localStorage.token,
        },
      });
      console.log(loggedIn);
      console.log(response.data.name);
      if (response.data.name) {
        setLoggedIn(true);
      }
      setJwt(response.data.name);
    }
    fetchJwt();
  }, []);
  console.log(jwt);

  return (
    <div className="body">
      <Router>
        <Navbar isLoggedIn={loggedIn} />
        <div className="container-lg mt-5">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/QuizzesPage" element={<QuizzesPage />} />
            <Route exact path="/quizzes/:id" element={<Quiz />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;

// if (!jwt) {
//   return (
//     <div>
//       <Login />
//     </div>
//   );
// }

// return (
//   <Router>
//     <div className="App">
//       <Navbar isLoggedIn={jwt ? true : false} />
//       <Routes>
//         <Route exact path="/" element={<Home />} />
//         <Route exact path="/quizzes/:id" element={<Quiz />} />
//       </Routes>
//     </div>
//   </Router>
// );
