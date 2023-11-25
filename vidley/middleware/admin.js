module.exports = function admin(req, res, next){
    // 401: unauthorization : wrong token
    // 403: forbidden: right token but still as not admin so accesse denied
     console.log(req.user.isAdmin);
    if(!req.user.isAdmin)
    return res.status(403).send('Access Denied');

    next();
}