const express = require("express");
const router = express.Router();
const {
  createFacility,
  updateFacility,
  deleteFacility,
  getFacilityById,
  getAllFacilities,
} = require("../controllers/facilities");

// Create a Facility
router.post("/", createFacility);

// Update a Facility
router.put("/:id", updateFacility);

// Delete a Facility
router.delete("/:id", deleteFacility);

// Get a specific Facility
router.get("/:id", getFacilityById);

// Get all
router.get("/", getAllFacilities);

module.exports = router;
