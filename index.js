const express = require("express");
const app = express();
const quizzesCtrl = require("./src/controllers/quizzes");

// GET / HTTP/1.1
app.get("/", (request, response) => {
  response.send("Hello World");
});

app.use("/quizzes", quizzesCtrl);

app.listen(3000); // http://localhost:3000/ in the web browser
