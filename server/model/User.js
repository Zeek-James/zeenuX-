const mongoose = require("mongoose");

const UserScehma = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Enter name..."],
  },

  email: {
    type: String,
    required: [true, "Please enter email..."],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please enter password"],
  },

  register_date: {
    type: Date,
    default: Date.now,
  },
});


module.exports = mongoose.model("User", UserScehma);
