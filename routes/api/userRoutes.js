
const express = require('express');
const router = express.Router();
const userController = require('../../controllers/userController');

// Route to get all users
router.get('/', userController.getAllUsers);

// Route to create a new user
router.post('/', userController.createUser);

// Route to delete a user by ID
router.delete('/:userId', userController.deleteUserById);

module.exports = router;