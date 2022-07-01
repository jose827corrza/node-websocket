const store = require('../store/chat');

async function addChat(users){
    return new Promise((resolve, reject)=>{
        if(!users || !Array.isArray(users)){
            return Promise.reject("Invalid user list");
        }
        const chat = {
            users: users,
        }
        const result = store.createChat(chat);
        resolve(result);
    })
    
};

async function listChats(id){
    return new Promise((resolve, reject)=>{
        resolve(store.getChats(id));
    });
}

module.exports = {
    addChat,
    listChats,
}