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
      const { data } = Vacancy.create({})
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
      let str = `${quota}_${caste}_${branch}`;
      const { data } = await Vacancy.findOneAndUpdate(
        { _id: "61e5a684f8e1199a5b608433" },
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
