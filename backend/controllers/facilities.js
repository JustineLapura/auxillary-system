const Facility = require("../models/facilities");

// Create a Facility
const createFacility = async (req, res) => {
  const { name, photo, desc, governmentPrice, nonGovernmentPrice, otherPrice } =
    req.body;
  let emptyFields = [];

  if (!name) {
    emptyFields.push("name");
  }
  if (!photo) {
    emptyFields.push("photo");
  }
  if (!governmentPrice) {
    emptyFields.push("governmentPrice");
  }
  if (!nonGovernmentPrice) {
    emptyFields.push("nonGovernmentPrice");
  }
  if (!otherPrice) {
    emptyFields.push("otherPrice");
  }
  if (!desc) {
    emptyFields.push("desc");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "You must fill in all the fields", emptyFields });
  }

  const nameExists = await Facility.findOne({ name });
  if (nameExists) {
    return res.status(400).json({ error: "name already in use" });
  }

  try {
    const facility = await Facility.create(req.body);
    res.status(201).json(facility);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a Facility
const updateFacility = async (req, res) => {
  const { name, photo } = req.body;
  let emptyFields = [];

  if (!name) {
    emptyFields.push("name");
  }
  if (!photo) {
    emptyFields.push("photo");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "You must fill in all the fields", emptyFields });
  }

  const nameExists = await Facility.findOne({ name });
  if (nameExists) {
    return res.status(400).json({ error: "name already in use" });
  }

  try {
    const facility = await Facility.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!facility) {
      return res.status(404).json({ error: "Facility not found" });
    }

    res.status(200).json(facility);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a Facility
const deleteFacility = async (req, res) => {
  try {
    const facility = await Facility.findByIdAndDelete(req.params.id);

    if (!facility) {
      return res.status(404).json({ error: "Facility not found" });
    }

    res.status(200).json({ message: "Facility deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a specific Facility
const getFacilityById = async (req, res) => {
  try {
    const facility = await Facility.findById(req.params.id);

    if (!facility) {
      return res.status(404).json({ error: "Facility not found" });
    }

    res.status(200).json(facility);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all Facilities
const getAllFacilities = async (req, res) => {
  try {
    const facilities = await Facility.find();
    res.status(200).json(facilities);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createFacility,
  updateFacility,
  deleteFacility,
  getFacilityById,
  getAllFacilities,
};
