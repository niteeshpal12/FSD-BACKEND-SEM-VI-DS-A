import mongoose from 'mongoose'

export default async function  connectdb() {
    try{
        const connectionString = `${process.env.DB_URL}/fsd`
        console.log("connectionString: ",connectionString)
        const connection =await mongoose.connect(connectionString);
        if(!connection){
            throw new Error("Failed to connect to MongoDb");
            process.exit(1);
        }
        console.log("👍👍Connected to Mongodb successfully");
    }
    catch(err){
        console.log("Error connectiong to mongodb:",err);
        process.exit(1);
    }
    
}