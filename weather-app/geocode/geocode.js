const request = require('request');

var geocodeAddress = (address, callback) => {
  var encodedAddress = encodeURIComponent(address);
  request({
    url: `${process.env.MAPS_API_URL}&key=${process.env.MAPS_API_KEY}&address=${encodedAddress}`,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback('There was an error connecting to Google Geocoding service.');
    } else if (body.status === 'ZERO_RESULTS') {
      callback("Unable to find that address.");
    } else if (body.status === 'OK'){
      callback(undefined, {
        address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng
      });
    }
  });
};

module.exports.geocodeAddress = geocodeAddress;
