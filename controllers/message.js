const express = require('express');
const multer = require('multer');
const router = express.Router();

const responses = require('../responses/responses');
const mController = require('../services/message');

var storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'uploads/')
    },
    filename: function(req, file, cb){
        cb(null, Date.now()+'.jpg')
    }
})
const upload = multer({
    storage: storage,
}) 

router.get("/", (req, res)=>{
    const filterMessage = req.query.user || null;
    console.log(req.headers);
    mController.getMessages(filterMessage)
    .then((response)=>{
        responses.success(req, res, response, 200)
    })
    .catch((response)=>{
        responses.error(req, res, response,500)
    })
    
});
router.post("/",upload.single('file'), (req, res)=>{
    //res.send("desde post");
    const body = req.body
    console.log(body);
    const {chat, user, message} = req. body;
    //el archivo "file" en el request no viene en el body, super importante
    mController.addMessage(chat, user, message, req.file)
    .then((fullMessage) =>{
        responses.success(req, res, fullMessage, 201);
    })
    .catch((fullMessage) =>{
        responses.error(req, res, fullMessage, 500)
    });
});

router.patch("/:id", (req, res)=>{
    const id = req.params.id;
    mController.updateMessage(id, req.body.message)
    .then((data)=>{
        responses.success(req, res, data, 200);
    })
    .catch(e =>{
        responses.error(req, res,"Internal error", 500);
    });
});

router.delete("/:id", async(req, res)=>{
    const id = req.params.id;
    mController.deleteMessage(id)
    .then((data)=>{
        responses.success(req, res, data, 200);
    })
    .catch(e=>{
        responses.error(req, res, "Could not be deleted", 500);
    });
});

module.exports = router;