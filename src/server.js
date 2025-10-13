import express from "express";
import cors from "cors";
import connectDB from "./configs/db.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();

// CORS Configuration
app.use(
  cors({
    origin: [
      "http://localhost:3000", // React development server
      "https://co-build-dubai.vercel.app", // Alternative React port
      "http://localhost:5173", // Vite development server,     // Angular development server
      "https://co-build-dashboard-dubai.vercel.app", // Replace with your actual admin panel domain
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "X-Requested-With",
      "Accept",
      "Origin",
    ],
  })
);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
connectDB();

// Routes
app.get("/", (req, res) => {
  res.send("✅ Backend is running successfully on Vercel!");
});

// API Routes
app.use("/api/users", userRoutes);

export default app;
