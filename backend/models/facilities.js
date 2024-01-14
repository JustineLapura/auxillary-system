const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const facilitySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      default: "",
    },
    governmentPrice: {
      type: Number,
      default: 0,
    },
    nonGovernmentPrice: {
      type: Number,
      default: 0,
    },
    otherPrice: {
      type: Number,
      default: 0,
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
    featured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Facility", facilitySchema);
