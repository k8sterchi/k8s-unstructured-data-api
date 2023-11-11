const User = require("../models/User");

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Create a new user
const createUser = async (req, res) => {
  try {
    const { username, email } = req.body;

    // Validate that both username and email are provided
    if (!username || !email) {
      return res.status(400).json({ message: "Username and email are required" });
    }

    // Create a new user
    const newUser = await User.create({ username, email });

    // Respond with the newly created user
    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Delete a user by ID
const deleteUserById = async (req, res) => {
    try {
      const userId = req.params.userId;
    
      // Check if the user ID is valid
      if (!userId) {
        return res.status(400).json({ message: 'Invalid user ID' });
      }
      console.log('deleting userId:', userId);
      // Find and delete the user by ID
      const deletedUser = await User.findByIdAndDelete(userId);
    
      // Check if the user was found and deleted
      if (!deletedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
    
      res.json({ message: 'User deleted successfully', deletedUser });
    } catch (error) {
      console.error('Error deleting user:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

module.exports = {
  getAllUsers,
  createUser,
  deleteUserById
};

