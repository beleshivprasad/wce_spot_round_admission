const express = require("express");
const { authAdmin } = require("../Controllers/adminController");
const router = express.Router();

router.route("/login").post(authAdmin);

module.exports = router;
