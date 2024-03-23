exports.success = function(req,res,message,status) {
    let statusCode    = status  || 200;
    let statusMessage = message || "";
    res.status(status)
    .send({
        erorr :false,
        status:status,
        body  :message,
    });
};

exports.success = function(req, res, message, status){
     let statusCode    = status  || 500;
     let statusMessage = message || "Internal server error";
    res.error(status).send({
        error  :false,
        status :status, 
        body   : message,
    });
}