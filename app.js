const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if(!address){
    console.log('Please provide an address!')
}else{
    geocode(address, (error,{latitude, longitude, location}) => {
        if(error){
            console.log('Error: ', error)
        }
    
        forecast(longitude, latitude, (error, forecastData) => {
            if(error){
                console.log('Error: ',error)
            }
    
            console.log(location)
            console.log(forecastData)
        })        
    })
    
}




















// const url ='http://api.weatherapi.com/v1/current.json?key=3f849884a7fc49cfab7125747220407&q=28.6304,77.2177'

// //  You can access weather information using url and response.body
// //  add diffrent parameters using '.' and access the desired information

// request({ url: url, json: true }, (error,response) => {
//     if(error){
//         console.log('Unable to connect to Weather Service!')
//     }else if(response.body.error){
//         console.log("Unable to find location!")
//     }else{
//         console.log("The weather Looks "+response.body.current.condition.text+" The current temprature is "+response.body.current.temp_c+" But it feels like "+ response.body.current.feelslike_c)
//     }
// })

// TASK
// To print msg using weather information

// request({ url: url, json: true }, (error,response) => {
//     console.log("The current temprature is "+response.body.current.temp_c+" But it feels like "+ response.body.current.feelslike_c)
// })

// Geocoding
// Address -> Lat/Long -> Weather

// const geocodeURL='https://api.mapbox.com/geocoding/v5/mapbox.places/New%20York.json?access_token=pk.eyJ1IjoiYThoYXkiLCJhIjoiY2w1NnR0ODVyMTBtMjNnbDhhbG1nbWVkbiJ9.NZcftqkstI51CmRO5vB_-A'

// request({url: geocodeURL, json: true}, (error,response) =>{
//     if(error){
//         console.log('Unable to connect to Geo Server!')
//     }else if(response.body.query.length==0){
//         console.log('Unable to find location!')
//     } else{
//         console.log("Longitude: "+response.body.features[0].center[0]+", "+"Latitude: "+response.body.features[0].center[1])
//     }    
// })


// Link to Access weather Information & The Formate
// https://api.weatherstack.com/current?access_key=e844dc0caf8a4bbf013632cdd6ff67a0&querry=28.6304,2077.2177
// 1. Website Link
// 2. To Access Current weather data
// 3. Querr String Follwed by Key Value Piar to provide information like api key and location 
// 4. key=value& key2=value2 & name=abhay& access_key=e844dc0caf8a4bbf013632cdd6ff67
// you can set diffrent parameters using key value pair after reffreing the document and as per requirement like for language ==> lang=hi    (hi=hindi)




