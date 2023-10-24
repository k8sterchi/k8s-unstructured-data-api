const mongoose = require('mongoose');

// Create a Thought schema
const thoughtSchema = new mongoose.Schema({
  thoughtText: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdAt) => dateFormat(createdAt),
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [
    {
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
    },
  ],
});

// Create a virtual field to calculate the reactionCount
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

// Create and export the Thought model
const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;
