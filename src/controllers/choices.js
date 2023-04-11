const express = require("express");
const router = express.Router();
const { Choice } = require("../models");
const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: false }));

//* View the choices
//^ curl -X GET http://localhost:3000/choices
router.get("/", async (req, res) => {
  const choices = await Choice.findAll();
  res.json(choices);
});

//* Create a new choice
//^ curl -X POST --data "name=D" http://localhost:3000/choices
router.post("/", async (req, res) => {
  const { name } = req.body;
  const choice = await Choice.create({ name });
  res.json(choice);
});

//* View a single choice by id
//^ curl -X GET http://localhost:3000/choices/1
router.get("/:id", async (req, res) => {
  const choice = await Choice.findByPk(req.params.id);
  res.json(choice);
});

//* Update/Edit a choice by id
//^ curl -X POST --data "name=DD" http://localhost:3000/choices/1
router.post("/:id", async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;
  const choice = await Choice.update(
    { name },
    {
      where: { id },
    }
  );
  res.json(choice);
});

//* Delete a choice by id
//^ curl -X DELETE http://localhost:3000/choices/1
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deleted = await Choice.destroy({
    where: { id },
  });
  res.json({ deleted });
});

module.exports = router;


//^ Adding choices
//! curl -X POST --data "name=A" http://localhost:3000/choices
//! curl -X POST --data "name=B" http://localhost:3000/choices
//! curl -X POST --data "name=C" http://localhost:3000/choices