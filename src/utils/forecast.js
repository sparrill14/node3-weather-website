const request = require('request')

const forecast = (latitude, longitude, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=2f3a209fbb444d4648f9076bbc95533d&query=' + latitude + ',' + longitude + '&units=f'
  request({ url: url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to contact weather services', undefined)
    }
    else if (body.error) {
      callback('Unable to find coordinates', undefined)
    }
    else {
      callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out.')
    }
  })
}

module.exports = forecast