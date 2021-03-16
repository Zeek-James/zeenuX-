const express = require("express");
const {authUser, getAuthUser} = require("../controller/auth");
const router = express.Router();
const auth = require("../controller/middleware/auth");



router.route('/').post(authUser);
router.route('/user').get(auth, getAuthUser);

module.exports = router;
