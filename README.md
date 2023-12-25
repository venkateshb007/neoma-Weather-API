# Weather App API

This is a simple API for retrieving and managing weather data for different locations.

## Getting Started

These instructions will help you set up and run the project on your local machine.

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)

### Installation

1. Clone the repository:

   ```bash
   git clone [(https://github.com/venkateshb007/neoma-Weather-API)]
2. Navigate to the project directory: cd WeatherAppAPI
3. Install dependencies: npm install
4. Start the server: node src/app.js

   
optional I have added the .env file where i have given access to third-party-weather-api also mongodb atlas cluster (MONGODB_URI) 
If this .env file didn't work 

5. Set up environment variables:
   Create a .env file in the root directory and add the following:
    MONGODB_URI=your_mongodb_uri
    WEATHER_API_KEY=your_openweathermap_api_key
    Replace your_mongodb_uri with your MongoDB connection string and your_openweathermap_api_key with your OpenWeatherMap API key.
    And start the server step4. The server should be running on http://localhost:3000.

API Endpoints
* POST /api/weather: Add weather data for a location.
  Request body example:
  {
  "location": "New York"
  }
  Response example:
  {
  "_id": "generated_id",
  "location": "New York",
  "temperature": 273.99,
  "humidity": 51,
  // ... other weather data fields
  }

* GET /api/weather/:location: Retrieve weather data for a specific location.
  curl http://localhost:3000/api/weather/New%20York


* PUT /api/weather/:location: Update weather data for a specific location.
  Request body example:
  {
  "temperature": 280.5
  }
  Response example:
  {
  "_id": "generated_id",
  "location": "New York",
  "temperature": 280.5,
  // ... other updated weather data fields
  }
  
* DELETE /api/weather/:location: Delete weather data for a specific location.
  curl -X DELETE http://localhost:3000/api/weather/New%20York


* Contributing
  Feel free to contribute by opening issues or creating pull requests.
