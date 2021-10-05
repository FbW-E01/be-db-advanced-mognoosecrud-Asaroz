import {dbConnect,dbDisconnect} from "./connection.js"
import userModel from "./user.js"


dbConnect()
const users = await userModel.find()
let user = await userModel.findOne({email:users[0].email})
user.email = "lars@lars.de"
user = await user.save()
dbDisconnect()