const axios = require("axios"); 

exports.handler = async (event) => {
  try {
    const weatherApi = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m"

    const response = await axios.get(weatherApi);
      return {
          statusCode: 200,
          body: JSON.stringify(response.data)  
      };

  } catch (error) {
      console.error('Error fetching weather data:', error);

      return {
          statusCode: 500,
          body: JSON.stringify({ message: 'Failed to fetch weather data' })
      };
  }
};