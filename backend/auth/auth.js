const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const Admin = require("../Models/adminModel");

const protect = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.ACCESS_TOKEN, async (err, data) => {
      if (err) {
        res.status(403);
        throw new Error(err);
      }
      if (data) {
        const adminData = await Admin.findOne({
          username: data.username,
        }).select("-password");
        req.user = adminData;
        next();
      }
    });
  }
  if (!token) {
    res.status(401);
    throw new Error("No Token Not Authorized");
  }
});
module.exports = protect;
