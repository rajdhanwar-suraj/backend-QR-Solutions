const Schedule = require('../models/Schedule');

// Create Schedule
exports.createSchedule = async (req, res) => {
    try {
        const { course, startDate, endDate, students } = req.body;
        const schedule = await Schedule.create({ course, startDate, endDate, students });
        res.status(201).json(schedule);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get All Schedules
exports.getSchedules = async (req, res) => {
    try {
        const schedules = await Schedule.find().populate('course students');
        res.status(200).json(schedules);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Get Single Schedule
exports.getSchedule = async (req, res) => {
    try {
        const schedule = await Schedule.findById(req.params.id).populate('course students');
        if (!schedule) return res.status(404).json({ message: 'Schedule not found' });
        res.status(200).json(schedule);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Update Schedule
exports.updateSchedule = async (req, res) => {
    try {
        const { id } = req.params;
        const schedule = await Schedule.findByIdAndUpdate(id, req.body, { new: true });
        if (!schedule) return res.status(404).json({ message: 'Schedule not found' });
        res.status(200).json(schedule);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete Schedule
exports.deleteSchedule = async (req, res) => {
    try {
        const { id } = req.params;
        const schedule = await Schedule.findByIdAndDelete(id);
        if (!schedule) return res.status(404).json({ message: 'Schedule not found' });
        res.status(200).json({ message: 'Schedule deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};
