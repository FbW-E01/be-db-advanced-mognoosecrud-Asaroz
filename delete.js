import {dbConnect,dbDisconnect} from "./connection.js"
import userModel from "./user.js"


dbConnect()
const users = await userModel.find()
const user = await userModel.deleteOne({email:users[0].email})

dbDisconnect()