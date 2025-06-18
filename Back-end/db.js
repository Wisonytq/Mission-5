const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
dotenv.config();

const client = new MongoClient(process.env.MONGO_URI);

async function connectDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB!");
    return client.db(); // returns the database object
  } catch (err) {
    console.error("MongoDB connection failed:", err);
    process.exit(1);
  }
}

module.exports = { connectDB };