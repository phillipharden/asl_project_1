const express = require("express");
const router = express.Router();
let quizzes = require("../models/quizzes");
const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: false }));

//* View the quizzes
//^ curl -X GET http://localhost:3000/quizzes
router.get("/", (req, res) => {
  res.json(quizzes);
});

//* Create a new quiz
//^ curl -X POST --data "id=5&name=ASL%20Quiz%20Five" http://localhost:3000/quizzes
router.post("/", (req, res) => {
  const { id, name } = req.body;
  quizzes.push({
    id: Number(id),
    name,
  });
  res.json(quizzes);
});

//* View a single Quiz by id
//^ curl -X GET http://localhost:3000/quizzes/1
router.get("/:id", (req, res) => {
  const id = req.params.id;
  const quiz = quizzes.find((q) => q.id == id);
  res.json(quiz);
});

//* Update/Edit a quiz by id
//^ curl -X POST --data "id=1&name=ASL%20Quiz%20One%20is%20changed" http://localhost:3000/quizzes/1
router.post("/:id", (req, res) => {
  const id = Number(req.params.id);
  quizzes.map((q) => {
    if (id === q.id) {
      q.name = req.body.name;
    }
    return q;
  });
  res.json(quizzes);
});

//* Delete a quiz by id
//^ curl -X DELETE http://localhost:3000/quizzes/1
router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  quizzes = quizzes.filter((q) => q.id !== id);
  res.json(quizzes);
});

module.exports = router;