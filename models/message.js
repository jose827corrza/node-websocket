const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Message = new Schema({
    chat: {
        type: Schema.ObjectId,
        ref: 'Chat',
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User',
    },
    message: {
        type: String,
        required: true,
    },
    date: Date,
    file: {
        type: String,
    },

});

const model = mongoose.model('message', Message);
module.exports = model;