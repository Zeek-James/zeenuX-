const User = require("../model/User");
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");

exports.createUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    //   Simple validation
    if (!name || !email || !password) {
      return res.status(400).json({ msg: "Please enter all fields" });
    }

    //   Check for existing user
    const user = await User.findOne({ email });

    if (user)
      return res.status(400).json({
        msg: "User already exists",
      });

    //   Create salt & hash
    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    const data = await newUser.save();

    const token = await jwt.sign({ id: data.id }, config.get("jwtSecret"), {
      expiresIn: 3600,
    });

    return res.status(200).json({
      success: true,
      token,
      data,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};
