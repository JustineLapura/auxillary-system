const DormList = require("../models/dormList");
const DormManagement = require("../models/dormManagement");

// Create Dorm List Entry
const createDormList = async (req, res) => {
  const { name, type, roomNumber, dueStart, dueDate } = req.body;

  let emptyFields = [];

  if (!name) emptyFields.push("name");
  if (!type) emptyFields.push("type");
  if (!roomNumber) emptyFields.push("roomNumber");
  if (!dueStart) emptyFields.push("dueStart");
  if (!dueDate) emptyFields.push("dueDate");

  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "You must fill in all the fields", emptyFields });
  }

  try {
    // Check for duplicate entry
    const existingDorm = await DormList.findOne({
      name,
      type,
      roomNumber,
      dueStart,
      dueDate,
    });

    if (existingDorm) {
      return res.status(400).json({
        error: "Dorm entry with the same data already exists",
      });
    }

    // Check if the roomNumber exists in DormManagement
    const existingRoom = await DormManagement.findOne({ roomNumber });

    if (!existingRoom) {
      return res.status(400).json({
        error: "Dorm with the specified room number does not exist",
      });
    }

    const dormList = await DormList.create(req.body);
    res.status(201).json(dormList);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update Dorm List Entry
const updateDormList = async (req, res) => {
  try {
    const dormList = await DormList.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!dormList) {
      return res.status(404).json({ error: "Dorm List entry not found" });
    }

    res.status(200).json(dormList);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete Dorm List Entry
const deleteDormList = async (req, res) => {
  try {
    const dormList = await DormList.findByIdAndDelete(req.params.id);

    if (!dormList) {
      return res.status(404).json({ error: "Dorm List entry not found" });
    }

    res.status(200).json({ message: "Dorm List entry deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a specific Dorm List Entry
const getDormListById = async (req, res) => {
  try {
    const dormList = await DormList.findById(req.params.id);

    if (!dormList) {
      return res.status(404).json({ error: "Dorm List entry not found" });
    }

    res.status(200).json(dormList);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all Dorm List Entries
const getAllDormList = async (req, res) => {
  try {
    const dormListEntries = await DormList.find();
    res.status(200).json(dormListEntries);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createDormList,
  updateDormList,
  deleteDormList,
  getDormListById,
  getAllDormList,
};
