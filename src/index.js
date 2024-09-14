//require('dotenv').config({path:"./env"});

import dotenv from "dotenv";
import connectDB from "./db/db.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("error", error);
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log("Server is running");
    });
  })
  .catch((error) => {
    console.log("connection failed", error);
  });
























  
/*
import express from "express";

const app = express();

(async () => {
  try {
    await mongoose.connect(`process.env.MONGODB_URI/${DB_name}`);
    console.log("MongoDB connected");
    app.on("error", (error) => {
      console.log("error", error);
    });
    app.listen(process.env.PORT, () => {
      console.log("Server is running");
    });
  } catch (error) {
    console.log(error);
  }
})();
*/
