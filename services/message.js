
const store = require('../store/message');
const socket = require('../websocket/socket').socket;

const addMessage = (chat, user, message, file) =>{
    return new Promise((resolve, reject)=>{
        if(!user || !message || !chat){
            reject();
        }
        let fileUrl = "";

        if(file){
            fileUrl = 'http://localhost:3000/app/files/'+ file.filename;
        };
        console.log(fileUrl);
        let fullMessage = {
            chat: chat,
            user: user,
            message: message,
            date: new Date(),
            file: fileUrl,
        };
        console.log(fullMessage);
        store.add(fullMessage);
        socket.io.emit('message', fullMessage);
        resolve(fullMessage);
    })
};

async function getMessages(filterMessage){
    return new Promise((resolve, reject)=>{
        resolve(store.get(filterMessage));
    })
}

async function updateMessage(id, message){
    return new Promise(async (resolve, reject)=>{
        if(!id || !message){
            reject("Invalid data")
            return false;
        }
        const result = await store.updateM(id, message);
        resolve(result);
    })
}

async function deleteMessage(id){
    return new Promise(async (resolve, reject)=>{
        if(!id){
            reject("Use an id");
            return false;
        }
         const result = await store.del(id);
         resolve(result);
    })
}
module.exports = {
    addMessage,
    getMessages,
    updateMessage,
    deleteMessage,
}