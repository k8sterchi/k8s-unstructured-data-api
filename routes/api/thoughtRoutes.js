const express = require('express');
const router = express.Router();
const thoughtController = require('../../controllers/thoughtController');

// GET all thoughts
router.get('/', thoughtController.getAllThoughts);

// CREATE a new thought
router.post('/', thoughtController.createThought);

// GET a single thought by ID
router.get('/:thoughtId', thoughtController.getThoughtById);

// UPDATE a thought by ID
router.put('/:thoughtId', thoughtController.updateThoughtById);

// DELETE a thought by ID
router.delete('/:thoughtId', thoughtController.deleteThoughtById);

module.exports = router;