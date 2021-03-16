const express = require("express");
const auth = require("../controller/middleware/auth");
const {
  getTransactions,
  addTransaction,
  deleteTransaction,
} = require("../controller/transaction");
const router = express.Router();

router.route("/").get(getTransactions).post(auth, addTransaction);

router.route("/:id").delete(auth, deleteTransaction);

module.exports = router;
