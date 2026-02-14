import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const createIndexes = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL || 'mongodb+srv://guptakaranport:karang2006@cluster0.gapyepy.mongodb.net/');
    
    const db = mongoose.connection.db;
    
    console.log("Creating email index...\n");
    
    // Create email index (unique)
    await db.collection('users').createIndex({ email: 1 }, { unique: true });
    console.log("✅ Created: email_1 (unique)");
    
    // Show all indexes
    console.log("\n📋 All indexes:");
    const indexes = await db.collection('users').indexes();
    console.log(JSON.stringify(indexes, null, 2));
    
    await mongoose.disconnect();
    console.log("\n✅ Done!");
    process.exit(0);
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
};

createIndexes();
