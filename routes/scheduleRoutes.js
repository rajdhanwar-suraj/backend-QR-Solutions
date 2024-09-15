const express = require('express');
const { createSchedule, getSchedules, getSchedule, updateSchedule, deleteSchedule } = require('../controllers/scheduleController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/')
    .post(authMiddleware, createSchedule)
    .get(authMiddleware, getSchedules);

router.route('/:id')
    .get(authMiddleware, getSchedule)
    .put(authMiddleware, updateSchedule)
    .delete(authMiddleware, deleteSchedule);

module.exports = router;
