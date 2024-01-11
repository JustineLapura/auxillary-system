const User = require("../models/user");
// GET Users
const getUsers = async (req, res) => {
  const users = await User.find({}).sort({ createdAt: -1 });
  res.status(200).json(users);
};

module.exports = { getUsers };
