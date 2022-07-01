const { response } = require('express');
const express = require('express');
const router = express.Router();

const responses = require('../responses/responses');
const cController = require('../services/chat');

router.post('/', (req, res)=>{
    cController.addChat(req.body.users)
    .then(data=>{
        responses.success(req, res, data, 201);
    })
    .catch(e=>{
        responses.error(req, res,'Internal chat error', 500);
    });
});

router.get('/:id',(req, res)=>{
    cController.listChats(req.params.id)
    .then(data=>{
        responses.success(req, res, data, 200);
    })
    .catch(e=>{
        responses.error(req, res, e, 500);
    });
});
router.get('/',(req, res)=>{
    cController.listChats()
    .then(data=>{
        responses.success(req, res, data, 200);
    })
    .catch(e=>{
        responses.error(req, res, e, 500);
    });
});

module.exports= router;