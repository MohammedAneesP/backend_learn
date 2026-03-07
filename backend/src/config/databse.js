import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`);
    console.log(`Datatbase connected succesfully \n
      host : ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error("Error connecting to database:", error);
  }
}

export default connectDb;