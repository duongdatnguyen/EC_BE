



class RequiueLogin{
    requiresLogin(req, res, next) {
     if (req.session && req.session.user) {
        return next();
        } else {
        return res.json({err: 'You must be logged in to view this page.'});
        }
    }
}

module.exports=new RequiueLogin();