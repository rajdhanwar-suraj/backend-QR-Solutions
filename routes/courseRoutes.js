const express = require('express');
const { createCourse, getCourses, updateCourse, deleteCourse } = require('../controllers/courseController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/')
  .post(authMiddleware, createCourse)
  .get(authMiddleware, getCourses);

router.route('/:id')
  .put(authMiddleware, updateCourse)
  .delete(authMiddleware, deleteCourse);

module.exports = router;
