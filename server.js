const express = require('express');
const connectDB = require('./config/connection'); 
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware for JSON data
app.use(express.json());

// Connect to MongoDB
connectDB();

// Import and use your route files
const userRoutes = require('./routes/api/userRoutes');
// const thoughtRoutes = require('./routes/thoughtRoutes');
// const friendRoutes = require('./routes/friendRoutes');

app.use('/api/users', userRoutes);
// app.use('/api/thoughts', thoughtRoutes);
// app.use('/api/friends', friendRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
