const express = require("express");
const router = express.Router();

const {
  registration,
  checkstatus,
  getMerit,
  razorpay,
} = require("../Controllers/studentController");

router.route("/registration").post(registration);
router.route("/status").post(checkstatus);
router.route("/getmerit").post(getMerit);
router.route("/razorpay").post(razorpay);

module.exports = router;
