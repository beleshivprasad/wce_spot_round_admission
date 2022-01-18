const express = require("express");
const { authAdmin, fetchStudent } = require("../Controllers/adminController");
const router = express.Router();

router.route("/login").post(authAdmin);
router.route("/fetch").post(fetchStudent);

module.exports = router;
