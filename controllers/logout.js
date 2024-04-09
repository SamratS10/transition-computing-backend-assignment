const userSignOut = async(req,res)=>{
    try{
        res.cookie("jwtoken",null,{expires:new Date(Date.now())})
        return res.status(200).json({message:"Logged out successfully"})
    }
    catch(e){
        return res.status(401).json({"message":e})
    }
}

export default userSignOut