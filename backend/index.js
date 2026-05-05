const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const requiredEnvVars = ["MONGO_URI", "JWT_SECRET"];
const missingEnvVars = requiredEnvVars.filter((key) => !process.env[key]);

if (missingEnvVars.length > 0) {
  console.error(
    `Missing required environment variable(s): ${missingEnvVars.join(", ")}`
  );
  process.exit(1);
}

// ✅ ENABLE CORS FIRST
app.use(cors());
app.use(express.json());

// Routes
const eventRoutes = require("./routes/eventRoutes");
app.use("/api/events", eventRoutes);
const clubRoutes = require("./routes/clubRoutes");
app.use("/api/clubs", clubRoutes);
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

// Database connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.log("MongoDB connection failed:", error);
  });

// Health check
app.get("/health", (req, res) => {
  res.send("Server is running fine");
});

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
