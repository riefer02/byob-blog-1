const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
var uniqueValidator = require('mongoose-unique-validator');
const validator = require('validator');

const UserSchema = new Schema({
	username: {
		type: String,
		required: [true, 'Please provide username.'],
		unique: true,
		minlength: [2, 'Name must be longer than one character.'],
	},
	// email: {
	// 	type: String,
	// 	required: [true, 'Please provide an email'],
	// 	unique: true,
	// 	lowercase: true,
	// 	validate: [validator.isEmail, 'Please provide a valid email'],
	// },
	password: {
		type: String,
		required: [true, 'Please provide password.'],
		minlength: [2, 'Password must be longer than eight characters.'],
	},
	// passwordConfirm: {
	// 	type: String,
	// 	required: [true, 'Please confirm your password'],
	// 	validate: {
	// 		// Only works on CREATE and SAVE!!!
	// 		validator: function (el) {
	// 			return el === this.password;
	// 		},
	// 		message: 'Passwords are not the same',
	// 	},
	// },
	photo: {
		type: String, //PATH IN FILE SYSTEM WHERE IMAGE IS UPLOADED
	},
	role: {
		type: String,
		enum: ['user', 'admin'],
		default: 'user',
	},
	bio: {
		type: String,
	},
});

UserSchema.plugin(uniqueValidator);

UserSchema.pre('save', async function (next) {
	const user = this;
	this.password = await bcrypt.hash(user.password, 10, (error, hash) => {
		user.password = hash;
		next();
	});
	this.passwordConfirm = undefined;
	next();
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
