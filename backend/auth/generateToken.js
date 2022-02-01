const jwt = require("jsonwebtoken");

const generateToken = async (username) => {
  return jwt.sign({ username }, process.env.ACCESS_TOKEN);
};

module.exports = generateToken;
