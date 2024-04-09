import User from "../model/userSchema.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const userLogin = async(req,res)=>{
    try{
        const {email,password} = req.body
        const findUser = await User.findOne({email})
        if(!findUser){
            return res.status(400).json({status:"fail",message:"email not exist please register"})
        }
        const comparePassword = await bcrypt.compare(password,findUser.password)
        if(!comparePassword){
            return res.status(400).json({status:"fail",message:"invalid password"})
        }
        const token = jwt.sign({userId:findUser._id},process.env.JWT_SECRET,{expiresIn:"1d"})
        let options = {
            maxAge:new Date(Date.now()+86400000),
            httpOnly:true,
            secure:true,
            sameSite:"None"
        }
        res.cookie("jwtoken",token,options)
        return res.status(200).json({status:"success",message:"Logged in successful",token:token})
    }
    catch(error){
        return res.status(501).json({message:error.messager})
    }
}

export default userLogin
