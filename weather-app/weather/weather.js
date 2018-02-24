const request = require('request');

var getWeather = (lat, lng, callback) => {
  request({
    url: `${process.env.DARKSKY_API_URL}/${process.env.DARKSKY_API_KEY}/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback('Unable to connect to Forecast.io');
    } else if (response.statusCode !== 200) {
      callback("Unable to fetch weather.");
    } else if (response.statusCode === 200){
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    }
  });
}

module.exports.getWeather = getWeather;
