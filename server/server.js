const express = require('express');

const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const PORT = process.env.PORT || 5000;
const connectDB = require("./config/db")

require("dotenv").config();

const app = express();

// Middleware to parse JSON
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));


// Connect to the Mongo DB /need to make changes once we have a mongo database
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactcms");
connectDB(); 


// Basic route
app.get('/', (req, res) => {
  res.send('Moduli API is running!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`🌎  ==> API Server now listening on http://localhost:${PORT}`);
});
