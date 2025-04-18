import UserModel from "../models/user.model.js";

 export const registerUser=async(req,res)=>{
    try{
        const {name,email,password}= req.body;
        if(!name||!password||!email){
            return res.status(400).json({message:'fill all the fields'})
        }
        const user  =  await UserModel.create({
            name,
            email,
            password
        })
        if(!user){
            return res.status(400).json({message:'user regestraion failed'})
        }
        return res.status(200).json({message:"user regestration success",user})
    }
     catch(error){
        console.log("error in db connection:",error);
        res.status(500).json({message:'internal server error'})
     }

}