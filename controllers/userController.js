const User = require("../models/User");

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Create a new user
const createUser = async (req, res) => {
  try {
    const { username, email } = req.body;

    // Validate that both username and email are provided
    if (!username || !email) {
      return res.status(400).json({ error: "Username and email are required" });
    }

    // Create a new user
    const newUser = await User.create({ username, email });

    // Respond with the newly created user
    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Other CRUD operations for users...

module.exports = {
  getAllUsers,
  createUser,
  // Add other functions
};
