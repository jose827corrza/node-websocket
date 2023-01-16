
const Model = require('../models/message');
const list = [];

function add(body){
    // list.push(body);
    const newMessage = new Model(body);
    newMessage.save();
}

async function get(filterMessage){
    let filter = {}
    if (filterMessage !== null){
        filter = { user: filterMessage};
    }
    const messages = await Model.find(filter).populate('user');
    return messages;
}

async function updateM(id, message){
    const messageFound = await Model.findByIdAndUpdate(id,{message}, {new: false});
    return messageFound;
}

async function del(id){
    return await Model.findOneAndDelete({ _id: id});
}

module.exports = {
    add,
    get,
    updateM,
    del,
}