module.exports = (req, res) => {
	if (req.session.userID) {
		return res.render('create', {
			createPost: true,
		});
	} else {
		res.redirect('/auth/login');
	}
};

//check > pageController
