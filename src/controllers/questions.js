const express = require("express");
const router = express.Router();
const { Question } = require("../models");
const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: false }));

//* View the questions
//^ curl -X GET http://localhost:3000/questions
router.get("/", async (req, res) => {
  const questions = await Question.findAll();
  res.json(questions);
});

//* Create a new question
//^ curl -X POST --data "name=What is a RESTful API?" http://localhost:3000/questions
router.post("/", async (req, res) => {
  const { name } = req.body;
  const question = await Question.create({ name });
  res.json(question);
});

//* View a single question by id
//^ curl -X GET http://localhost:3000/questions/1
router.get("/:id", async (req, res) => {
  const question = await Question.findByPk(req.params.id);
  res.json(question);
});

//* Update/Edit a question by id
//^ curl -X POST --data "name=How Are you?" http://localhost:3000/questions/1
router.post("/:id", async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;
  const question = await Question.update(
    { name },
    {
      where: { id },
    }
  );
  res.json(question);
});

//* Delete a question by id
//^ curl -X DELETE http://localhost:3000/questions/4
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deleted = await Question.destroy({
    where: { id },
  });
  res.json({ deleted });
});

module.exports = router;


//^ Questions about RESTful APIs
//! curl -X POST --data "name=What is a RESTful API?" http://localhost:3000/questions
//! curl -X POST --data "name=What are the characteristics of a RESTful API?" http://localhost:3000/questions
//! curl -X POST --data "name=What are the six constraints of RESTful architecture?" http://localhost:3000/questions
//! curl -X POST --data "name=What are the HTTP methods used in a RESTful API?" http://localhost:3000/questions

//! curl -X POST --data "name=What is a resource in a RESTful API?" http://localhost:3000/questions
//! curl -X POST --data "name=What is the role of URI in a RESTful API?" http://localhost:3000/questions
//! curl -X POST --data "name=What is the difference between a URI and a URL?" http://localhost:3000/questions
//! curl -X POST --data "name=What is an endpoint in a RESTful API?" http://localhost:3000/questions
//! curl -X POST --data "name=What is a payload in a RESTful API?" http://localhost:3000/questions
//! curl -X POST --data "name=What is the difference between JSON and XML in a RESTful API?" http://localhost:3000/questions
//! curl -X POST --data "name=What are the advantages of using RESTful APIs?" http://localhost:3000/questions
