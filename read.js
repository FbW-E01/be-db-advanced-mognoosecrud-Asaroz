import {dbConnect,dbDisconnect} from "./connection.js"
import userModel from "./user.js"


dbConnect()
const users = await userModel.find()
console.log(users)
dbDisconnect()

