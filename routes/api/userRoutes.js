
// userRoutes.js
const express = require('express');
const router = express.Router();
const { getAllUsers, createUser, deleteUserById } = require('../../controllers/userController');

// Route to get all users
router.get('/', getAllUsers);

// Route to create a new user
router.post('/', createUser);

// Route to delete a user by ID
router.delete('/:userId', deleteUserById);

module.exports = router;