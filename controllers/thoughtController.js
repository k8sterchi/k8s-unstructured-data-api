const { Thought, User } = require('../models')

module.exports = {
    // Function to get all of the thoughts by invoking the find() method with no arguments.
    // Then we return the results as JSON, and catch any errors. Errors are sent as JSON with a message and a 500 status code
    async getThoughts(req, res) {
      try {
        const thoughts = await Thought.find();
        res.json(thoughts);
      } catch (err) {
        res.status(500).json(err);
      }
    },
    async getSingleThought(req, res) {
      try {
        const thought = await Thought.findOne({ _id: req.params.thoughtId });
      
        if (!thought) {
          return res.status(404).json({ message: 'No thought with that ID' });
        }
      
        res.json(thought);
      } catch (err) {
        res.status(500).json(err);
      }
    },
    // Creates a new thought. Accepts a request body with the entire Thought object.
  // Because thoughts are associated with Users, we then update the User who created the thought and add the ID of the thought to the applications array
  async createThought(req, res) {
    try {
      const thought = await Thought.create({
        thoughtText: req.body.thoughtText,
        username: req.body.username, 
        user: req.params.userId,
        reactions: req.body.reaction,
      });
  
      // Return the created thought
      res.json(thought);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: 'Error creating thought', error: err.message });
    }
  },
  // Updates a thought using the findOneAndUpdate method. Uses the ID, and the $set operator in mongodb to inject the request body. Enforces validation.
  async updateThought(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!thought) {
        return res.status(404).json({ message: 'No thought with this id!' });
      }

      res.json(thought);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // Deletes a thought from the database. Looks for a thought by ID.
  // Then if the thought exists, we look for any users associated with the thought based on the thought ID and update the thought array for the User.
  async deleteThought(req, res) {
    try {
      const thought = await Thought.findOneAndRemove({ _id: req.params.thoughtId });
  
      if (!thought) {
        return res.status(404).json({ message: 'No thought with this id!' });
      }
  
      const user = await User.findOneAndUpdate(
        { thoughts: req.params.thoughtId },
        { $pull: { thoughts: req.params.thoughtId } },
        { new: true }
      );
  
      if (!user) {
        // If user is not found, it means the thought was deleted but no user was associated with it
        return res.json({ message: 'Thought successfully deleted, but no user associated with it.' });
      }
  
      res.json({ message: 'Thought successfully deleted!' });
    } catch (err) {
      res.status(500).json(err);
    }
  },
    // Adds a reaction to an thought. This method is unique in that we add the entire body of the reaction rather than the ID with the mongodb $addToSet operator.
    async addReaction(req, res) {
        try {
          const thought = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: req.body } },
            { runValidators: true, new: true }
          );
    
          if (!thought) {
            return res.status(404).json({ message: 'No thought with this id!' });
          }
    
          res.json(thought);
        } catch (err) {
          res.status(500).json(err);
        }
      },
      // Remove thought reaction. This method finds the thought based on ID. It then updates the reactions array associated with the thought in question by removing it's reactionId from the reactions array.
      async removeReaction(req, res) {
        try {
          const thought = await Thought.findByIdAndUpdate(
            req.params.thoughtId,
            { $pull: { reactions: { _id: req.params.reactionId } } },
            { runValidators: true, new: true }
          );
      
          if (!thought) {
            return res.status(404).json({ message: 'No thought with this id!' });
          }
      
          console.log('Updated Thought:', thought);
          res.json(thought);
        } catch (err) {
          console.error(err);
          res.status(500).json(err);
        }
      }
    };