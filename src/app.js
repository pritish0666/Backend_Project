import express, { urlencoded } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import path from "path";



const app = express();
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// app configurations
app.use(express.json({ limit: "16kb" }));
app.use(urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());
app.use(express.static(path.resolve("./Public")));

app.get("/", (req, res) => {
  return res.sendFile("/public/index.html");
});

//ROUTES IMPORT
import userRoutes from "./routes/user.routes.js";
import paymentRoutes from "./routes/payment.routes.js";
import emailRoutes from "./routes/email.routes.js";

//ROUTES
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/payment", paymentRoutes);
app.use("/api/v1/email", emailRoutes);

export { app };
