exports.success = function(req,res,message,status) {
    res.status(status)
    .send({
        erorr:false,
        status:status,
        body:message
    });
};
