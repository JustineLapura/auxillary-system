const express = require("express");
const {
  createDormList,
  updateDormList,
  deleteDormList,
  getDormListById,
  getAllDormList,
} = require("../controllers/dormList");

const router = express.Router();

// Create Dorm List Entry
router.post("/", createDormList);

// Update Dorm List Entry
router.put("/:id", updateDormList);

// Delete Dorm List Entry
router.delete("/:id", deleteDormList);

// Get a specific Dorm List Entry
router.get("/:id", getDormListById);

// Get all Dorm List Entries
router.get("/", getAllDormList);

module.exports = router;
