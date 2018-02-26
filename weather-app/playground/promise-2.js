require('dotenv').config()
const request = require('request')

var geocodeAddress = (address) => {
  return new Promise((resolve, reject) => {
    var encodedAddress = encodeURIComponent(address);
    request({
      url: `${process.env.MAPS_API_URL}&key=${process.env.MAPS_API_KEY}&address=${encodedAddress}`,
      json: true
    }, (error, response, body) => {
      if (error) {
        reject('There was an error connecting to Google Geocoding service.');
      } else if (body.status === 'ZERO_RESULTS') {
        reject("Unable to find that address.");
      } else if (body.status === 'OK'){
        resolve({
          address: body.results[0].formatted_address,
          latitude: body.results[0].geometry.location.lat,
          longitude: body.results[0].geometry.location.lng
        });
      }
    });
  });
};

geocodeAddress('19460').then((location) => {
  console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
  console.log(errorMessage);
})
