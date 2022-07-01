const express = require('express');
const router = express.Router();

const responses = require('../responses/responses');
const uController = require('../services/user');

router.post("/", (req, res)=>{
    uController.addUser(req.body.name)
    .then(data=>{
        responses.success(req, res, data, 201);
    })
    .catch(e=>{
        responses.error(req, res, "Invalid", 500);
    });
})
module.exports = router;