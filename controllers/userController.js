const User = require('../models/User');

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Create a new user --need to refactor this... 
const createUser = async (req, res) => {
  const newUser = new User({ name: req.params.user});
  newUses.save();
  if (newUser) {
    res.status(200).json(newUser);
  } else {
    console.log('Uh oh, something went wrong.');
    res.status(500).json({ message: 'something went wrong' });
  }
};

// Other CRUD operations for users...

module.exports = {
  getAllUsers,
  createUser,
  // Add other functions 
};