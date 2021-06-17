



class RequiueLogin{
    requiresLogin(req, res, next) {
     if (req.session && req.session.user) {
        return next();
        } else {
        return res.json({err: 'You must be logged in to view this page.'});
        }
    }
<<<<<<< HEAD

    requiresLoginenterPrise(req, res, next) {
        if (req.session && req.session.enterprise) {
           return next();
           } else {
           return res.json({err: 'You must be logged in to view this page.'});
           }
       }
=======
>>>>>>> 75149516f5acc91429ed2c3967d50397a97478e0
}

module.exports=new RequiueLogin();