const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

// Schema to create a Thought model
const thoughtSchema = new Schema(
  {
    published: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    buildSuccess: {
      type: Boolean,
      default: true,
    },
    thoughtText: {
      type: String,    
      minLength: 1,
      maxLength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId, 
      ref: 'User',
      required: true,
    },
    reactions: [reactionSchema], 
  }, {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual field to calculate the reactionCount
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

// Create and export the Thought model
const Thought = model('Thought', thoughtSchema); 

module.exports = Thought;
