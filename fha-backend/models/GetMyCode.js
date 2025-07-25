const mongoose = require('mongoose');

const GetMyCodeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  telephone: String,
  businessType: String,
  services: [String],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('GetMyCode', GetMyCodeSchema);
