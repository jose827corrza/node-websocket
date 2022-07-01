const Model = require('../models/chat');

function createChat(chat){
    const newChat = new Model(chat);
    return newChat.save();
}

async function getChats(userId){
    let filter = {}
    if (userId){
        filter = { users: userId};
    }
    const chats = await Model.find(filter).populate('users');
    return chats;
}



module.exports = {
    createChat,
    getChats,
};