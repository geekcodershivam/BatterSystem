const mongoose = require('mongoose');
const { Schema } = mongoose;

const alertSchema = new Schema({
  name: String,
  criteria: String,
  value: Number,
  days: String,
  email: String,
  phone: String,
  
});

mongoose.model('alert', alertSchema);
