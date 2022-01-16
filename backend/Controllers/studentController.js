const asyncHandler = require("express-async-handler");
const Student = require("../Models/studentModel");

const registration = asyncHandler(async (req, res) => {
  const { fname, lname, email, phone, dob, percentile, cetID, caste } =
    req.body;
  console.log(req.body);

  if (
    !fname ||
    !lname ||
    !email ||
    !phone ||
    !dob ||
    !percentile ||
    !caste ||
    !cetID
  ) {
    res.status(400);
    throw new Error("Please Fill All the fields");
  } else {
    const studentExist = await Student.find({ $or: [{ cetID }, { email }] });
    console.log(studentExist);
    if (studentExist.length !== 0) {
      res.status(400);
      throw new Error("Student Already Registered");
    }
    const student = Student.create({
      fname,
      lname,
      email,
      phone,
      caste,
      dob,
      percentile,
      cetID,
    })
      .then((student) => {
        if (student) {
          res.status(200).json({
            id: student._id,
            fname: student.fname,
            lname: student.lname,
            email: student.email,
            phone: student.phone,
            percentile: student.percentile,
            cetID: student.cetID,
            caste: student.caste,
            isAdmin: student.isAdmin,
            paymentDone: student.paymentDone,
          });
        }
      })
      .catch((eror) => {
        res.status(400);
        throw new Error("Something Went Wrong");
      });
  }
});

const status = asyncHandler(async (req, res) => {
  const { fname, lname, cetID } = req.body;
  if (!fname || !lname || !cetID) {
    res.status(400);
    throw new Error("Please Fill All the Fields");
  } else {
    const student = await Student.findOne({
      $or: [{ fname }, { lname }, { cetID }],
    })
      .then((student) => {
        if (!student) {
          res.status(400);
          throw new Error("Register Yourself First");
        }
        res.json({ msg: "progress" });
      })
      .catch((error) => {
        throw new Error(error);
      });
  }
});

module.exports = { registration, status };
