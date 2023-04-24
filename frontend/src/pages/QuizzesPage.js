import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import queryString from "querystring";

const QuizzesPage = () => {
  const [quizzes, setQuizzes] = useState([]);
  useEffect(() => {
    async function fetchQuizzes() {
      const params = queryString.parse(
        window.location.search.replace(/^\?/, "")
      );
      const response = await axios("http://localhost:3000/quizzes", {
        headers: {
          token: localStorage.token,
        },
      });
      setQuizzes(response.data);
    }
    fetchQuizzes();
  }, []);
  return (
    <div className="text-center">
      <h1>Take a Quiz!</h1>
      <p>Choose a quiz below!</p>
      <div  className="list-container">
        <ul className="list-group list-group-flush">
          {quizzes.map((q) => (
            <li
              className="list-group-item justify-content-between align-items-center bg-success bg-opacity-10 p-3"
              key={q.id}
            >
              <Link
                to={"/quizzes/" + q.id}
                className="link-light decoration-none"
              >
                {q.name}
              </Link>
              <span class="badge badge-primary badge-pill">
                Weight: {q.weight}%
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default QuizzesPage;
