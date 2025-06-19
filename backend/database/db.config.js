import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
const DbConfig = async ()=>{
    console.log(process.env.MONGO_URI);
    
    try{
    const response = await mongoose.connect(process.env.MONGO_URI)
    console.log(response.connection._connectionString);
    
    console.log("database connected Successfully");
    
    }catch(e){
        console.log(e);
        
        process.exit(0)
    }
}
export default DbConfig;