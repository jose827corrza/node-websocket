
//mongodb+srv://joseDev:<password>@cluster0.hpwdn.mongodb.net/?retryWrites=true&w=majority

const db = require('mongoose');

db.Promise = global.Promise;
async function connect(url){
    await db.connect(url, {
       useNewUrlParser:true,
   });
   console.log("Connected to DB in mongo");
}

module.exports = connect;