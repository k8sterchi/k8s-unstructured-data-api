const Thought = require('../models/Thought');

const thoughtController = {
  getAllThoughts: async (req, res) => {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (error) {
      console.error('Error fetching thoughts:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  createThought: async (req, res) => {
    try {
      const { thoughtText, username } = req.body;

      // Validate that both thoughtText and username are provided
      if (!thoughtText || !username) {
        return res.status(400).json({ error: 'Thought text and username are required' });
      }

      // Assuming you have the user's ID available in req.user, use it to create the thought
      const newThought = await Thought.create({
        thoughtText,
        username,
        user: req.user._id, 
      });

      res.status(201).json(newThought);
    } catch (error) {
      console.error('Error creating thought:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  // ... other CRUD operations for thoughts
};

module.exports = thoughtController;