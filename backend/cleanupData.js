import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const cleanupData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL || 'mongodb+srv://guptakaranport:karang2006@cluster0.gapyepy.mongodb.net/');
    
    const db = mongoose.connection.db;
    
    console.log("Checking for invalid documents...\n");
    
    // Find documents with null or missing email
    const invalidDocs = await db.collection('users').find({ 
      $or: [
        { email: null },
        { email: { $exists: false } }
      ]
    }).toArray();
    
    console.log(`Found ${invalidDocs.length} documents with null/missing email`);
    
    if (invalidDocs.length > 0) {
      // Delete them
      const result = await db.collection('users').deleteMany({
        $or: [
          { email: null },
          { email: { $exists: false } }
        ]
      });
      console.log(`✅ Deleted ${result.deletedCount} invalid documents`);
    }
    
    // Now create the email index
    console.log("\nCreating email index...");
    await db.collection('users').createIndex({ email: 1 }, { unique: true });
    console.log("✅ Created: email_1 (unique)");
    
    // Show all indexes
    console.log("\n📋 All indexes:");
    const indexes = await db.collection('users').indexes();
    console.log(JSON.stringify(indexes, null, 2));
    
    // Show remaining documents
    const count = await db.collection('users').countDocuments();
    console.log(`\n📊 Total users: ${count}`);
    
    await mongoose.disconnect();
    console.log("\n✅ Done!");
    process.exit(0);
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
};

cleanupData();
