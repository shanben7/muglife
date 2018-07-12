const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema(
  {
    name: String,
    lat: Number,
    lng: Number,
    discount: Number,
  }
);

const Location = mongoose.model('Location', LocationSchema);

module.exports = mongoose.model('Location');
