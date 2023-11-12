const express = require('express');
const router = express.Router();
const { getThoughts, createThought, getSingleThought, updateThought, deleteThought } = require('../../controllers/thoughtController');

// GET all thoughts
router.get('/', getThoughts);

// CREATE a new thought for a specific user
router.post('/users/:userId', createThought);

// GET a single thought by ID
router.get('/:thoughtId', getSingleThought);

// UPDATE a thought by ID
router.put('/:thoughtId', updateThought);

// DELETE a thought by ID
router.delete('/:thoughtId', deleteThought);

module.exports = router;
