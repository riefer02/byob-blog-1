const express = require('express');
const router = express.Router(); //Middleware, Sub-Application
const blogController = require('./../controllers/blogController');
const viewController = require('./../controllers/viewController');

router.get('/data', blogController.getBlogPosts);
router.get('/:id', blogController.getBlogPostById);
router.post('/store', blogController.createBlogPost);

module.exports = router;

// // ROUTES
// app.get('/', homeController);
// app.get('/post/:id', getPostController);
// app.get('/posts/new', authMiddleware, newPostController);
// app.post('/posts/store', authMiddleware, storePostController);

// app.get('/auth/register', redirectIfAuthenticatedMiddleware, newUserController);
// app.get('/auth/login', redirectIfAuthenticatedMiddleware, loginController);
// app.post(
// 	'/users/register',
// 	redirectIfAuthenticatedMiddleware,
// 	storeUserController
// );
// app.post(
// 	'/users/login',
// 	redirectIfAuthenticatedMiddleware,
// 	loginUserController
// );
// app.get('/auth/logout', logoutController);
// app.use((req, res) => res.render('notfound'));
