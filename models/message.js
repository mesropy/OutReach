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

const Message = mongoose.model('Message', MessageSchema);

module.exports = { Message };