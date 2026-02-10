import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectToDB=async ()=>{
    await mongoose.connect(process.env.MONGO_URL || 'mongodb+srv://guptakaranport:karang2006@cluster0.gapyepy.mongodb.net/');
}

connectToDB()
.then(()=>console.log("Connected to DB"))
.catch((err)=>console.log("DB connection error",err));

export default connectToDB;