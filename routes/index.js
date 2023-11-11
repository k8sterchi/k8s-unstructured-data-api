const express = require('express');
const router = express.Router();
const userRoutes = require('./api/userRoutes');  
const thoughtRoutes = require('./api/thoughtRoutes');  
// const friendRoutes = require('./api/friendRoutes');

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);
// router.use('/friends', friendRoutes);

module.exports = router;
