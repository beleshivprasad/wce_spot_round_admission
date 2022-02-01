const bcrypt = require("bcryptjs");

const decrypt = async (pass1, pass2) => {
  return await bcrypt.compare(pass1, pass2);
};

module.exports = decrypt;
