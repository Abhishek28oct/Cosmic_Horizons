const Event = require('../models/Event');

// Get all events
exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Create a new event
exports.createEvent = async (req, res) => {
  try {
    const { title, description, date, location } = req.body;
    const newEvent = new Event({ title, description, date, location });
    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
