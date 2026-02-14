import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dropIndex = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL || 'mongodb+srv://guptakaranport:karang2006@cluster0.gapyepy.mongodb.net/');
    
    const db = mongoose.connection.db;
    
    // List all indexes
    console.log("Current indexes:");
    const indexes = await db.collection('users').indexes();
    console.log(JSON.stringify(indexes, null, 2));
    
    // Drop the problematic userId_1 index
    try {
      await db.collection('users').dropIndex('userId_1');
      console.log("\n✅ Successfully dropped userId_1 index");
    } catch (err) {
      console.log("\n⚠️ Index userId_1 not found or already dropped");
    }
    
    // Show remaining indexes
    console.log("\nRemaining indexes:");
    const remainingIndexes = await db.collection('users').indexes();
    console.log(JSON.stringify(remainingIndexes, null, 2));
    
    await mongoose.disconnect();
    console.log("\n✅ Done!");
    process.exit(0);
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
};

dropIndex();
