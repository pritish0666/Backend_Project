//require('dotenv').config({path:"./env"});

import dotenv from "dotenv";


import connectDB from "./db/db.js";



dotenv.config({
    path: "./env"
})



connectDB();;





















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
