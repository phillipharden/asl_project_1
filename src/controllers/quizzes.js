const express = require("express");
const router = express.Router();
const { Quiz } = require("../models");
const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: false }));

//* View the quizzes
//^ curl -X GET http://localhost:3000/quizzes
router.get("/", async (req, res) => {
  const quizzes = await Quiz.findAll();
  res.json(quizzes);
});

//* Create a new quiz
//^ curl -X POST --data "name=New%20Quiz" http://localhost:3000/quizzes
router.post("/", async (req, res) => {
  const { name } = req.body;
  const quiz = await Quiz.create({ name });
  res.json(quiz);
});

//* View a single Quiz by id
//^ curl -X GET http://localhost:3000/quizzes/1
router.get("/:id", async (req, res) => {
  const quiz = await Quiz.findByPk(req.params.id);
  res.json(quiz);
});

//* Update/Edit a quiz by id
//^ curl -X POST --data "name=Quiz%20Name%20Changed" http://localhost:3000/quizzes/1

router.post("/:id", async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;
  const quiz = await Quiz.update(
    { name },
    {
      where: { id },
    }
  );
  res.json(quiz);
});

//* Delete a quiz by id
//^ curl -X DELETE http://localhost:3000/quizzes/1
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deleted = await Quiz.destroy({
    where: { id },
  });
  res.json({ deleted });
});

module.exports = router;
