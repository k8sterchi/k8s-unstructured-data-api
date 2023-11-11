const { Schema, model } = require('mongoose');

// Create a User schema
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Please enter a valid email address'],
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId, 
        ref: 'Thought',
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId, 
        ref: 'User',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual field to calculate the friendCount
userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

// Create and export the User model
const User = model('User', userSchema);

module.exports = User;

