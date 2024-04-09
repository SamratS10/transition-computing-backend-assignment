import User from "../model/userSchema.js";
import bcrypt from "bcrypt"

const userRegistration = async(req,res)=>{
    try{
        const {name,email,password} = req.body 
        const userExist = await User.findOne({email:email})
        if(userExist){
            return res.status(400).json({message:"Email registered pls login"})
        }
        if(password.length<6){
            return res.status(400).json({status:"fail",message:"password must be atleast 6 characters long" })
        }
        const salt = await bcrypt.genSalt(11) 
        const hashPassword = await bcrypt.hash(password,salt)
        const user = await User.create({name:name,email:email,password:hashPassword})
        if(!user){
            return res.status(401).json({status:"fail",message:"invalid details"})
        }
        return res.status(201).json({status:"success",message:"User registered successfully"})
    }
    catch(error){
        return res.status(500).json({status:"fail",message:error.message})
    }
}

export default userRegistration

