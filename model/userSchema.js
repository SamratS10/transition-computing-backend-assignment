import mongoose,{Schema} from "mongoose";

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           maxLength: 20
 *           description: "User name."
 *         email:
 *           type: string
 *           format: email
 *           description: "User email address."
 *         password:
 *           type: string
 *           minLength: 6
 *           description: "User password."
 *         role:
 *           type: string
 *           default: "user"
 *           description: "User's role. Defaults to 'user'."
 */



const userSchema = new Schema({
    name:{
        type:String,
        trim:true,
        maxlength:20,
        required:[true,"Please Enter your Name"]
    },
    email:{
        type:String,
        trim:true,
        required:[true,"Please Enter your email"],
        unique:true,
        match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,"Please Enter a valid Email address"]
    },
    password:{
        type:String,
        trim:true,
        required:[true,"Please Enter The Password"],
        minlength:6
    },
    role:{
        type:String,
        default:"user"
    }
},{timestamps:true})

const User = mongoose.model("client",userSchema) || mongoose.models.userSchema

export default User