const express = require("express");
const router = express.Router();
const {
  createDormManagement,
  updateDormManagement,
  deleteDormManagement,
  getDormManagementById,
  getAllDormManagement,
} = require("../controllers/dormManagement");

// Create Dorm Management Entry
router.post("/", createDormManagement);

// Update Dorm Management Entry
router.put("/:id", updateDormManagement);

// Delete Dorm Management Entry
router.delete("/:id", deleteDormManagement);

// Get a specific Dorm Management Entry
router.get("/:id", getDormManagementById);

// Get all Dorm Management Entries
router.get("/", getAllDormManagement);

module.exports = router;
