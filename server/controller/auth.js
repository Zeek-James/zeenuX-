const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");

// User Model
const User = require("../model/User");

exports.authUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    //   Simple validation
    if (!email || !password) {
      return res.status(400).json({ msg: "Please enter all fields" });
    }

    //   Check for existing user
    const user = await User.findOne({ email });

    if (!user)
      return res.status(400).json({
        msg: "User does not exist",
      });

    //   Validate password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) return res.status(400).json({ msg: "Invalid Credentials" });

    const token = await jwt.sign({ id: user.id }, config.get("jwtSecret"), {
      expiresIn: 3600,
    });

    return res.status(200).json({
      success: true,
      token,
      user,
    });
  } catch (err) {
    console.log(err)
  }
};

exports.getAuthUser = async (req, res, next) => {
  const user = await User.findById(req.user.id).select(" -password ");

  return res.status(200).json(user);
};
