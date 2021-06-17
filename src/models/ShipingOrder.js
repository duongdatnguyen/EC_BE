const mongoose=require('mongoose');
const Schema=mongoose.Schema;
//const ObjectID=Schema.ObjectID.ObjectID;
<<<<<<< HEAD
var AutoIncrement=require('mongoose-auto-increment');
var connection=mongoose.createConnection('mongodb+srv://tuantai:tuantai@cluster0.hqaql.mongodb.net/EC18B301?retryWrites=true&w=majority');
AutoIncrement.initialize(connection);


const ShipingOrder=new Schema({
    MaDonHang:{type:Number},
    Chiphi:{type:Number},
    Gia:{type:Number},
    TenDN:{type:String},
    GhichuDN:{type:String},
    TrangThai:{type:Number},
})


ShipingOrder.plugin(AutoIncrement.plugin,{model: 'ShipingOrder',field: '_id'});

module.exports=mongoose.model('ShipingOrder',ShipingOrder);

const shipingOrder = connection.model('ShipingOrder', ShipingOrder);
=======



const ShipingOrder=new Schema({
    MaDonHang:{type:String},
    Chiphi:{type:String},
    Gia:{type:Float32Array},
    TenDN:{type:String},
    GhichuDN:{type:String},
    TrangThai:{type:String},
})

module.exports=mongoose.model('ShipingOrder',ShipingOrder);
>>>>>>> 75149516f5acc91429ed2c3967d50397a97478e0
