module.exports = (req, res) => {
	req.session.destroy(() => {
		res.redirect('/');
	});
};

// check to userController
