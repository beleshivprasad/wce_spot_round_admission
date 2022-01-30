const express = require("express");
const {
  authAdmin,
  fetchStudent,
  allotSeat,
} = require("../Controllers/adminController");
const router = express.Router();

router.route("/login").post(authAdmin);
router.route("/fetch").post(fetchStudent);
router.route("/allot").post(allotSeat);

module.exports = router;
