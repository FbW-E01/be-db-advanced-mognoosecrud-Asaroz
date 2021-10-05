import  mongoose  from "mongoose";


mongoose.connection.on("error",        er => console.log("ERROR", er))
mongoose.connection.on("connected",    () => console.log("connected"))
mongoose.connection.on("disconnected", () => console.log("disconnected"))

export async function dbConnect (){
    const connString= "mongodb://Lars:Lars123@localhost:27017/exampledb"
    await mongoose.connect(connString)
}

export async function dbDisconnect (){
    await mongoose.disconnect()
}