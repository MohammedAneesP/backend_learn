import dotenv from "dotenv";
import path from "node:path";
import connectDb from "./config/databse.js";
import { error } from "node:console";
import app from "./app.js";

dotenv.config(
  { path: './.env' }
);

const startServer = async () => {
  try {
    await connectDb();


    app.on(error, (error) => {
      console.log("error", error);
      throw error;
    });

    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port ${process.env.PORT || "8000"}`);
    });

  } catch (error) {
    console.log("error starting server", error);
  }
}
startServer();