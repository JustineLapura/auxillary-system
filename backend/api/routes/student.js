const express = require("express");
const router = express.Router();
const {
  createStudent,
  updateStudent,
  deleteStudent,
  getStudentById,
  getAllStudents,
} = require("../controllers/student");

// Create a Student
router.post("/", createStudent);

// Update a Student
router.put("/:id", updateStudent);

// Delete a Student
router.delete("/:id", deleteStudent);

// Get a specific Student
router.get("/:id", getStudentById);

// Get all Students
router.get("/", getAllStudents);

module.exports = router;
