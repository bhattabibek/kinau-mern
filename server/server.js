import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import authRoutes from "./routes/auth.route.js";
import productRoutes from "./routes/product.route.js";  // Uncommented and imported

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());


// Register your routes properly
app.use("/auth", authRoutes);
app.use("/api/products",productRoutes);   // You forgot to add the route handler here

const PORT = process.env.PORT || 8000;

// mongoose
//   .connect(process.env.MONGO_URI, {})
//   .then(() => {
//     app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
//   })
//   .catch((error) => console.error("MongoDB connection error:", error));

 app.listen(PORT, () => console.log(`Server running on port ${PORT}`));