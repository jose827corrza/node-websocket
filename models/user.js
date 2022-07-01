const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const User = new Schema({
    name: String

});

const model = mongoose.model('User', User);
module.exports = model;