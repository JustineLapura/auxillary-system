const express = require("express");
const router = express.Router();
const {
  createInquiry,
  updateInquiry,
  deleteInquiry,
  getInquiryById,
  getAllInquiries,
} = require("../controllers/inquiries");

// Create an Inquiry
router.post("/", createInquiry);

// Update an Inquiry
router.put("/:id", updateInquiry);

// Delete an Inquiry
router.delete("/:id", deleteInquiry);

// Get a specific Inquiry
router.get("/:id", getInquiryById);

// Get all Inquiries
router.get("/", getAllInquiries);

module.exports = router;
