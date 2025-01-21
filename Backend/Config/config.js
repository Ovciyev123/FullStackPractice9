import { config } from "dotenv";
import { connect } from "mongoose";


config()

connect(process.env.MongodbUrl)
.then(()=>{


    console.log("Connected");
    
})