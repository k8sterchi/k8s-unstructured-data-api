const { connectDB } = require('../config/connection');
const { User, Thought } = require('../models');
const faker = require('faker');
const { getRandomThoughts } = require('./seedData');

connectDB().then(async () => {
  console.log('Connected');

  // Clear existing data
  await User.deleteMany({});
  await Thought.deleteMany({});

  // Generate random users using faker
  const users = [];
  for (let i = 0; i < 20; i++) {
    const username = faker.internet.userName();
    const email = faker.internet.email();

    const user = new User({ username, email });
    await user.save();
    users.push(user);
  }

  // Generate random thoughts and reactions
  const thoughts = getRandomThoughts(users.map(user => user.username));
  for (const thoughtData of thoughts) {
    const user = users.find(u => u.username === thoughtData.username);

    const thought = new Thought({
      ...thoughtData,
      user: user._id,
    });

    await thought.save();
  }

  console.info('Seeding complete! 🌱');
  process.exit(0);
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
  process.exit(1);
});
