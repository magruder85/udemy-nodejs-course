require('dotenv').config()
const yargs = require('yargs');
const axios = require('axios');

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

var encodedAddress = encodeURIComponent(argv.address);

var geocodeUrl = `${process.env.MAPS_API_URL}&key=${process.env.MAPS_API_KEY}&address=${encodedAddress}`

axios.get(geocodeUrl).then((response) => {
  if (response.data.status === 'ZERO_RESULTS') {
    throw new Error('Unable to find that address');
  }

  var lat = response.data.results[0].geometry.location.lat;
 var lng = response.data.results[0].geometry.location.lng;
  var weatherUrl = `${process.env.DARKSKY_API_URL}/${process.env.DARKSKY_API_KEY}/${lat},${lng}`
  console.log(response.data.results[0].formatted_address);
  return axios.get(weatherUrl);
}).then((response) => {
  var temperature = response.data.currently.temperature;
  var apparentTemperature = response.data.currently.apparentTemperature;
  console.log(`It's currently ${temperature}. It feels like ${apparentTemperature}.`)
}).catch((e) => {
  if (e.code === 'ENOTFOUND') {
    console.log('Unable to connect to API servers.');
  } else {
    console.log(e.message);
  }
});
