const Model = require('../models/user');

function addUser(user){
    const newUser = new Model(user);
    return newUser.save();
};

module.exports = {
    add: addUser
}