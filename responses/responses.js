exports.success = (req, res, message, status) =>{
    res.status(status).send({
        "error": null,
        "body": message,
    });
}

exports.error  = (req, res, errStack, errorCode)=>{
    res.status(errorCode).send({
        "error": errStack,
    });
}