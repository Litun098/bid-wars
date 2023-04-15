const response = (req,err,message,statusCode)=>{
    let response = (err,message,data);

    return res.status(statusCode).json(response);
}

module.exports = {response}