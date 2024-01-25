const mongoose = require("mongoose");
const Inquiry = require("../models/inquiries");

// Create an Inquiry
const createInquiry = async (req, res) => {
  const { message } = req.body;

  let emptyFields = [];

  if (!message) {
    emptyFields.push("message");
  }

  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "You must write something!", emptyFields });
  }

  try {
    const inquiry = await Inquiry.create(req.body);
    res.status(201).json(inquiry);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update an Inquiry
const updateInquiry = async (req, res) => {
  const { firstName, lastName, address, message } = req.body;

  try {
    const inquiry = await Inquiry.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!inquiry) {
      return res.status(404).json({ error: "Inquiry not found" });
    }

    res.status(200).json(inquiry);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete an Inquiry
const deleteInquiry = async (req, res) => {
  try {
    const inquiry = await Inquiry.findByIdAndDelete(req.params.id);

    if (!inquiry) {
      return res.status(404).json({ error: "Inquiry not found" });
    }

    res.status(200).json({ message: "Inquiry deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a specific Inquiry
const getInquiryById = async (req, res) => {
  try {
    const inquiry = await Inquiry.findById(req.params.id);

    if (!inquiry) {
      return res.status(404).json({ error: "Inquiry not found" });
    }

    res.status(200).json(inquiry);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all Inquiries
const getAllInquiries = async (req, res) => {
  try {
    const inquiries = await Inquiry.find();
    res.status(200).json(inquiries);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createInquiry,
  updateInquiry,
  deleteInquiry,
  getInquiryById,
  getAllInquiries,
};
