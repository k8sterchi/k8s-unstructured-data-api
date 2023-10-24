const mongoose = require('mongoose');

// Create a Reaction schema
const reactionSchema = new mongoose.Schema({
  reactionId: {
    type: mongoose.Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    maxLength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdAt) => dateFormat(createdAt),
  },
});

// Export the Reaction schema
module.exports = reactionSchema;
