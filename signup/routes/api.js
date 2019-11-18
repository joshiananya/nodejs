const express = require("express");
const User = require("../models/user_model");
const bycrypt = require("bcrypt");
const router = express.Router();

//add a new user to the database
router.post("/signup", function(req, res, next) {
  bycrypt.hash(req.body.password, 10, (err, hashedPassword) => {
    if (err) {
      return res.status(500).send({
        error: err
      });
    } else {
      const user = new User({
        email: req.body.email,
        password: hashedPassword,
        name: req.body.email,
        phone: req.body.phone,
        dob: req.body.dob,
        doj: req.body.doj
      });
      user
        .save()
        .then(result => {
          res.status(201).json({ message: "USER CREATED" });
        })
        .catch(err => {
          res.status(500).json({
            error: err.message
          });
        });
    }
  });
});
//save krne k baad then message krdiye aaya samjh?
module.exports = router;
