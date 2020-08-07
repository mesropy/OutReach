/* User and Message models */

const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    text: String,
    date: String,
    location: String,
    published: Boolean,
    creator: {
		    type: mongoose.Schema.Types.ObjectId,
		      required: true
	  }
});


const UserSchema = new mongoose.Schema({
    name: String,
    password: String,
    dob: String,
    phone: String,
    public: Boolean
    // messages: [MessageSchema]
});

const User = mongoose.model('User', UserSchema);

module.exports = { User };
