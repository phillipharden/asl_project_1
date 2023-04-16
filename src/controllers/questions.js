const express = require("express");
const router = express.Router();
const { Question } = require("../models");
const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: false }));

//* View the questions
//^ curl -H "accept: application/json" -X GET http://localhost:3000/questions
router.get("/", async (req, res) => {
  const questions = await Question.findAll();
  if (req.headers.accept.indexOf("/json") > -1) {
    res.json(questions);
  } else {
    res.render("question/index", { questions });
  }
});

//* Form
router.get("/new", (req, res) => {
  res.render("question/create");
});

//* Create a new question
//^ curl -H "accept: application/json" -X POST --data "name=New question" http://localhost:3000/questions
router.post("/", async (req, res) => {
  const { name } = req.body;
  const question = await Question.create({ name });
  if (req.headers.accept.indexOf("/json") > -1) {
    res.json(question);
  } else {
    res.redirect("/questions/" + question.id);
  }
});

//* View a single question by id
//^ curl -H "accept: application/json" -X GET http://localhost:3000/questions/9
router.get("/:id", async (req, res) => {
  const question = await Question.findByPk(req.params.id);
  if (req.headers.accept.indexOf("/json") > -1) {
    res.json(question);
  } else {
    res.render("question/show", { question });
  }
});

//* Form
router.get("/:id/edit", async (req, res) => {
  const question = await Question.findByPk(req.params.id);
  res.render("question/edit", { question });
});

//* Update/Edit a question by id
//^ curl -H "accept: application/json" -X POST --data "name=How Are you?" http://localhost:3000/questions/9
router.post("/:id", async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;
  const question = await Question.update(
    { name },
    {
      where: { id },
    }
  );
  if (req.headers.accept.indexOf("/json") > -1) {
    res.json(question);
  } else {
    res.redirect("/questions/" + id);
  }
});

//* Delete a question by id
//^ curl -H "accept: application/json" -X GET http://localhost:3000/questions/10/delete
router.get("/:id/delete", async (req, res) => {
  const { id } = req.params;
  const deleted = await Question.destroy({
    where: { id },
  });
  if (req.headers.accept.indexOf("/json") > -1) {
    res.json({'success': true});
  } else {
    res.redirect("/questions");
  }
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
