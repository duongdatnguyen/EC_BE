const homeroutes=require('./Homes');
const useroute=require('./UserRoute')
const session = require('express-session')
 function route(app){
    
    
     app.use('/',homeroutes);
     app.use('/user',useroute);
}

module.exports=  route;