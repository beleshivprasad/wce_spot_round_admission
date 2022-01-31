const asyncHandler = require("express-async-handler");
const Vacancy = require("../Models/vacancyModel");

const updateVacancy = asyncHandler(async (req, res) => {
  let { branch, seat, quota, caste } = req.body;

  if (!branch || !seat || !caste || !quota) {
    res.status(400);
    throw new Error("Please fill all the fields");
  } else {
    const vac = await Vacancy.find({});

    if (vac.length === 0) {
      const createVac = await Vacancy.create({});
      let str = `${quota}_${caste}_${branch}`;
      const data = await Vacancy.findOneAndUpdate(
        { _id: "61f7bea19dda5bccf6aade77" },
        {
          $set: { [`${str}`]: seat },
        }
      )
        .then((data) => {
          if (data) {
            res.status(200).json(data);
          }
        })
        .catch((error) => {
          res.status(400);
          throw new Error(error);
        });
    } else {
      newVac = 0;
      let str = `${quota}_${caste}_${branch}`;
      const vacData = await Vacancy.findOneAndUpdate(
        { _id: "61f7bea19dda5bccf6aade77" },
        {
          $set: { [`${str}`]: seat },
        }
      )
        .then(async (updateSeat) => {
          const data = await Vacancy.findOne({
            _id: "61f7bea19dda5bccf6aade77",
          });
          if (branch === "cse") {
            newVac =
              parseInt(data.g_open_cse) +
              parseInt(data.l_open_cse) +
              parseInt(data.g_sc_cse) +
              parseInt(data.l_sc_cse) +
              parseInt(data.g_st_cse) +
              parseInt(data.l_st_cse) +
              parseInt(data.g_vjdt_cse) +
              parseInt(data.l_vjdt_cse) +
              parseInt(data.g_ntb_cse) +
              parseInt(data.l_ntb_cse) +
              parseInt(data.g_ntc_cse) +
              parseInt(data.l_ntc_cse) +
              parseInt(data.g_ntd_cse) +
              parseInt(data.l_ntd_cse) +
              parseInt(data.g_obc_cse) +
              parseInt(data.l_obc_cse) +
              parseInt(data.g_sebc_cse) +
              parseInt(data.l_sebc_cse) +
              parseInt(data.g_orphan_cse) +
              parseInt(data.pw_open_cse) +
              parseInt(data.def_open_cse) +
              parseInt(data.pw_sc_cse) +
              parseInt(data.def_sc_cse) +
              parseInt(data.pw_st_cse) +
              parseInt(data.def_st_cse) +
              parseInt(data.pw_vjdt_cse) +
              parseInt(data.def_vjdt_cse) +
              parseInt(data.pw_ntb_cse) +
              parseInt(data.def_ntb_cse) +
              parseInt(data.pw_ntc_cse) +
              parseInt(data.def_ntc_cse) +
              parseInt(data.pw_ntd_cse) +
              parseInt(data.def_ntd_cse) +
              parseInt(data.pw_obc_cse) +
              parseInt(data.def_obc_cse) +
              parseInt(data.pw_sebc_cse) +
              parseInt(data.def_sebc_cse);
          } else if (branch === "it") {
            newVac =
              parseInt(data.g_open_it) +
              parseInt(data.l_open_it) +
              parseInt(data.g_sc_it) +
              parseInt(data.l_sc_it) +
              parseInt(data.g_st_it) +
              parseInt(data.l_st_it) +
              parseInt(data.g_vjdt_it) +
              parseInt(data.l_vjdt_it) +
              parseInt(data.g_ntb_it) +
              parseInt(data.l_ntb_it) +
              parseInt(data.g_ntc_it) +
              parseInt(data.l_ntc_it) +
              parseInt(data.g_ntd_it) +
              parseInt(data.l_ntd_it) +
              parseInt(data.g_obc_it) +
              parseInt(data.l_obc_it) +
              parseInt(data.g_sebc_it) +
              parseInt(data.l_sebc_it) +
              parseInt(data.g_orphan_it) +
              parseInt(data.pw_open_it) +
              parseInt(data.def_open_it) +
              parseInt(data.pw_sc_it) +
              parseInt(data.def_sc_it) +
              parseInt(data.pw_st_it) +
              parseInt(data.def_st_it) +
              parseInt(data.pw_vjdt_it) +
              parseInt(data.def_vjdt_it) +
              parseInt(data.pw_ntb_it) +
              parseInt(data.def_ntb_it) +
              parseInt(data.pw_ntc_it) +
              parseInt(data.def_ntc_it) +
              parseInt(data.pw_ntd_it) +
              parseInt(data.def_ntd_it) +
              parseInt(data.pw_obc_it) +
              parseInt(data.def_obc_it) +
              parseInt(data.pw_sebc_it) +
              parseInt(data.def_sebc_it);
          } else if (branch === "civil") {
            newVac =
              parseInt(data.g_open_civil) +
              parseInt(data.l_open_civil) +
              parseInt(data.g_sc_civil) +
              parseInt(data.l_sc_civil) +
              parseInt(data.g_st_civil) +
              parseInt(data.l_st_civil) +
              parseInt(data.g_vjdt_civil) +
              parseInt(data.l_vjdt_civil) +
              parseInt(data.g_ntb_civil) +
              parseInt(data.l_ntb_civil) +
              parseInt(data.g_ntc_civil) +
              parseInt(data.l_ntc_civil) +
              parseInt(data.g_ntd_civil) +
              parseInt(data.l_ntd_civil) +
              parseInt(data.g_obc_civil) +
              parseInt(data.l_obc_civil) +
              parseInt(data.g_sebc_civil) +
              parseInt(data.l_sebc_civil) +
              parseInt(data.g_orphan_civil) +
              parseInt(data.pw_open_civil) +
              parseInt(data.def_open_civil) +
              parseInt(data.pw_sc_civil) +
              parseInt(data.def_sc_civil) +
              parseInt(data.pw_st_civil) +
              parseInt(data.def_st_civil) +
              parseInt(data.pw_vjdt_civil) +
              parseInt(data.def_vjdt_civil) +
              parseInt(data.pw_ntb_civil) +
              parseInt(data.def_ntb_civil) +
              parseInt(data.pw_ntc_civil) +
              parseInt(data.def_ntc_civil) +
              parseInt(data.pw_ntd_civil) +
              parseInt(data.def_ntd_civil) +
              parseInt(data.pw_obc_civil) +
              parseInt(data.def_obc_civil) +
              parseInt(data.pw_sebc_civil) +
              parseInt(data.def_sebc_civil);
          } else if (branch === "electronics") {
            newVac =
              parseInt(data.g_open_electronics) +
              parseInt(data.l_open_electronics) +
              parseInt(data.g_sc_electronics) +
              parseInt(data.l_sc_electronics) +
              parseInt(data.g_st_electronics) +
              parseInt(data.l_st_electronics) +
              parseInt(data.g_vjdt_electronics) +
              parseInt(data.l_vjdt_electronics) +
              parseInt(data.g_ntb_electronics) +
              parseInt(data.l_ntb_electronics) +
              parseInt(data.g_ntc_electronics) +
              parseInt(data.l_ntc_electronics) +
              parseInt(data.g_ntd_electronics) +
              parseInt(data.l_ntd_electronics) +
              parseInt(data.g_obc_electronics) +
              parseInt(data.l_obc_electronics) +
              parseInt(data.g_sebc_electronics) +
              parseInt(data.l_sebc_electronics) +
              parseInt(data.g_orphan_electronics) +
              parseInt(data.pw_open_electronics) +
              parseInt(data.def_open_electronics) +
              parseInt(data.pw_sc_electronics) +
              parseInt(data.def_sc_electronics) +
              parseInt(data.pw_st_electronics) +
              parseInt(data.def_st_electronics) +
              parseInt(data.pw_vjdt_electronics) +
              parseInt(data.def_vjdt_electronics) +
              parseInt(data.pw_ntb_electronics) +
              parseInt(data.def_ntb_electronics) +
              parseInt(data.pw_ntc_electronics) +
              parseInt(data.def_ntc_electronics) +
              parseInt(data.pw_ntd_electronics) +
              parseInt(data.def_ntd_electronics) +
              parseInt(data.pw_obc_electronics) +
              parseInt(data.def_obc_electronics) +
              parseInt(data.pw_sebc_electronics) +
              parseInt(data.def_sebc_electronics);
          } else if (branch === "electrical") {
            newVac =
              parseInt(data.g_open_electrical) +
              parseInt(data.l_open_electrical) +
              parseInt(data.g_sc_electrical) +
              parseInt(data.l_sc_electrical) +
              parseInt(data.g_st_electrical) +
              parseInt(data.l_st_electrical) +
              parseInt(data.g_vjdt_electrical) +
              parseInt(data.l_vjdt_electrical) +
              parseInt(data.g_ntb_electrical) +
              parseInt(data.l_ntb_electrical) +
              parseInt(data.g_ntc_electrical) +
              parseInt(data.l_ntc_electrical) +
              parseInt(data.g_ntd_electrical) +
              parseInt(data.l_ntd_electrical) +
              parseInt(data.g_obc_electrical) +
              parseInt(data.l_obc_electrical) +
              parseInt(data.g_sebc_electrical) +
              parseInt(data.l_sebc_electrical) +
              parseInt(data.g_orphan_electrical) +
              parseInt(data.pw_open_electrical) +
              parseInt(data.def_open_electrical) +
              parseInt(data.pw_sc_electrical) +
              parseInt(data.def_sc_electrical) +
              parseInt(data.pw_st_electrical) +
              parseInt(data.def_st_electrical) +
              parseInt(data.pw_vjdt_electrical) +
              parseInt(data.def_vjdt_electrical) +
              parseInt(data.pw_ntb_electrical) +
              parseInt(data.def_ntb_electrical) +
              parseInt(data.pw_ntc_electrical) +
              parseInt(data.def_ntc_electrical) +
              parseInt(data.pw_ntd_electrical) +
              parseInt(data.def_ntd_electrical) +
              parseInt(data.pw_obc_electrical) +
              parseInt(data.def_obc_electrical) +
              parseInt(data.pw_sebc_electrical) +
              parseInt(data.def_sebc_electrical);
          } else if (branch === "mechanical") {
            newVac =
              parseInt(data.g_open_mechanical) +
              parseInt(data.l_open_mechanical) +
              parseInt(data.g_sc_mechanical) +
              parseInt(data.l_sc_mechanical) +
              parseInt(data.g_st_mechanical) +
              parseInt(data.l_st_mechanical) +
              parseInt(data.g_vjdt_mechanical) +
              parseInt(data.l_vjdt_mechanical) +
              parseInt(data.g_ntb_mechanical) +
              parseInt(data.l_ntb_mechanical) +
              parseInt(data.g_ntc_mechanical) +
              parseInt(data.l_ntc_mechanical) +
              parseInt(data.g_ntd_mechanical) +
              parseInt(data.l_ntd_mechanical) +
              parseInt(data.g_obc_mechanical) +
              parseInt(data.l_obc_mechanical) +
              parseInt(data.g_sebc_mechanical) +
              parseInt(data.l_sebc_mechanical) +
              parseInt(data.g_orphan_mechanical) +
              parseInt(data.pw_open_mechanical) +
              parseInt(data.def_open_mechanical) +
              parseInt(data.pw_sc_mechanical) +
              parseInt(data.def_sc_mechanical) +
              parseInt(data.pw_st_mechanical) +
              parseInt(data.def_st_mechanical) +
              parseInt(data.pw_vjdt_mechanical) +
              parseInt(data.def_vjdt_mechanical) +
              parseInt(data.pw_ntb_mechanical) +
              parseInt(data.def_ntb_mechanical) +
              parseInt(data.pw_ntc_mechanical) +
              parseInt(data.def_ntc_mechanical) +
              parseInt(data.pw_ntd_mechanical) +
              parseInt(data.def_ntd_mechanical) +
              parseInt(data.pw_obc_mechanical) +
              parseInt(data.def_obc_mechanical) +
              parseInt(data.pw_sebc_mechanical) +
              parseInt(data.def_sebc_mechanical);
          }
          await Vacancy.updateOne(
            { _id: "61f7bea19dda5bccf6aade77" },
            {
              $set: { [`${branch}`]: newVac },
            }
          )
            .then((data) => {
              if (data) {
                res.status(201).json(data);
              }
            })
            .catch((error) => {
              res.status(500);
              throw new Error(error);
            });
        })
        .catch((error) => {
          res.status(400);
          throw new Error(error);
        });
    }
  }
});

const getVacancy = asyncHandler(async (req, res) => {
  const vacancy = await Vacancy.find({})
    .then((vacancy) => {
      if (vacancy) {
        res.status(200).json(vacancy[0]);
      }
    })
    .catch((error) => {
      res.status(400);
      throw new Error(error);
    });
});

module.exports = { updateVacancy, getVacancy };
