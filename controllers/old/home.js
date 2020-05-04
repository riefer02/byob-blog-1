const BlogPost = require('../models/BlogPost.js');

module.exports = async (req, res, next) => {
	const blogposts = await BlogPost.find({}).populate('userid');
	res.status(200).render('index', {
		blogposts,
	});
};

// check -> pageController
