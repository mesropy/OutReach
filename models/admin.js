/* Admin model */

const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const AdminSchema = new mongoose.Schema({
    username: String,
    password: String,
});

// mongoose middleware that hashes the password that will be saved
AdminSchema.pre('save', function(next) {
	const admin = this;

	if (admin.isModified('password')) {
		// hash the password that will be saved to the database
		bcrypt.genSalt(10, (err, salt) => {
			bcrypt.hash(admin.password, salt, (err, hash) => {
				admin.password = hash
				next()
			})
		})
	} else {
		next()
	}
})

// A static method on the document model.
// Finds the a Admin document for the given username, and
// checks if password is correct
AdminSchema.statics.findByNamePassword = function(name, password) {
	const admin = this

	// find the admin by its name (which is unique)
	return Admin.findOne({ name: name }).then((admin) => {
		if (!admin) {
			return Promise.reject()
		}
		// if this admin was found (ie. it exists), make sure their password is correct
		return new Promise((resolve, reject) => {
			bcrypt.compare(password, admin.password, (err, result) => {
				if (result) {
					resolve(admin)
				} else {
					reject()
				}
			})
		})
	})
}

const Admin = mongoose.model('Admin', AdminSchema);

module.exports = { Admin };
