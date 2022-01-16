const asyncHandler = require("express-async-handler");
const Admin = require("../Models/adminModel");
const bcrypt = require("bcryptjs");

const authAdmin = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400);
    throw new Error("Please Fill All the Fields");
  } else {
    const admin = await Admin.findOne({ username }).then((admin) => {
      if (password !== admin.password) {
        res.status(400);
        throw new Error("Wrong Password");
      }
      res.status(200).json({ admin });
    });
  }
});

module.exports = { authAdmin };

