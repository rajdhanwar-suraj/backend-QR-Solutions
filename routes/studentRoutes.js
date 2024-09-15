const express = require('express');
const { createStudent, getStudents, getStudent, updateStudent, deleteStudent } = require('../controllers/studentController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/')
    .post(authMiddleware, createStudent)
    .get(authMiddleware, getStudents);

router.route('/:id')
    .get(authMiddleware, getStudent)
    .put(authMiddleware, updateStudent)
    .delete(authMiddleware, deleteStudent);

module.exports = router;
