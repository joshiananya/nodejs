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
      const insertData = new User({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        password: hashedPassword,
        dob: req.body.dob,
        doj: req.body.doj
      });
      User.create(insertData)
        .then(function(responseData) {
          //Show it to the user
          res.send(responseData);
        })
        .catch(next);
    }
  });
});
//save krne k baad then message krdiye aaya samjh?
module.exports = router;
