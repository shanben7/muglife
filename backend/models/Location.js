const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema(
  {
    name: String,
    lat: Number,
    lng: Number,
    type: { type: String, enum: ['FOOD', 'DRINK'] },
    discount: Number,
  }
);

const Location = mongoose.model('Location', LocationSchema);

module.exports = mongoose.model('Location');
