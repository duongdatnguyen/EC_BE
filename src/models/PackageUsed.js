const mongoose=require('mongoose');
const Schema=mongoose.Schema;
<<<<<<< HEAD
const ObjectID=Schema.ObjectID;
//const ObjectID=Schema.ObjectID.ObjectID;
var AutoIncrement=require('mongoose-auto-increment');
var connection=mongoose.createConnection('mongodb+srv://tuantai:tuantai@cluster0.hqaql.mongodb.net/EC18B301?retryWrites=true&w=majority');
AutoIncrement.initialize(connection);
=======
//const ObjectID=Schema.ObjectID.ObjectID;

>>>>>>> 75149516f5acc91429ed2c3967d50397a97478e0


const PackageUsed=new Schema({
    MaGoi:{type:String},
    TenNguoiSuDung:{type:String},
<<<<<<< HEAD
    Gia:{type:Number},
    ThoiGianConLai:{type:Date},
    TrangThai:{type:String},
})


PackageUsed.plugin(AutoIncrement.plugin,{model: 'PackageUsed',field: '_id'});

module.exports=mongoose.model('PackageUsed',PackageUsed);

const packageUsed = connection.model('PackageUsed', PackageUsed);
=======
    Gia:{type:Float32Array},
    ThoiGianConLai:{type:Int32Array},
    TrangThai:{type:String},
})

module.exports=mongoose.model('PackageUsed',PackageUsed);
>>>>>>> 75149516f5acc91429ed2c3967d50397a97478e0
