const express = require("express");
const User = require("../models/user_model");

const jwt = require("jsonwebtoken");
//Router Object
const router = express.Router();

router.get("/login", function(req, res) {
  User.find({}, { __v: 0 }).then(function(users) {
    res.send(users);
  });
});

//add a new user to the database
router.post("/login", function(req, res, next) {
  if (req.body.token == null) {
    const user = { id: 1523110022 };
    const token = jwt.sign({ user }, "anjani");
    res.json({ token: token });
  } else if (req.body.token == "aWQ6MTUyMzExMDAyMmFuamFuaQ==") {
    User.create(req.body)
      .then(function(user) {
        //Show it to the user
        res.send(user);
      })
      .catch(next);
  }
});

//update a ninja in the database
router.put("/users/:id", function(req, res) {
  //updated to db but to send it back to respond need to find it the updated one
  User.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function() {
    User.findOne({ _id: req.params.id }).then(function(user) {
      res.send(user);
    });
  });
});

//Delete a ninja from the database
router.delete("/users/:id", function(req, res, next) {
  Ninja.findByIdAndRemove({ _id: req.params.id })
    .then(function(user) {
      res.send(user);
    })
    .catch(next);
});

module.exports = router;
