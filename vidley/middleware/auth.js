const jwt = require('jsonwebtoken');


module.exports = function auth(req, res, next){
    const token = req.header('x-auth-token');
    if(!token) return res.status(400).send('Access Denied, No token is provided');

    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET_CODE);
        req.user = decode;
        next();
    }
    catch(ex){
        res.status(400).send('invalid token')
    }


}