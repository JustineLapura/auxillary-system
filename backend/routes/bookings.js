const express = require("express");
const router = express.Router();
const {
  createBooking,
  updateBooking,
  deleteBooking,
  deleteAllBookings,
  getBookingById,
  getAllBookings,
  approveBooking,
} = require("../controllers/bookings");

// Create a Booking
router.post("/", createBooking);

// Update a Booking
router.put("/:id", updateBooking);

// Delete a Booking
router.delete("/:id", deleteBooking);

router.delete("/delete/all", deleteAllBookings);

// Get a specific Booking
router.get("/:id", getBookingById);

// Get all Bookings
router.get("/", getAllBookings);

// Get a specific Booking
router.put("/:id/approve", approveBooking);

module.exports = router;
