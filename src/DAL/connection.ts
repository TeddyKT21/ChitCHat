import { connect } from "mongoose";
import * as dotenv from 'dotenv';
dotenv.config()
const connectToMongo = async() => {    
    await connect(process.env.CONNECTION_STRING!)
    console.log('connected to mongo')
}

export default connectToMongo;