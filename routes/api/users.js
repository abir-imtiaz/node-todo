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
    country: req.body.country,
  };
  users.push(newUser);
  res.json(users);
});

// update user
router.put("/update/:id", (req, res) => {
  const found = users.some((user) => user.id == req.params.id);
  if (found) {
    const updateUsr = req.body;
    users.forEach((user) => {
      if (user.id == req.params.id) {
        user.name = updateUsr.name ? updateUsr.name : user.name;
        user.email = updateUsr.email ? updateUsr.email : user.email;
        user.country = updateUsr.country ? updateUsr.country : user.country;

        res.json({ msg: "Updated user", user });
      }
    });
  } else {
    res.status(400).json({ msg: `No user with the id of ${req.params.id}` });
  }
});

// remove user
router.delete("/delete/:id", (req, res) => {
  const found = users.some((user) => user.id == req.params.id);
  if (found) {
    res.json({
      msg: "user deleted",
      users: users.filter((user) => user.id != req.params.id),
    });
  } else {
    res.status(400).json({ msg: `No user with the id of ${req.params.id}` });
  }
});

module.exports = router;
