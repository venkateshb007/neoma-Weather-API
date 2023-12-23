const mongoose = require('mongoose');

const weatherSchema = new mongoose.Schema({
  location: {
    type: String,
    required: true,
  },
  temperature: {
    type: Number,
    required: true,
  },
  humidity: {
    type: Number,
  },
  weatherDescription: {
    type: String,
  },
  windSpeed: {
    type: Number,
  },
  country: {
    type: String,
  },
  sunrise: {
    type: Date,
  },
  sunset: {
    type: Date,
  },
});

const Weather = mongoose.model('Weather', weatherSchema);

module.exports = Weather;
