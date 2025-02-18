const express = require('express');

require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./config/db")
const authRoutes = require("./routes/authRoutes");

const PORT = process.env.PORT || 5000;
const app = express();

// Middleware to parse JSON
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// Connect to the Mongo DB
connectDB(); 

// Basic route
app.get('/', (req, res) => {
  res.send('Moduli API is running!');
});

// Spotify Authorization Routes
app.use("/api/auth", authRoutes)
console.log('🌎 ==> You can now login to Spotify using: http://localhost:5000/api/auth/login');

// Start the server
app.listen(PORT, () => {
  console.log(`🌎 ==> API Server now listening on http://localhost:${PORT}`);
});
