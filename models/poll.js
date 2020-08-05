/* Poll Model */

const mongoose = require('mongoose');

const PollAnswerSchema = new mongoose.Schema({
    option: String,
    votes: Number
});

// Reservations will be embedded in the Restaurant model
const PollSchema = new mongoose.Schema({
    question: String,
    answers: [PollAnswerSchema],
    active: Boolean
});

const Poll = mongoose.model('Poll', PollSchema);

module.exports = { Poll };
