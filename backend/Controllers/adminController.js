const asyncHandler = require("express-async-handler");
const Admin = require("../Models/adminModel");
const Student = require("../Models/studentModel");
const Vacancy = require("../Models/vacancyModel");
const bcrypt = require("bcryptjs");

const generateToken = require("../auth/generateToken");
const encrypt = require("../utils/encrypt");
const decrypt = require("../utils/decrypt");

const authAdmin = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400);
    throw new Error("Please Fill All the Fields");
  } else {
    const adminData = await Admin.find({ username })
      .then((data) => {
        const admin = data[0];
        if (admin.length === 0) {
          res.status(400);
          throw new Error("No Admin Found");
        } else {
          decrypt(password, admin.password).then(async (isMatch) => {
            if (isMatch) {
              res.status(200).json({
                username: admin.username,
                isAdmin: admin.isAdmin,
                accessToken: await generateToken(admin.username),
              });
            } else {
              res.status(400);
              throw new Error("Wrong Password");
            }
          });
        }
      })
      .catch((error) => {
        res.status(400);
        throw new Error(error);
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
  } else {
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
  }
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
  let cse = [
    "g_open_cse",
    "l_open_cse",
    "pw_open_cse",
    "def_open_cse",
    "g_sc_cse",
    "l_sc_cse",
    "pw_sc_cse",
    "def_sc_cse",
    "g_st_cse",
    "l_st_cse",
    "pw_st_cse",
    "def_st_cse",
    "g_vjdt_cse",
    "l_vjdt_cse",
    "pw_vjdt_cse",
    "def_vjdt_cse",
    "g_ntb_cse",
    "l_ntb_cse",
    "pw_ntb_cse",
    "def_ntb_cse",
    "g_ntc_cse",
    "l_ntc_cse",
    "pw_ntc_cse",
    "def_ntc_cse",
    "g_ntd_cse",
    "l_ntd_cse",
    "pw_ntd_cse",
    "def_ntd_cse",
    "g_obc_cse",
    "l_obc_cse",
    "pw_obc_cse",
    "def_obc_cse",
    "g_sebc_cse",
    "l_sebc_cse",
    "pw_sebc_cse",
    "def_sebc_cse",
    "g_orphan_cse",
  ];
  let civil = [
    "g_open_civil",
    "l_open_civil",
    "pw_open_civil",
    "def_open_civil",
    "g_sc_civil",
    "l_sc_civil",
    "pw_sc_civil",
    "def_sc_civil",
    "g_st_civil",
    "l_st_civil",
    "pw_st_civil",
    "def_st_civil",
    "g_vjdt_civil",
    "l_vjdt_civil",
    "pw_vjdt_civil",
    "def_vjdt_civil",
    "g_ntb_civil",
    "l_ntb_civil",
    "pw_ntb_civil",
    "def_ntb_civil",
    "g_ntc_civil",
    "l_ntc_civil",
    "pw_ntc_civil",
    "def_ntc_civil",
    "g_ntd_civil",
    "l_ntd_civil",
    "pw_ntd_civil",
    "def_ntd_civil",
    "g_obc_civil",
    "l_obc_civil",
    "pw_obc_civil",
    "def_obc_civil",
    "g_sebc_civil",
    "l_sebc_civil",
    "pw_sebc_civil",
    "def_sebc_civil",
    "g_orphan_civil",
  ];
  let electrical = [
    "g_open_electrical",
    "l_open_electrical",
    "pw_open_electrical",
    "def_open_electrical",
    "g_sc_electrical",
    "l_sc_electrical",
    "pw_sc_electrical",
    "def_sc_electrical",
    "g_st_electrical",
    "l_st_electrical",
    "pw_st_electrical",
    "def_st_electrical",
    "g_vjdt_electrical",
    "l_vjdt_electrical",
    "pw_vjdt_electrical",
    "def_vjdt_electrical",
    "g_ntb_electrical",
    "l_ntb_electrical",
    "pw_ntb_electrical",
    "def_ntb_electrical",
    "g_ntc_electrical",
    "l_ntc_electrical",
    "pw_ntc_electrical",
    "def_ntc_electrical",
    "g_ntd_electrical",
    "l_ntd_electrical",
    "pw_ntd_electrical",
    "def_ntd_electrical",
    "g_obc_electrical",
    "l_obc_electrical",
    "pw_obc_electrical",
    "def_obc_electrical",
    "g_sebc_electrical",
    "l_sebc_electrical",
    "pw_sebc_electrical",
    "def_sebc_electrical",
    "g_orphan_electrical",
  ];
  let it = [
    "g_open_it",
    "l_open_it",
    "pw_open_it",
    "def_open_it",
    "g_sc_it",
    "l_sc_it",
    "pw_sc_it",
    "def_sc_it",
    "g_st_it",
    "l_st_it",
    "pw_st_it",
    "def_st_it",
    "g_vjdt_it",
    "l_vjdt_it",
    "pw_vjdt_it",
    "def_vjdt_it",
    "g_ntb_it",
    "l_ntb_it",
    "pw_ntb_it",
    "def_ntb_it",
    "g_ntc_it",
    "l_ntc_it",
    "pw_ntc_it",
    "def_ntc_it",
    "g_ntd_it",
    "l_ntd_it",
    "pw_ntd_it",
    "def_ntd_it",
    "g_obc_it",
    "l_obc_it",
    "pw_obc_it",
    "def_obc_it",
    "g_sebc_it",
    "l_sebc_it",
    "pw_sebc_it",
    "def_sebc_it",
    "g_orphan_it",
  ];
  let mechanical = [
    "g_open_mechanical",
    "l_open_mechanical",
    "pw_open_mechanical",
    "def_open_mechanical",
    "g_sc_mechanical",
    "l_sc_mechanical",
    "pw_sc_mechanical",
    "def_sc_mechanical",
    "g_st_mechanical",
    "l_st_mechanical",
    "pw_st_mechanical",
    "def_st_mechanical",
    "g_vjdt_mechanical",
    "l_vjdt_mechanical",
    "pw_vjdt_mechanical",
    "def_vjdt_mechanical",
    "g_ntb_mechanical",
    "l_ntb_mechanical",
    "pw_ntb_mechanical",
    "def_ntb_mechanical",
    "g_ntc_mechanical",
    "l_ntc_mechanical",
    "pw_ntc_mechanical",
    "def_ntc_mechanical",
    "g_ntd_mechanical",
    "l_ntd_mechanical",
    "pw_ntd_mechanical",
    "def_ntd_mechanical",
    "g_obc_mechanical",
    "l_obc_mechanical",
    "pw_obc_mechanical",
    "def_obc_mechanical",
    "g_sebc_mechanical",
    "l_sebc_mechanical",
    "pw_sebc_mechanical",
    "def_sebc_mechanical",
    "g_orphan_mechanical",
  ];
  let electronics = [
    "g_open_electronics",
    "l_open_electronics",
    "pw_open_electronics",
    "def_open_electronics",
    "g_sc_electronics",
    "l_sc_electronics",
    "pw_sc_electronics",
    "def_sc_electronics",
    "g_st_electronics",
    "l_st_electronics",
    "pw_st_electronics",
    "def_st_electronics",
    "g_vjdt_electronics",
    "l_vjdt_electronics",
    "pw_vjdt_electronics",
    "def_vjdt_electronics",
    "g_ntb_electronics",
    "l_ntb_electronics",
    "pw_ntb_electronics",
    "def_ntb_electronics",
    "g_ntc_electronics",
    "l_ntc_electronics",
    "pw_ntc_electronics",
    "def_ntc_electronics",
    "g_ntd_electronics",
    "l_ntd_electronics",
    "pw_ntd_electronics",
    "def_ntd_electronics",
    "g_obc_electronics",
    "l_obc_electronics",
    "pw_obc_electronics",
    "def_obc_electronics",
    "g_sebc_electronics",
    "l_sebc_electronics",
    "pw_sebc_electronics",
    "def_sebc_electronics",
    "g_orphan_electronics",
  ];
  for (let b of branch) {
    const studentData = await Student.find({ branch: b, alloted: false }).sort({
      percentile: -1,
    });
    if (studentData.length !== 0) {
      let newVac = 0;
      let tot = 0;
      for (let student of studentData) {
        const vacancyData = await Vacancy.findOne();
        let str = `${student.quota}_${student.caste}_${student.branch}`;
        if (vacancyData[str] > 0 && student.paymentDone && !student.alloted) {
          console.log("Under Strict Allotment");
          const allot = await Student.updateOne(
            { _id: student.id },
            { alloted: true }
          );
          if (parseInt(vacancyData[str]) > 0) {
            newVac = parseInt(vacancyData[str]) - 1;
          } else {
            newVac = 0;
          }
          if (parseInt(vacancyData[student.branch]) > 0) {
            tot = parseInt(vacancyData[student.branch]) - 1;
          } else {
            tot = 0;
          }
          const vac = await Vacancy.updateOne(
            { _id: "61f7bea19dda5bccf6aade77" },
            {
              $set: { [`${str}`]: newVac },
            }
          );
          const totVac = await Vacancy.updateOne(
            { _id: "61f7bea19dda5bccf6aade77" },
            {
              $set: { [`${student.branch}`]: tot },
            }
          );
        }
      }
    }
  }
  // for students whose category have no seat but the branch has vacant seats for other category
  for (let b of branch) {
    const studentData = await Student.find({ branch: b, alloted: false }).sort({
      percentile: -1,
    });
    if (studentData.length !== 0) {
      let newVac = 0;
      let tot = 0;
      for (let student of studentData) {
        const vacancyData = await Vacancy.findOne();

        let temp = [];
        if (student.branch === "cse") {
          temp = cse;
        } else if (student.branch === "it") {
          temp = it;
        } else if (student.branch === "civil") {
          temp = civil;
        } else if (student.branch === "electronics") {
          temp = electronics;
        } else if (student.branch === "mechanical") {
          temp = mechanical;
        } else if (student.branch === "electrical") {
          temp = electrical;
        }

        if (vacancyData[b] > 0 && student.paymentDone && !student.alloted) {
          console.log("Empty Seat Allotment");

          for (let str of temp) {
            const studData = await Student.find({
              branch: b,
              alloted: false,
            }).sort({
              percentile: -1,
            });
            if (parseInt(vacancyData[str]) > 0 && studData.length !== 0) {
              console.log(vacancyData[str], studData.length);
              // console.log(student, str, vacancyData[str]);
              const allot = await Student.updateOne(
                { _id: student.id },
                { alloted: true }
              );
              if (parseInt(vacancyData[str]) > 0) {
                newVac = parseInt(vacancyData[str]) - 1;
              } else {
                newVac = 0;
              }
              if (parseInt(vacancyData[student.branch]) > 0) {
                tot = parseInt(vacancyData[student.branch]) - 1;
              } else {
                tot = 0;
              }
              const vac = await Vacancy.updateOne(
                { _id: "61f7bea19dda5bccf6aade77" },
                {
                  $set: { [`${str}`]: newVac },
                }
              );
              const totVac = await Vacancy.updateOne(
                { _id: "61f7bea19dda5bccf6aade77" },
                {
                  $set: { [`${student.branch}`]: tot },
                }
              );
            }
          }
        }
      }
    }
  }
  res.status(200).json({ status: true });
});

const addAdmin = asyncHandler(async (req, res) => {
  const { username, password, cnfpassword } = req.body;
  if (!username || !password || !cnfpassword) {
    res.status(200);
    throw new Error("Please Fill All Fields");
  } else if (password !== cnfpassword) {
    res.status(200);
    throw new Error("Password Dont Match");
  } else {
    const adminData = await Admin.find({ username }).then((data) => {
      if (data.length !== 0) {
        res.status(400);
        throw new Error(`  Already Exists`);
      }
    });
    const admin = await Admin.create({
      username,
      password: await encrypt(password),
    })
      .then((admin) => {
        res.status(201).json(admin);
      })
      .catch((error) => {
        res.status(400);
        throw new Error(error);
      });
  }
});

module.exports = { authAdmin, fetchStudent, allotSeat, addAdmin };
