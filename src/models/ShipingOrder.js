const mongoose=require('mongoose');
const Schema=mongoose.Schema;
//const ObjectID=Schema.ObjectID.ObjectID;



const ShipingOrder=new Schema({
    MaDonHang:{type:String},
    Chiphi:{type:String},
    Gia:{type:Float32Array},
    TenDN:{type:String},
    GhichuDN:{type:String},
    TrangThai:{type:String},
})

module.exports=mongoose.model('ShipingOrder',ShipingOrder);