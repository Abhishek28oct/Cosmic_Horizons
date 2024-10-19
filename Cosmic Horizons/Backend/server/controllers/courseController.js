const Course = require('../models/Course');

// Get all courses
exports.getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Create a new course
exports.createCourse = async (req, res) => {
  try {
    const { title, description, instructor, price } = req.body;
    const newCourse = new Course({ title, description, instructor, price });
    await newCourse.save();
    res.status(201).json(newCourse);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
