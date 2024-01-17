const DormManagement = require("../models/dormManagement");

// Create Dorm Management Entry
const createDormManagement = async (req, res) => {
  const { type, roomNumber, monthlyRate } = req.body;

  let emptyFields = [];

  if (!type) emptyFields.push("type");
  if (!roomNumber) emptyFields.push("roomNumber");
  if (!monthlyRate) emptyFields.push("monthlyRate");

  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "You must fill in all the fields", emptyFields });
  }

  try {
    // Check if a dorm with the same type and roomNumber already exists
    const existingDorm = await DormManagement.findOne({ type, roomNumber });

    if (existingDorm) {
      return res
        .status(400)
        .json({
          error: "Dorm with the same type and roomNumber already exists",
        });
    }

    const dormManagement = await DormManagement.create(req.body);
    res.status(201).json(dormManagement);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update Dorm Management Entry
const updateDormManagement = async (req, res) => {
  const { type, roomNumber, status, monthlyRate } = req.body;

  try {
    const dormManagement = await DormManagement.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!dormManagement) {
      return res.status(404).json({ error: "Dorm Management entry not found" });
    }

    res.status(200).json(dormManagement);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete Dorm Management Entry
const deleteDormManagement = async (req, res) => {
  try {
    const dormManagement = await DormManagement.findByIdAndDelete(
      req.params.id
    );

    if (!dormManagement) {
      return res.status(404).json({ error: "Dorm Management entry not found" });
    }

    res
      .status(200)
      .json({ message: "Dorm Management entry deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a specific Dorm Management Entry
const getDormManagementById = async (req, res) => {
  try {
    const dormManagement = await DormManagement.findById(req.params.id);

    if (!dormManagement) {
      return res.status(404).json({ error: "Dorm Management entry not found" });
    }

    res.status(200).json(dormManagement);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all Dorm Management Entries
const getAllDormManagement = async (req, res) => {
  try {
    const dormManagementEntries = await DormManagement.find();
    res.status(200).json(dormManagementEntries);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createDormManagement,
  updateDormManagement,
  deleteDormManagement,
  getDormManagementById,
  getAllDormManagement,
};
