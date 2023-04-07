const express = require("express");
const router = express.Router();
let questions = require("../models/questions");
const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: false }));

//* View the questions
//^ curl -X GET http://localhost:3000/questions
router.get("/", (req, res) => {
  res.json(questions);
});

//* Create a new question
//^ curl -X POST --data "id=11&name=How%20can%20you%20secure%20RESTful%20web%20services?" http://localhost:3000/questions
router.post("/", (req, res) => {
  const { id, name } = req.body;
  questions.push({
    id: Number(id),
    name,
  });
  res.json(questions);
});

//* View a single question by id
//^ curl -X GET http://localhost:3000/questions/11
router.get("/:id", (req, res) => {
  const id = req.params.id;
  const question = questions.find((q) => q.id == id);
  res.json(question);
});

//* Update/Edit a question by id
//^ curl -X POST --data "id=1&name=Question%20one%20has%20now%20been%20changed,%20right?" http://localhost:3000/questions/1
router.post("/:id", (req, res) => {
  const id = Number(req.params.id);
  questions.map((q) => {
    if (id === q.id) {
      q.name = req.body.name;
    }
    return q;
  });
  res.json(questions);
});

//* Delete a question by id
//^ curl -X DELETE http://localhost:3000/questions/1
router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  questions = questions.filter((q) => q.id !== id);
  res.json(questions);
});

module.exports = router;