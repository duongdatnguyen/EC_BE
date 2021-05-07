const mongoose=require('mongoose');
const Schema=mongoose.Schema;
//const ObjectID=Schema.ObjectID.ObjectID;



const PackageUsed=new Schema({
    MaGoi:{type:String},
    TenNguoiSuDung:{type:String},
    Gia:{type:Float32Array},
    ThoiGianConLai:{type:Int32Array},
    TrangThai:{type:String},
})

module.exports=mongoose.model('PackageUsed',PackageUsed);