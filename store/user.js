const Model = require('../models/user');

function addUser(user){
    const newUser = new Model(user);
    return newUser.save();
};

async function getUsers(){
    const users = await Model.find();
    return users;
}

module.exports = {
    add: addUser,
    get: getUsers
}