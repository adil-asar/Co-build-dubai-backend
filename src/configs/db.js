import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const mongoURI = 'mongodb+srv://co-build:Cobuild%40123@cluster0.amgjuft.mongodb.net/cloud-dubai?retryWrites=true&w=majority&appName=Cluster0';

    const conn = await mongoose.connect(mongoURI);
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
