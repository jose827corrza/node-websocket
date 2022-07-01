const express = require('express');
const message = require('../controllers/message');
const user = require('../controllers/user');
const chat = require('../controllers/chat');

const routes = (server)=>{
    server.use("/message", message)
    server.use("/user", user)
    server.use("/chat", chat)
};

module.exports = routes;