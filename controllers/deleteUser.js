import User from "../model/userSchema.js"

const deleteClient = async(req,res)=>{
    try{
        const {id} = req.params 
        const removeClient = await User.findByIdAndDelete(id)
        if(!removeClient){
            return res.status(400).json({message:"invalid id provided"})
        }
        return res.status(200).json({status:"success",message:"client deleted successfully"})

    }
    catch(error){
        return res.status(500).json({message:error.message})
    }
}

export default deleteClient