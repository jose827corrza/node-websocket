const socketIO = require('socket.io');
const socket = {}// Esto es para que quede parecido a un puntero

function connect(server){
    socket.io = socketIO(server);
};

module.exports = {
    connect,
    socket,
}