import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Quiz = () => {
  const [quiz, setQuiz] = useState({ Questions: [] });
  const params = useParams();
  useEffect(() => {
    async function fetchQuiz() {
      const q = await axios(`http://localhost:3000/quizzes/${params.id}`, {
        headers: {
          token: localStorage.token,
        },
      });
      setQuiz(q.data);
    }
    fetchQuiz();
  }, []);
  console.log(quiz)
  return (
    <div className="">
      <h1 className="">{quiz.name} Quiz</h1>
      <p>{quiz.weight}%</p>
      <form
        action="http://localhost:3000/auth/success"
        id="quiz"
        method="POST"
        className=""
      >
        <ul>
          {quiz.Questions.map((q) => (
            <li>
              <h2 className="mb-4">{q.name}</h2>
              <ul>
                <li>
                  {q.Choices.map((c) => (
                    <div className="">
                      <input
                        className=""
                        type="radio"
                        name={"question_" + q.id}
                        required
                        id={c.id}
                        value={c.name}
                      />
                      <label
                        for={c.id}
                        className=""
                      >
                        {c.name}
                      </label>
                    </div>
                  ))}
                </li>
              </ul>
            </li>
          ))}
        </ul>
        <div className="flex justify-center">
          <button
            className="btn btn-primary"
            type="submit"
          >
            Submit Quiz
          </button>
        </div>
      </form>
    </div>
  );
};

export default Quiz;

{
  /* <form id="quiz">
<h1>{quiz.name} Quiz</h1>
<ul>
  {quiz.Questions.map((q) => (
    <li>
      <h3>{q.question}</h3>
      <ul>
        <li>
          {q.Choices.map((c) => (
            <div>
              <input type="radio" name={"question_" + q.id} required />
              <label>{c.label}</label>
            </div>
          ))}
        </li>
      </ul>
    </li>
  ))}
</ul>
<button type="submit">Submit Quiz</button>
</form> */
}
