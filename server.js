const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware for JSON data
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost/k8s-unstructured-data-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Routes
const userRoutes = require('./routes/userRoutes');
const thoughtRoutes = require('./routes/thoughtRoutes');
const friendRoutes = require('./routes/friendRoutes');

app.use('/api/users', userRoutes);
app.use('/api/thoughts', thoughtRoutes);
app.use('/api/friends', friendRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
