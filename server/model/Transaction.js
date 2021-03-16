const mongoose = require("mongoose");

const TransactionScehma = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Enter name..."],
  },

  text: {
    type: String,
    required: [true, "Please add some text"],
  },
  amount: {
    type: Number,
    required: [true, "Please add a positive or negative number"],
  },

  bank: {
    type: String,
  },

  createdAT: {
    type: Date,
    default: Date.now,
  },
});

TransactionScehma.set("timestamps", true);

module.exports = mongoose.model("Transaction", TransactionScehma);
