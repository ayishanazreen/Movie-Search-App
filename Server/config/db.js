const mongoose = require('mongoose');

// MongoDB connection setup using environment variable for security
const connectDb = async () => {
  try {
    // Ensure the connection string is set in environment variables
    const dbUri = process.env.MONGO_URL;
    if (!dbUri) {
      throw new Error('MongoDB URI is not defined in environment variables');
    }

    // Connecting to MongoDB using the connection string
    const { connection } = await mongoose.connect(dbUri, {
      serverSelectionTimeoutMS: 30000, // Optional: Increase timeout for slow connections
      socketTimeoutMS: 45000, // Optional: Set socket timeout
    });

    console.log('Database Connected:', connection.host);
  } catch (error) {
    console.error('Error connecting to the database:', error.message);
    // Optionally exit the process if the connection fails
    process.exit(1);
  }
};

module.exports = connectDb;