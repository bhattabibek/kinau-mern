// server.js
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import authRoutes from "./routes/auth.js";

dotenv.config();
const app = express();

app.use(cors()); // MUST come first
app.use(express.json()); // Enables JSON body parsing

// ✅ Route Setup

app.use("/auth", authRoutes);

mongoose
  .connect(process.env.MONGO_URI, {})
  .then(() => {
    app.listen(process.env.PORT, () =>
      console.log(`Server running on port ${process.env.PORT}`)
    );
  })
  .catch((error) => console.log(error));
