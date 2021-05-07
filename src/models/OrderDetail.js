const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const ObjectID=Schema.ObjectID;

const OrderDetail=new Schema({
    MaDonHang:{type:String},
    TenKhachHang:{type:String},
    SdtKH:{type:String},
    Loaihang:{type:String},
    TenMatHang:{type:String},
    NoiGuiHang:{type:String},
    NoiNhanHang:{type:String},
    NgayVanChuyen:{type:Date},
    ChiPhi:{type:String},
    GhichuKH:{type:String},
    TrangThai:{type:String}

})
module.exports=mongoose.model('OrderDetail',OrderDetail);