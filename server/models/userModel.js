const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  spotifyId: String,
  email: String,
  displayName: String,
  accessToken: String,
  refreshToken: String,
});

module.exports = mongoose.model("User", userSchema);
