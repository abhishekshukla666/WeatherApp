const request = require('request')

// const url = 'https://api.darksky.net/forecast/2fbd98ddfe4b09e012148722ec628ead/28.664999993486695,77.43488861491157'

const forecast = (latitude, longitude, callback) => {
    
    const url = 'https://api.darksky.net/forecast/2fbd98ddfe4b09e012148722ec628ead/' + latitude + ',' + longitude + '?units=si'

    request({ url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to server', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, response.body)
        }
    })
}


module.exports = forecast