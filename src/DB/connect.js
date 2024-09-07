import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const mongodbUrl = "mongodb://localhost:27017/yourdb";  // Corrected variable name

    if (!mongodbUrl) {
      throw new Error('MongoDB URI is not defined in environment variables');
    }

    await mongoose.connect(mongodbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
