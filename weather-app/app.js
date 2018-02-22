require('dotenv').config()

const request = require('request');

request({
  url: process.env.MAPS_API_URL,
  json: true
}, (error, response, body) => {
  console.log(body);
})
