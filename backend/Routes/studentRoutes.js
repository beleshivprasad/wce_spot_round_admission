const express = require("express");
const router = express.Router();

const {
  registration,
  checkstatus,
  getMerit,
  createOrder,
  fetchPayment,
  updatePaymentInfo,
} = require("../Controllers/studentController");

router.route("/registration").post(registration);
router.route("/status").post(checkstatus);
router.route("/getmerit").post(getMerit);
router.route("/razorpay").post(createOrder);
router.route("/fetch").post(fetchPayment);
router.route("/updatepayment").post(updatePaymentInfo);

module.exports = router;
