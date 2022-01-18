const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const studentSchema = new mongoose.Schema(
  {
    fname: {
      type: String,
      required: true,
    },
    lname: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    dob: {
      type: Date,
      required: true,
    },
    cetID: {
      type: String,
      required: true,
    },
    percentile: {
      type: String,
      required: true,
    },
    quota: {
      type: String,
      required: true,
    },
    caste: {
      type: String,
      required: true,
    },
    branch: {
      type: String,
      required: true,
    },
    alloted: {
      type: Boolean,
      default: false,
    },
    paymentDone: {
      type: Boolean,
      default: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;
