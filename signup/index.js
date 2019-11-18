const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

//set express app
const app = express();

//connect to mongoose
mongoose.connect("mongodb://localhost/users", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

//Middleware

//1. Use Express's own parser instead of Body parser for JSON data //Body Parser depreciated
app.use(express.json());

//2. Initialize Routes
app.use("/v2", require("./routes/user_route"));

//3. Error Handler
app.use(function(err, req, res, next) {
  res.status(422).send({
    error: err.message
  });
});

//Listen to the Server
app.listen(5000, function() {
  console.log("Listening");
});
