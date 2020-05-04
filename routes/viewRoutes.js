const express = require('express');
const router = express.Router(); //Middleware, Sub-Application

const viewController = require('./../controllers/viewController');

//Page Routes
router.get('/', viewController.viewHomePage);
router.get('/update', viewController.viewUpdateProfilePage);
router.get('/profile', viewController.viewUserProfile);
router.get('/register', viewController.viewRegisterPage);
router.get('/login', viewController.viewLoginPage);
router.get('/new', viewController.viewCreatePostPage);

module.exports = router;
