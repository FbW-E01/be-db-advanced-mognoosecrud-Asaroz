import {dbConnect,dbDisconnect} from "./connection.js"
import userModel from "./user.js"
import faker from "faker"



await dbConnect()
for (let i = 0; i < 3; i++) {
    const email = faker.internet.email()
    const password = faker.internet.password()
    let role= ""
    switch (i) {
        case 0:
            role = "Admin"
            break;
        case 1:
            role = "User"
            break;
        case 2:
            role = "Editor"
            break;
    }
    
    console.log({email:email,password:password,xrole:role})
    await userModel.create({email:email,password:password,xrole:role})
}
await dbDisconnect()
