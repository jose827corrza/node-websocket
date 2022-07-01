const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Chat = new Schema({
    users:[{
        type: Schema.ObjectId,
        ref: 'User'
    }]

});

const model = mongoose.model('chat', Chat);
module.exports = model;