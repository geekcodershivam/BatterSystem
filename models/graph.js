const mongoose = require('mongoose');
const { Schema } = mongoose;

const graphSchema = new Schema({
  date:{
    type:String,
  },
  time:String,
  value:Number,
  type:String,
});

mongoose.model('Graph', graphSchema);