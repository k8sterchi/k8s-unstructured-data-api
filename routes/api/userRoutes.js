
// userRoutes.js
const express = require('express');
const router = express.Router();
const { getUsers, createUser, deleteUser } = require('../../controllers/userController');

// Route to get all users
router.get('/', getUsers);

// Route to get a single user by ID
router.get('/:userId', getSingleUser);

// Route to create a new user
router.post('/', createUser);

// Route to delete a user by ID
router.delete('/:userId', deleteUser);

module.exports = router;