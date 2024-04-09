import jwt from "jsonwebtoken"
import User from "../model/userSchema.js"



const authenticateUser = async(req,res,next)=>{
    let token;
    const authHeader = req.headers["authorization"];
    if (authHeader !== undefined) {
      token = authHeader.split(" ")[1];
    }
    if (token === undefined) {
        return res.status(401).json({message:"Token not found"})
    }
    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        if(!decoded){
            return res.status(401).json({message:"Token is invalid or token is expired"})
        }
        const {userId} = decoded 
        req.user = await User.findById(userId)
        next()
    }
    catch(error){
        return res.status(500).json({message:error.message})
    }
}

export default authenticateUser