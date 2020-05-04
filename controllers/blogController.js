const BlogPost = require('./../models/BlogPost.js');
const path = require('path');

//Returns JSON of Blogs from DB
exports.getBlogPosts = async (req, res, next) => {
	const blogposts = await BlogPost.find({});

	res.header('application/json');
	res.status(404).json({
		message: 'Here are your blogs sir.',
		data: {
			blogposts,
		},
	});
};

//Renders Individual Blog Page
exports.getBlogPostById = async (req, res, next) => {
	const blogpost = await BlogPost.findById(req.params.id).populate('userid');
	res.render('post', {
		blogpost,
	});
};

exports.createBlogPost = (req, res, next) => {
	let image = req.files.image;
	image.mv(
		path.resolve(__dirname, '..', 'public/img', image.name),
		async (error) => {
			await BlogPost.create({
				...req.body,
				image: '/img/' + image.name,
				userid: req.session.userID,
			});
			res.redirect('/');
		}
	);
};
