import { model, Schema } from "mongoose";






const userSchema=new Schema({
    name:{
        type:String,
        trim:true
    },
    email:{
        type:String,
        unique:true,
        trim:true
    },
    password:{
        type:String,
        trim:true
    }
    
})
const UserModel=model('User',userSchema)
export default UserModel;