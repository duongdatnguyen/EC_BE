const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const ObjectID=Schema.ObjectID;
<<<<<<< HEAD
//const AutoIncrement=require('mongoose-auto-increment')(mongoose);
var AutoIncrement=require('mongoose-auto-increment');
var connection=mongoose.createConnection('mongodb+srv://tuantai:tuantai@cluster0.hqaql.mongodb.net/EC18B301?retryWrites=true&w=majority');
AutoIncrement.initialize(connection);



const OrderDetail=new Schema({
    MaDonHang:{type:String,ObjectID},
=======

const OrderDetail=new Schema({
    MaDonHang:{type:String},
>>>>>>> 75149516f5acc91429ed2c3967d50397a97478e0
    TenKhachHang:{type:String},
    SdtKH:{type:String},
    Loaihang:{type:String},
    TenMatHang:{type:String},
    NoiGuiHang:{type:String},
    NoiNhanHang:{type:String},
    NgayVanChuyen:{type:Date},
<<<<<<< HEAD
    ChiPhi:{type:Number},
    GhichuKH:{type:String},
    TrangThai:{type:Number}

})
OrderDetail.plugin(AutoIncrement.plugin,{model: 'OrderDetail',field:'MaDonHang'});

//OrderDetail.plugin(AutoIncrement,{inc_field: 'MaDonHang'});
module.exports=mongoose.model('OrderDetail',OrderDetail);


const orderDetail = connection.model('OrderDetail', OrderDetail);
=======
    ChiPhi:{type:String},
    GhichuKH:{type:String},
    TrangThai:{type:String}

})
module.exports=mongoose.model('OrderDetail',OrderDetail);
>>>>>>> 75149516f5acc91429ed2c3967d50397a97478e0
