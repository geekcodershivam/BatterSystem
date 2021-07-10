const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  googleId: String,
  name:String,
  photo:String
});

mongoose.model('User', userSchema);
