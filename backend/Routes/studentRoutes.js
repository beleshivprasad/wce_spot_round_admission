const express = require("express");
const router = express.Router();

const {
  registration,
  checkstatus,
  getMerit,
} = require("../Controllers/studentController");

router.route("/registration").post(registration);
router.route("/status").post(checkstatus);
router.route("/getmerit").post(getMerit);

module.exports = router;
