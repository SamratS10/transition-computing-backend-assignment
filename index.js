import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import connectMongoDb from "./utils/connectDb.js"
import userRouter from "./routes/userRouter.js"
import cookieParser from "cookie-parser"
import swaggerDocs from "./utils/swagger.js"
dotenv.config()

const app = express()
app.use(express.json())
app.use(cors());
app.use(bodyParser.json())
app.use(cookieParser())


const port = process.env.PORT || 5002

app.listen(port,()=>console.log(`App is listening to port ${port}`))
connectMongoDb()
swaggerDocs(app,port)
app.use("/api/v1",userRouter)