const axios = require('axios');
const Weather = require('../models/Weather');
const { getFormattedDate } = require('../utils/apiUtils');

const fetchAndStoreWeatherData = async (location) => {
  try {
    const apiKey = process.env.WEATHER_API_KEY;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

    const response = await axios.get(apiUrl);
    const { main, weather, wind, sys, name } = response.data;

    const newWeatherData = new Weather({
      location: name,
      temperature: main.temp,
      humidity: main.humidity,
      weatherDescription: weather[0].description,
      windSpeed: wind.speed,
      country: sys.country,
      sunrise: getFormattedDate(sys.sunrise),
      sunset: getFormattedDate(sys.sunset),
    });

    await newWeatherData.save();
    return newWeatherData;
  } catch (error) {
    throw error;
  }
};

const updateWeatherData = async (location, updatedData) => {
  try {
    const existingWeatherData = await Weather.findOne({ location });

    if (!existingWeatherData) {
      throw new Error('Weather data not found.');
    }

    // Updating the fields as per the requirments
    existingWeatherData.temperature = updatedData.temperature || existingWeatherData.temperature;
    existingWeatherData.humidity = updatedData.humidity || existingWeatherData.humidity;
    existingWeatherData.weatherDescription = updatedData.weatherDescription || existingWeatherData.weatherDescription;
    existingWeatherData.windSpeed = updatedData.windSpeed || existingWeatherData.windSpeed;

   

    await existingWeatherData.save();
    return existingWeatherData;
  } catch (error) {
    throw error;
  }
};

const deleteWeatherData = async (location) => {
  try {
    await Weather.findOneAndDelete({ location });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  fetchAndStoreWeatherData,
  updateWeatherData,
  deleteWeatherData,
};
