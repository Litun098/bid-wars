const jwt = require('jsonwebtoken');
const response = require('./response');

const authConfig = {
    'jwtSecret':"ThisIsATestSecret"
}

const AuthorizationMiddleware = async (req,res,next)=>{
    let token = req.headers('Authorization');

    if(!token){
        response(res,null,{'err':"Token not provided."},null,401)
    }

    try{
        token = token.split(' ')[1];
        if(token === null || token === undefined){
            response(res,"Token is null","",null,401);
        }
        req.userId = token;
        req.query.userId = token;
        req.body.userOd =  token;
        next();
    }catch(err){
        response(res,err,"Error parsing auth header.",null,401);
    }
}

module.exports = {
    AuthorizationMiddleware,
    authConfig
}