const bcrypt = require("bcryptjs");

const encrypt = async (givenPass) => {
  const salt = await bcrypt.genSalt(10);
  const hashPass = await bcrypt.hash(givenPass, salt);
  return hashPass;
};


module.exports = encrypt;