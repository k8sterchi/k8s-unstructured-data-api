const express = require('express');
const router = express.Router();
const { getThoughts, createThought, getSingleThought, updateThought, deleteThought, addReaction, removeReaction } = require('../../controllers/thoughtController');

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

// ADD a reaction to a thought by ID
router.post('/:thoughtId/reactions', addReaction);

// REMOVE a reaction from a thought by ID and reaction ID
router.delete('/:thoughtId/reactions/:reactionId', removeReaction);
module.exports = router;
