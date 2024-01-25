const bcrypt = require("bcrypt");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

// LOGIN User
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  let emptyFields = [];
  if (!email) {
    emptyFields.push("email");
  }
  if (!password) {
    emptyFields.push("password");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "You must fill in all the fields", emptyFields });
  }

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).json({ error: "Incorrect email" });
  }

  const correctPassword = await bcrypt.compare(password, user.password);

  if (!correctPassword) {
    return res.status(400).json({ error: "Incorrect password" });
  }

  try {
    const token = createToken(user._id);

    res.status(200).json({ user, token });
  } catch (error) {
    res.status(400).json(error);
  }
};

// Signup User
const signupUser = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    address,
    phoneNumber,
    password,
    passwordConfirm,
  } = req.body;

  let emptyFields = [];

  if (!firstName) {
    emptyFields.push("firstName");
  }
  if (!lastName) {
    emptyFields.push("lastName");
  }
  if (!email) {
    emptyFields.push("email");
  }
  if (!address) {
    emptyFields.push("address");
  }
  if (!phoneNumber) {
    emptyFields.push("phoneNumber");
  }
  if (!password) {
    emptyFields.push("password");
  }
  if (!passwordConfirm) {
    emptyFields.push("passwordConfirm");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "You must fill in all the fields", emptyFields });
  }

  // Check if password and passwordConfirm match
  if (password !== passwordConfirm) {
    return res.status(400).json({ error: "Passwords do not match" });
  }

  // Validate phone number: accept only numbers and require a minimum length of 10
  const isValidPhoneNumber = /^\d{10}$/.test(phoneNumber);
  if (!isValidPhoneNumber) {
    return res.status(400).json({ error: "Invalid phone number format" });
  }

  const emailExists = await User.findOne({ email });
  if (emailExists) {
    return res.status(400).json({ error: "email already in use" });
  }

  // Validation
  if (!validator.isEmail(email)) {
    return res.status(400).json({ error: "Email is not valid" });
  }

  if (!validator.isStrongPassword(password)) {
    return res.status(400).json({ error: "Password not strong enough" });
  }

  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await User.create({
      firstName,
      lastName,
      email,
      address,
      phoneNumber,
      password: hash,
    });

    const token = createToken(user._id);
    res.status(200).json({ user, token });
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = { loginUser, signupUser };
