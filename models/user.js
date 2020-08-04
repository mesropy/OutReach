/* User and Message models */

const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    text: String,
    date: String,
    location: String,
    published: Boolean
});


const UserSchema = new mongoose.Schema({
    name: String,
    dob: String,
    phone: String,
    public: Boolean,
    messages: [MessageSchema]
});

const User = mongoose.model('User', UserSchema);

module.exports = { User };
