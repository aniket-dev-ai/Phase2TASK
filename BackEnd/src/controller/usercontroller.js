const jwt = require("jsonwebtoken");
const userModel = require("../Model/userModel");
const bcrypt = require("bcrypt");

exports.signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    console.log(username, email, password);
    if (!username || !email || !password) {
      return res.status(400).json({ message: "Fill All Details" });
    }
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User Already Exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newuser = await userModel.create({
      username,
      email,
      password: hashedPassword,
    });
    await newuser.save();

    return res.status(200).json({ message: "User Created", newuser });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Fill All Details" });
    }
    const FindUser = await userModel.findOne({ email });
    if (!FindUser) {
      return res.status(400).json({ message: "User Not Found" });
    }
    const isMatch = await bcrypt.compare(password, FindUser.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Wrong Password" });
    }
    const token = jwt.sign({ id: FindUser._id }, process.env.JWT_SECRET);
    console.log(token);

    return res
      .status(200)
      .json({ message: "Successfully logged in", token, FindUser });
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};
