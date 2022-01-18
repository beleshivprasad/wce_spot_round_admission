const express = require("express");
const router = express.Router();

const {
  registration,
  checkstatus,
} = require("../Controllers/studentController");

router.route("/registration").post(registration);
router.route("/status").post(checkstatus);

module.exports = router;
