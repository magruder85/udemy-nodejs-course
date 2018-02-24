require('dotenv').config()
const yargs = require('yargs');
const geocode = require ('./geocode/geocode.js')
const weather = require ('./weather/weather.js')
const argv = yargs
  .options({
    address: {
      demand: true,
      alias: 'a',
      describe: 'Address to fetch weather data.',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    //console.log(JSON.stringify(results, undefined, 2));
    console.log(`Checking the weather at ${results.address}`);
    weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
      if (errorMessage) {
        console.log(errorMessage);
      } else {
        console.log(`It's currently ${weatherResults.temperature} but it feels like ${weatherResults.apparentTemperature}`)
      }
    });

  }
});

// lat, lng, callback
