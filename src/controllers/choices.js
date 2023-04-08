const express = require("express");
const router = express.Router();
let choices = require("../models/choices");
const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: false }));

//* View the choices
//^ curl -X GET http://localhost:3000/choices
router.get("/", (req, res) => {
  res.json(choices);
});

//* Create a new choice
//^ curl -X POST --data "id=6&name=F" http://localhost:3000/choices
router.post("/", (req, res) => {
  const { id, name } = req.body;
  choices.push({
    id: Number(id),
    name,
  });
  res.json(choices);
});

//* View the a choice by id
//^ curl -X GET http://localhost:3000/choices/1
router.get("/:id", (req, res) => {
  const id = req.params.id;
  const choice = choices.find((c) => c.id == id);

  res.json(choice);
});

//* Update/edit a choice by id
//^ curl -X POST --data "id=1&name=AAA" http://localhost:3000/choices/1
router.post("/:id", (req, res) => {
  const id = Number(req.params.id);
  choices.map((c) => {
    if (id === c.id) {
      c.name = req.body.name;
    }
    return c;
  });
  res.json(choices);
});

//* Delete the choice by id
//^ curl -X DELETE http://localhost:3000/choices/1
router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  choices = choices.filter((c) => c.id !== id);
  res.json(choices);
});

module.exports = router;