const store = require('../store/user');

async function addUser(user){
    return new Promise((resolve, reject)=>{
        if(!user){
            Promise.reject("Invalid name") 
        }
        const newUser = {
            name: user,
        }
        const result = store.add(newUser);
        resolve(result);
    })
    
};

async function getUsers() {
    return new Promise((resolve, reject) => {
        const users = store.get();
        resolve(users)
    })
}

module.exports = {
    addUser,
    getUsers
}