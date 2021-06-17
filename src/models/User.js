const mongoose=require('mongoose');
const Schema=mongoose.Schema;
//const ObjectID=Schema.ObjectID.ObjectID;

<<<<<<< HEAD
var AutoIncrement=require('mongoose-auto-increment');
var connection=mongoose.createConnection('mongodb+srv://tuantai:tuantai@cluster0.hqaql.mongodb.net/EC18B301?retryWrites=true&w=majority');
AutoIncrement.initialize(connection);

=======
>>>>>>> 75149516f5acc91429ed2c3967d50397a97478e0


const User=new Schema({
    TenKH:{type:String},
    MatKhau:{type:String},
    CMND:{type:String},
    DiaChiKH:{type:String},
    Email:{type:String, unique: true},
    TrangThai:{type:Number,
    enum:[1,2,3]}
})

<<<<<<< HEAD

User.plugin(AutoIncrement.plugin,{model: 'User',field: '_id'});
module.exports=mongoose.model('User',User);


const user = connection.model('User', User);
=======
module.exports=mongoose.model('User',User);
>>>>>>> 75149516f5acc91429ed2c3967d50397a97478e0
