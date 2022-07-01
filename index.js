const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const server = require('http').Server(app);
const cors = require('cors');


const routes = require('./routes/routes');
const db = require('./database/db');
const socket = require('./websocket/socket');

db('mongodb+srv://joseDev:GzjSozu1pL3XorcU@cluster0.hpwdn.mongodb.net/?retryWrites=true&w=majority');
// app.use('/', (req, res) =>{
//     res.send("Holita");
// })
app.use(cors());
app.use(bodyparser.json());
//El router debe ir de ultimas siempre
//app.use(router);
//Cambia a...
socket.connect(server);
//Conecta el websocket
routes(app);


server.listen(8080, ()=>{
    console.log(`Listening on port: 8080`);
});