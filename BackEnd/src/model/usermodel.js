const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://admin:admin123@library.92eaw.mongodb.net/Exitexam?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology: true});
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    
    email:String,
    otp:Number,
    
});

var userdata = mongoose.model('userdatas' , UserSchema)
module.exports =userdata