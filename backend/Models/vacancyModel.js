const mongoose = require("mongoose");

const vacancySchema = new mongoose.Schema(
  {
    cse: {
      type: Number,
      required: true,
    },
    it: {
      type: Number,
      required: true,
    },
    electrical: {
      type: Number,
      required: true,
    },
    civil: {
      type: Number,
      required: true,
    },
    electronics: {
      type: Number,
      required: true,
    },
    mechanical: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Vacancy = mongoose.model("vacancy", vacancySchema);

module.exports = Vacancy;
