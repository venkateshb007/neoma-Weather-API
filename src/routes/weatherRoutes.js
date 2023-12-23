const express = require('express');
const router = express.Router();
const Weather = require('../models/Weather');

const { fetchAndStoreWeatherData, updateWeatherData, deleteWeatherData } = require('../controllers/weatherController');

// Create operation
router.post('/weather', async (req, res) => {
  const { location } = req.body;

  try {
    const weatherData = await fetchAndStoreWeatherData(location);
    res.json(weatherData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Read operation
router.get('/weather/:location', async (req, res) => {
    const { location } = req.params;
  
    try {
      const weatherData = await Weather.findOne({ location });
      res.json(weatherData);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

// Update operation
router.put('/weather/:location', async (req, res) => {
  const { location } = req.params;
  const updatedData = req.body;

  try {
    const updatedWeatherData = await updateWeatherData(location, updatedData);
    res.json(updatedWeatherData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete operation
router.delete('/weather/:location', async (req, res) => {
  const { location } = req.params;

  try {
    await deleteWeatherData(location);
    res.json({ message: 'Weather data deleted successfully.' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
