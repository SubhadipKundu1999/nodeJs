function auth(req, res, next){
    console.log('Authanticating....');
    next();
}


module.exports = auth;