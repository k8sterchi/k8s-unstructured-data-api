require('dotenv').config(); 
const mongoose = require('mongoose');
const User = require('../models/User'); 
const Thought = require('../models/Thought'); 

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once('open', async () => {
  try {
    // Seed users
    const users = await User.insertMany([
      {
        username: 'user1',
        email: 'user1@example.com',
      },
      {
        username: 'user2',
        email: 'user2@example.com',
      },
    ]);

    // Seed thoughts
    await Thought.insertMany([
      {
        thoughtText: 'This is the first thought.',
        username: users[0]._id,
      },
      {
        thoughtText: 'Another thought here.',
        username: users[1]._id,
      },
    ]);

    console.log('Database seeded successfully.');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    // Close the database connection
    mongoose.connection.close();
  }
});