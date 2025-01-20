const express = require('express');
const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const compression = require('compression');
const cors = require('cors');

const routes = require('./Routes/genericIndex');
const youTubeLinkRoutes = require('./Routes/YouTuberoutes');
const groupDiscussionRoutes = require('./Routes/gdroute');
const registrationRoutes = require('./Routes/registerroutes'); // Ensure this line is here

const app = express();

// Middleware
app.use(express.json({ limit: '500mb' })); // Adjust request size limit
app.use(express.urlencoded({ extended: true, limit: '500mb' }));
app.use(compression());

// CORS Configuration
app.use(cors({
  origin: ['http://localhost:8081', 'http://192.168.0.158:8081'], // Add allowed origins
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true, // Enable if using cookies/authentication
}));

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://ckite:ckite@ckite.6gtnt.mongodb.net/';
mongoose.plugin(mongoosePaginate);

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/v1', routes);
app.use('/api/v1', youTubeLinkRoutes);
app.use('/api/v1', groupDiscussionRoutes);
app.use('/api/v1', registrationRoutes); // Ensure this line is here


// Health Check Route
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Server is running successfully' });
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error('Error:', err.stack);
  res.status(500).json({
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'production' ? undefined : err.message,
  });
});

// 404 Route Handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
