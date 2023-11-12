
// userRoutes.js
const express = require('express');
const router = express.Router();
const { getUsers, getSingleUser, updateUser, createUser, deleteUser, addFriend, removeFriend } = require('../../controllers/userController');

// Route to get all users
router.get('/', getUsers);

// Route to get a single user by ID
router.get('/:userId', getSingleUser);

// Route to update a user by ID
router.put('/:userId', updateUser);

// Route to create a new user
router.post('/', createUser);

// Route to delete a user by ID
router.delete('/:userId', deleteUser);

// Route to add a friend to a user's friend list
router.post('/:userId/friends/:friendId', addFriend);

// Route to remove a friend from a user's friend list
router.delete('/:userId/friends/:friendId', removeFriend);

module.exports = router;