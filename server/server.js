const express = require('express');

require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./config/db")
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

// Start the server
app.listen(PORT, () => {
  console.log(`🌎  ==> API Server now listening on http://localhost:${PORT}`);
});
