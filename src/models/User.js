const mongoose=require('mongoose');
const Schema=mongoose.Schema;
//const ObjectID=Schema.ObjectID.ObjectID;



const User=new Schema({
    TenKH:{type:String},
    MatKhau:{type:String},
    CMND:{type:String},
    DiaChiKH:{type:String},
    Email:{type:String, unique: true},
    TrangThai:{type:Number,
    enum:[1,2,3]}
})

module.exports=mongoose.model('User',User);