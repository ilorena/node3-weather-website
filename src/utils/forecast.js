const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=d0f0217e793e3ba1854f3b2fb4158f8e&query=' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude)

    request({ url, json: true }, (error, { body }) => {
        if(error) {
            callback('Unable to connect weather service!', undefined)
        } else if(body.error) {
            callback('Unable to find location!', undefined)
        } else {
            const weatherDesc = body.current.weather_descriptions[0]
            const temperature = body.current.temperature
            const feelsLike = body.current.feelslike
            callback(undefined, weatherDesc + '. It is currently ' + temperature + ' degrees. It feels like ' + feelsLike + ' degrees out.')
        }
    })
}

module.exports = forecast