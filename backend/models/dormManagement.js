const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const dormManagementSchema = new Schema(
  {
    type: {
      type: String,
      required: true,
    },
    roomNumber: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      default: "available",
    },
    monthlyRate: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("DormManagement", dormManagementSchema);
