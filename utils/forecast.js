const request = require('request')

const forecast = (lat, lon, callback) =>{
    const url ='http://api.weatherapi.com/v1/current.json?key=3f849884a7fc49cfab7125747220407&q='+lat+','+lon

    request({ url, json: true}, (error, { body }) =>{
        if(error){
            callback('Unable to connect to Weather Server!', undefined)
        } else if(body.error){
            callback('Uable to detect information for given location!', undefined)
        } else{
            callback(undefined,"The weather Looks "+body.current.condition.text+" The current temprature is "+body.current.temp_c+" But it feels like "+ body.current.feelslike_c)
        }
    })
}

module.exports = forecast