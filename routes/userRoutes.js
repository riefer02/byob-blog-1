const express = require('express');
const router = express.Router(); //Middleware, Sub-Application

const userController = require('./../controllers/userController');

//Data Management Routes
router.post('/register', userController.storeUser);
router.post('/login', userController.loginUser);
router.get('/logout', userController.logoutUser);

module.exports = router;
