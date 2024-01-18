const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const dormListSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    roomNumber: {
      type: Number,
    },
    dueStart: {
      type: Date,
      required: true,
    },
    dueDate: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("DormList", dormListSchema);
