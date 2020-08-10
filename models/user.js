/* User model */

const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    dob: String,
	phone: String,
	city: String,
    public: Boolean
});

// mongoose middleware that hashes the password that will be saved
UserSchema.pre('save', function(next) {
	const user = this;

	if (user.isModified('password')) {
		// hash the password that will be saved to the database
		bcrypt.genSalt(10, (err, salt) => {
			bcrypt.hash(user.password, salt, (err, hash) => {
				user.password = hash
				next()
			})
		})
	} else {
		next()
	}
})

// A static method on the document model.
// Finds the a User document for the given username, and
// checks if password is correct
UserSchema.statics.findByNamePassword = function(name, password) {
	const User = this

	// find the user by its name (which is unique)
	return User.findOne({ name: name }).then((user) => {
		if (!user) {
			return Promise.reject()
		}
		// if this user was found (ie. it exists), make sure their password is correct
		return new Promise((resolve, reject) => {
			bcrypt.compare(password, user.password, (err, result) => {
				if (result) {
					resolve(user)
				} else {
					reject()
				}
			})
		})
	})
}

const User = mongoose.model('User', UserSchema);

module.exports = { User };
