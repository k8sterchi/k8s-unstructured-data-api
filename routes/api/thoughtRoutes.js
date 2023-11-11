const express = require('express');
const router = express.Router();
const thoughtController = require('../../controllers/thoughtController');

// GET all thoughts
router.get('/', thoughtController.getThoughts);

// CREATE a new thought
router.post('/', thoughtController.createThought);

// GET a single thought by ID
router.get('/:thoughtId', thoughtController.getSingleThought);

// UPDATE a thought by ID
router.put('/:thoughtId', thoughtController.updateThought);

// DELETE a thought by ID
router.delete('/:thoughtId', thoughtController.deleteThought);

module.exports = router;
