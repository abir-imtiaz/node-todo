const express = require("express");
const uuid = require("uuid");
const router = express.Router();

const users = require("../../UserData");

// get users
router.get("/", (req, res) => {
  res.json(users);
});

// get single user
router.get("/:id", (req, res) => {
  const found = users.some((user) => user.id == req.params.id);
  if (found) {
    res.json(users.filter((user) => user.id == req.params.id));
  } else {
    res.status(400).json({ msg: `No user with the id of ${req.params.id}` });
  }
});

// create user
router.post("/create", (req, res) => {
  const newUser = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
  };
  res.send(req.body);
});

module.exports = router;
