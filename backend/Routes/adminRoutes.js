const express = require("express");
const protect = require("../auth/auth");
const {
  authAdmin,
  fetchStudent,
  allotSeat,
  addAdmin,
} = require("../Controllers/adminController");
const router = express.Router();

router.route("/login").post(authAdmin);
router.route("/fetch").post(protect, fetchStudent);
router.route("/allot").post(protect, allotSeat);
router.route("/add").post(protect, addAdmin);

module.exports = router;
