const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    text: String,
    date: String, // YYYY-MM-DD h:mmA Ex: 2012-05-03 4:23am
    location: {
      name: String,
      x: Number,
      y: Number
    },
    published: Boolean,
    author: {
		    type: mongoose.Schema.Types.ObjectId,
		      required: true
	  }
});

const Message = mongoose.model('Message', MessageSchema);

module.exports = { Message };