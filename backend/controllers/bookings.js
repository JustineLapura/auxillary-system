const Booking = require("../models/bookings");

// Create a Booking
const createBooking = async (req, res) => {
  const { agency, date, startTime, endTime } = req.body;

  let emptyFields = [];

  if (!agency) emptyFields.push("agency");
  if (!date) emptyFields.push("date");
  if (!startTime) emptyFields.push("startTime");
  if (!endTime) emptyFields.push("endTime");

  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "You must fill in all the fields", emptyFields });
  }

  try {
    // Check for duplicate bookings
    const existingBooking = await Booking.findOne({ date, startTime });

    if (existingBooking) {
      return res
        .status(400)
        .json({
          error: "Booking already exists for the specified date and time",
        });
    }

    const booking = await Booking.create(req.body);
    res.status(201).json(booking);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a Booking
const updateBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!booking) {
      return res.status(404).json({ error: "Booking not found" });
    }

    res.status(200).json(booking);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a Booking
const deleteBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);

    if (!booking) {
      return res.status(404).json({ error: "Booking not found" });
    }

    res.status(200).json({ message: "Booking deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete all Bookings
const deleteAllBookings = async (req, res) => {
  try {
    const result = await Booking.deleteMany();

    if (result.deletedCount === 0) {
      return res.status(404).json({ error: "No bookings found" });
    }

    res.status(200).json({ message: "All bookings deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a specific Booking
const getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({ error: "Booking not found" });
    }

    res.status(200).json(booking);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all Bookings
const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Approve a Booking
const approveBooking = async (req, res) => {
    try {
      const booking = await Booking.findByIdAndUpdate(
        req.params.id,
        { status: "approved" },
        {
          new: true,
          runValidators: true,
        }
      );
  
      if (!booking) {
        return res.status(404).json({ error: "Booking not found" });
      }
  
      res.status(200).json(booking);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

module.exports = {
  createBooking,
  updateBooking,
  deleteBooking,
  deleteAllBookings,
  getBookingById,
  getAllBookings,
  approveBooking
};
