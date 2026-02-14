import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const cleanupIndexes = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL || 'mongodb+srv://guptakaranport:karang2006@cluster0.gapyepy.mongodb.net/');
    
    const db = mongoose.connection.db;
    
    // Indexes to drop (old schema indexes that don't match current User model)
    const indexesToDrop = [
      'profile.email_1',
      'profile.phone_1',
      'location.coordinates_2dsphere',
      'vehicle.registrationNumber_1',
      'location.city_1_subscription.plan_1',
      'subscription.isActive_1_subscription.endDate_1',
      'status_1'
    ];
    
    console.log("Dropping old indexes...\n");
    
    for (const indexName of indexesToDrop) {
      try {
        await db.collection('users').dropIndex(indexName);
        console.log(`✅ Dropped: ${indexName}`);
      } catch (err) {
        console.log(`⚠️  Not found: ${indexName}`);
      }
    }
    
    // Show final indexes
    console.log("\n📋 Final indexes:");
    const finalIndexes = await db.collection('users').indexes();
    console.log(JSON.stringify(finalIndexes, null, 2));
    
    await mongoose.disconnect();
    console.log("\n✅ Cleanup complete!");
    process.exit(0);
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
};

cleanupIndexes();
