const express = require("express");
const router = express.Router();

const { registration } = require("../Controllers/studentController");

router.route("/registration").post(registration);

module.exports = router;
