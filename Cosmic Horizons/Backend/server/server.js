const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');
const eventRoutes = require('./routes/eventRoutes');
const courseRoutes = require('./routes/courseRoutes');

dotenv.config(); // Load environment variables

const app = express();

// Middleware
app.use(express.json()); // Parse incoming requests with JSON payloads

// Database connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Routes
app.use('/api/blogs', blogRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/courses', courseRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
