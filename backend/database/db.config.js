import mongoose from 'mongoose'
const DbConfig = async ()=>{
    try{
    const response = await mongoose.connect(process.env.MONGODB_URL)
    console.log(response.connection._connectionString);
    
    console.log("database connected Successfully");
    
    }catch(e){
        console.log(e);
        
        process.exit(0)
    }
}
export default DbConfig;