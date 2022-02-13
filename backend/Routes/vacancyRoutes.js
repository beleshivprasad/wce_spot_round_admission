const express = require("express");
const router = express.Router();

const {
  updateVacancy,
  getVacancy,
} = require("../Controllers/vacancyController");

router.route("/update").post(updateVacancy);
router.route("/show").post(getVacancy);

module.exports = router;
