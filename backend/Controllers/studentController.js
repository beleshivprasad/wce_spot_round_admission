const asyncHandler = require("express-async-handler");
const Student = require("../Models/studentModel");
const Vacancy = require("../Models/vacancyModel");

const registration = asyncHandler(async (req, res) => {
  const {
    fname,
    lname,
    email,
    phone,
    dob,
    percentile,
    cetID,
    branch,
    quota,
    caste,
  } = req.body;

  if (
    !fname ||
    !lname ||
    !email ||
    !phone ||
    !quota ||
    !dob ||
    !branch ||
    !percentile ||
    !caste ||
    !cetID
  ) {
    res.status(400);
    throw new Error("Please Fill All the fields");
  } else {
    let str = `${quota}_${caste}_${branch}`;
    const vac = await Vacancy.find({});
    if (vac[0][str] === "0") {
      res.status(400);
      throw new Error("No Vacant Seat for this Application");
    } else {
      const studentExist = await Student.find({ $or: [{ cetID }, { email }] });
      if (studentExist.length !== 0) {
        res.status(400);
        throw new Error("Student Already Registered");
      } else {
        const student = Student.create({
          fname,
          lname,
          email,
          phone,
          dob,
          caste,
          quota,
          percentile,
          cetID,
          branch,
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
                quota: student.quota,
                branch: student.branch,
                caste: student.caste,
                isAdmin: student.isAdmin,
                paymentDone: student.paymentDone,
              });
            }
          })
          .catch((error) => {
            res.status(400);
            throw new Error(error);
          });
      }
    }
  }
});

const checkstatus = asyncHandler(async (req, res) => {
  const { fname, lname, cetID } = req.body;
  if (!fname || !lname || !cetID) {
    res.status(400);
    throw new Error("Please Fill All the Fields");
  } else {
    const student = await Student.findOne({
      $and: [{ fname }, { lname }, { cetID }],
    })
      .then((student) => {
        if (!student) {
          res.status(400);
          throw new Error("Register Yourself First");
        }
        res.status(200).json(student);
      })
      .catch((error) => {
        throw new Error(error);
      });
  }
});

module.exports = { registration, checkstatus };
