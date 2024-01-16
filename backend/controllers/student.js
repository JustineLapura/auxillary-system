const Student = require("../models/students");

// Create a Student
const createStudent = async (req, res) => {
  const { firstName, lastName, contact, email, address, age, gender } =
    req.body;
  let emptyFields = [];

  // Validate required fields
  if (!firstName) emptyFields.push("firstName");
  if (!lastName) emptyFields.push("lastName");
  if (!contact) emptyFields.push("contact");
  if (!email) emptyFields.push("email");
  if (!address) emptyFields.push("address");
  if (!age) emptyFields.push("age");
  if (!gender) emptyFields.push("gender");

  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "You must fill in all the fields", emptyFields });
  }

  const emailExists = await Student.findOne({ email });
  if (emailExists) {
    return res.status(400).json({ error: "email already in use" });
  }

  try {
    const student = await Student.create(req.body);
    res.status(201).json(student);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a Student
const updateStudent = async (req, res) => {
  const { firstName, lastName, contact, email, address, age, gender } =
    req.body;
  let emptyFields = [];

  // Validate required fields
  if (!firstName) emptyFields.push("firstName");
  if (!lastName) emptyFields.push("lastName");
  if (!contact) emptyFields.push("contact");
  if (!email) emptyFields.push("email");
  if (!address) emptyFields.push("address");
  if (!age) emptyFields.push("age");
  if (!gender) emptyFields.push("gender");

  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "You must fill in all the fields", emptyFields });
  }

  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }

    res.status(200).json(student);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a Student
const deleteStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);

    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }

    res.status(200).json({ message: "Student deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a specific Student
const getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);

    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }

    res.status(200).json(student);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all Students
const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createStudent,
  updateStudent,
  deleteStudent,
  getStudentById,
  getAllStudents,
};
