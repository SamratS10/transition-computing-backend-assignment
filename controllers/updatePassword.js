import bcrypt from "bcrypt"
import User from "../model/userSchema.js"

const updateClientPassword = async(req,res)=>{
    try{
        const {email,password,confirmPassword} = req.body
        const findUser = await User.findOne({email:email})
        if(!findUser){
            return res.status(400).json({message:"email not found,Please register"})
        }
        const {_id} = findUser
        if(password!==confirmPassword){
            return res.status(400).json({message:"password and confirm password are not matched"})
        }
        if(password.lenght<6){
            return res.status(400).json({message:"password must be at least 6 characters"})
        }
        const salt = await bcrypt.genSalt(11) 
        const hashPassword = await bcrypt.hash(password,salt)
        const updatePassword = await User.findByIdAndUpdate(_id,{password:hashPassword})
        if(updatePassword){
            return res.status(200).json({status:"success",message:"Password updated successfully"})
        }
    }
    catch(error){
        return res.status(500).json({message:error.message})
    }
}

export default updateClientPassword