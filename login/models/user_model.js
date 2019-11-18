const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create User Schema and model
const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name field is required"]
  },
  email: {
    type: String,
    required: [true, "email field is required"]
  },
  token: {
    type: String
  },
  phone: {
    type: Number,
    required: [true, "phone field is required"]
  },
  //
  password: {
    type: String
  }
  // doj: {
  //   type: Boolean,
  //   default: false
  // }
  // }dob: {
  // //   type: Date,
  // //   required: [true, "dob is required"]
  // // },
});

//here user is the name of the database_table and UserSchema is assigned to the table
const User = mongoose.model("user", UserSchema);

module.exports = User;
