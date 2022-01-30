const asyncHandler = require("express-async-handler");
const Admin = require("../Models/adminModel");
const Student = require("../Models/studentModel");
const Vacancy = require("../Models/vacancyModel");
const bcrypt = require("bcryptjs");

const authAdmin = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400);
    throw new Error("Please Fill All the Fields");
  } else {
    const admin = await Admin.findOne({ username }).then((admin) => {
      if (password !== admin.password) {
        res.status(400);
        throw new Error("Wrong Password");
      }
      res.status(200).json(admin);
    });
  }
});

const fetchStudent = asyncHandler(async (req, res) => {
  const { branch } = req.body;
  if (branch) {
    const { student } = await Student.find({ branch })
      .sort({ percentile: -1 })
      .then((student) => {
        if (student) {
          res.status(200).json(student);
        } else {
          res.status(400);
          throw new Error("No Student has Registered Yet");
        }
      })
      .catch((error) => {
        throw new Error(error);
      });
  }
  const { student } = await Student.find({})
    .then((student) => {
      if (student) {
        res.status(200).json(student);
      } else {
        res.status(400);
        throw new Error("No Student has Registered Yet");
      }
    })
    .catch((error) => {
      throw new Error(error);
    });
});

const allotSeat = asyncHandler(async (req, res) => {
  const branch = [
    "cse",
    "it",
    "civil",
    "electronics",
    "electrical",
    "mechanical",
  ];
  for (let b of branch) {
    const studentData = await Student.find({ branch: b }).sort({
      percentile: -1,
    });
    const vacancyData = await Vacancy.findOne();
    if (studentData.length !== 0) {
      for (let student of studentData) {
        let str = `${student.quota}_${student.caste}_${student.branch}`;
        if (vacancyData[str] > 0 && student.paymentDone) {
          let _id = student.id;
          const allot = await Student.updateOne(
            { _id: student.id },
            { alloted: true }
          );
          const vac = await Vacancy.updateOne(
            { _id: "61e5a684f8e1199a5b608433" },
            {
              $set: { [`${str}`]: parseInt(vacancyData[str]) - 1 },
            }
          );
          // const data = await Student.findOne({
          //   _id,
          // });
          // console.log(data)
        }
      }
    }
  }
});

module.exports = { authAdmin, fetchStudent, allotSeat };

//cse,it,mechanical,electronics,electrical,civil
//open,sc,st,vjdt,ntb,ntc,ntd,obc,sebc,orphan
//g,l,pw,def
//let cse =  [g_open_cse,l_open_cse,pw_open_cse,def_open_cseg_sc_cse,gl_,g_orphan_cse]
//let electrical = [g_open_electrical.................,g_orphan_electrical]
