import User from "../model/userSchema.js"

const getAllRegisteredClients = async(req,res)=>{
    try{
        const clients = await User.find({}).select("-password")
        res.status(200).json({status:"success",RegisteredClients:clients})
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}

export default getAllRegisteredClients