const mongoose=require('mongoose');
const User = require('../models/User');
const bcrypt = require('bcrypt');
class UserController{

    ListUser(req,res,next)
    {
      User.find({})
               .then(User=>res.json(User))
               .catch(error=>res.status(500).send({ message: err.message || "Some error occurred while retrieving notes."}))
    }

    OneUser(req,res,next)
    {
      User.findById(req.params.userID)
          .then(User=>res.json(User))
          .catch(err=>{
            if(err.kind==='ObjectId'){
<<<<<<< HEAD
              return res.status(400).send({
                message: "Note not found with id " + req.params.userId
            });           
            } 
            return res.status(400).send({
=======
              return res.status(404).send({
                message: "Note not found with id " + req.params.userId
            });           
            } 
            return res.status(500).send({
>>>>>>> 75149516f5acc91429ed2c3967d50397a97478e0
              message: "Error retrieving note with id " + req.params.UserId
          });
          });
    }

    AddUser(req,res,next)
    {
         //res.json(req.body);
         User.findOne({Email:req.body.Email},(err,user)=>{
<<<<<<< HEAD
          if(user==null)
=======
          if(user===null)
>>>>>>> 75149516f5acc91429ed2c3967d50397a97478e0
          {
            bcrypt.hash(req.body.MatKhau, 10,(err,hash)=>{
              if(err) throw err;
              const user=new User(req.body);
              user.MatKhau=hash;
<<<<<<< HEAD
              console.log("Go to save model");
              user.save((err,user)=>{
                if(err) throw err;
                res.json({'mess': 'Save complete'});
              });
              })
              
          }
          else{
              res.json({'mess': 'Use have exist'});
          }
          })
=======
              user.save((err,user)=>{
                console.log("Going to save user");
                if(err) throw err;
                res.status(200).json({'mess': 'Add user success'},{"user":user});
              })
              })}
              else
              res.status(404).json({'mess': 'Add user failed'});
          })
      //  const user=new User(req.body);
      //  user.MatKhau=bcrypt.hash(req.body.MatKhau,10);
      //  user.save().exec().then(()=>{
      //   res.send("User saved");
      //  }).catch((err)=>{
      //   res.json({'mess': 'Add user fail'})
      //  });
>>>>>>> 75149516f5acc91429ed2c3967d50397a97478e0
       
    }
    updateUser(req,res,next)
    {
      const id=req.params.userID;
      const updateUser=req.body;
      User.findOneAndUpdate({_id:id},{$set:updateUser})
        .exec()
        .then(()=>
      {
        res.status(200).json({
          success: true,
          message: 'User is updated',
          updateUser: updateUser,
        });
      })
        .catch((err)=>{
<<<<<<< HEAD
        res.status(400).json({
=======
        res.status(500).json({
>>>>>>> 75149516f5acc91429ed2c3967d50397a97478e0
          success: false,
          message: 'Server error. Please try again.',
          error:err
        });
      })
    }
    deleteUser(req,res,next)
    {
      console.log("Going to");
      const id=req.params.userID;
      User.findOneAndDelete({_id:id})
        .exec()
        .then(()=>
        res.json({'mess': 'Delete success'}))
        .catch((err) => res.json({'mess': 'Delete unsuccess'}));
    }


<<<<<<< HEAD
      login(req,res,next)
=======
    login(req,res,next)
>>>>>>> 75149516f5acc91429ed2c3967d50397a97478e0
    {
      User.findOne({Email:req.body.Email}).exec((err,user)=>{

        if(!user)
         return res.json({err:"Username or Password is incorrect"});
         else
        {
            bcrypt.compare(req.body.MatKhau, user.MatKhau, (err, result)=>{
                if(result === true){
                    req.session.user = user
                    res.json({
                        user: user,
                        "login": "success"
                    }, )
                }else{
                    return res.json({err: 'Email or Password is incorrect'})
                }
             })
        } 
    })
  }
    logout(req,res)
    {
      if (req.session) {
        // delete session object
        req.session.destroy(function(err) {
            if(err) {
                return res.json({err});
            } else {
                return res.json({'logout': "Success"});
            }
        });
    }
    }
}

module.exports=new UserController;