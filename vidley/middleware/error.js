module.exports = function(req, res, neext){
    
    //log the exception
    res.status(500).send('internal server error');
}