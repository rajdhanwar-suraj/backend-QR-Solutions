const Student = require('../models/Student');

// Create Student
exports.createStudent = async (req, res) => {
    try {
        const { name, email, course, phone } = req.body;  // Deconstructing request body for readability
        const student = await Student.create({ name, email, course, phone }); // Using create method
        res.status(201).json(student);
    } catch (error) {
        res.status(400).json({ message: 'Failed to create student', error: error.message });
    }
};

// Get All Students
exports.getStudents = async (req, res) => {
    try {
        const students = await Student.find().populate('course'); // Populating course field
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch students', error: error.message });
    }
};

// Get Single Student
exports.getStudent = async (req, res) => {
    try {
        const { id } = req.params; // Deconstructing the id parameter
        const student = await Student.findById(id).populate('course'); // Populating course field
        if (!student) return res.status(404).json({ message: 'Student not found' });
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch student', error: error.message });
    }
};

// Update Student
exports.updateStudent = async (req, res) => {
    try {
        const { id } = req.params; // Deconstructing the id parameter
        const { name, email, course } = req.body; // Deconstructing the request body for clarity
        const student = await Student.findByIdAndUpdate(id, { name, email, course }, { new: true });
        if (!student) return res.status(404).json({ message: 'Student not found' });
        res.status(200).json(student);
    } catch (error) {
        res.status(400).json({ message: 'Failed to update student', error: error.message });
    }
};

// Delete Student
exports.deleteStudent = async (req, res) => {
    try {
        const { id } = req.params; // Deconstructing the id parameter
        const student = await Student.findByIdAndDelete(id);
        if (!student) return res.status(404).json({ message: 'Student not found' });
        res.status(200).json({ message: 'Student deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete student', error: error.message });
    }
};
