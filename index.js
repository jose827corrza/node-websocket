const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const server = require('http').Server(app);
const cors = require('cors');


const routes = require('./routes/routes');
const config = require('./config');
const db = require('./database/db');
const socket = require('./websocket/socket');
const swaggerDocument = YAML.load('./doc.yaml');

db(config.db_url)
// db(`mongodb+srv://${config.db_user}:${config.db_password}@cluster0.hpwdn.mongodb.net/?retryWrites=true&w=majority`);
// db('mongodb+srv://joseDev:GzjSozu1pL3XorcU@cluster0.hpwdn.mongodb.net/?retryWrites=true&w=majority')
// app.use('/', (req, res) =>{
//     res.send("Holita");
// })
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(cors());
app.use(bodyparser.json());
//El router debe ir de ultimas siempre
//app.use(router);
//Cambia a...
socket.connect(server);
//Conecta el websocket
routes(app);


server.listen(config.port, ()=>{
    console.log(`Listening on port: ${config.port}. . . ${config.environment} environment`);
});