require('dotenv').config()

const request = require('request');
const yargs = require('yargs');

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

request({
  url: `${process.env.MAPS_API_URL}&key=${process.env.MAPS_API_KEY}&address=${encodedAddress}`,
  json: true
}, (error, response, body) => {
  if (error) {
    console.log('There was an error connecting to Google Geocoding service.');
  } else if (body.status === 'ZERO_RESULTS') {
    console.log("Unable to find that address.");
  } else if (body.status === 'OK'){
  console.log(`Address: ${body.results[0].formatted_address}`);
  console.log(`Latitude: ${body.results[0].geometry.location.lat}`)
  console.log(`Longitute: ${body.results[0].geometry.location.lng}`)
}
})
