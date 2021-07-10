const mongoose = require('mongoose');
const { Schema } = mongoose;

const alertSchema = new Schema({
  name: String,
  criteria: String,
  value: Number,
  days: String,
  email: String,
  phone: String,
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
});

mongoose.model('alert', alertSchema);
