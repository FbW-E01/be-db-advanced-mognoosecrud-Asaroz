import  mongoose  from "mongoose";

const userSchema = new mongoose.Schema({
    email:{type:String,unique:true},
    password:{type:String,minlength:8},
    xrole:{type:String,
           enum:["User","Admin","Editor",null]
    }
})
const User = mongoose.model("Users",userSchema)
export default User

//