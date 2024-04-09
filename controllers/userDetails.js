import User from "../model/userSchema.js"

const userDetails = async(req,res)=>{
    try{
        const {_id} = req.user 
        const aboutUser = await User.findById(_id).select("-password")
        return res.status(200).json({status:"success",userDetails:aboutUser})
    }
    catch(error){
        return res.status(500).json({message:error.message})
    }
}

export default userDetails