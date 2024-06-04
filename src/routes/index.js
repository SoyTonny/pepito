const express = require('express');
const router = express.Router();
const userRouter = require('./user.router');

// Put the routes here
router.use('/users', userRouter)


module.exports = router;