console.log(`fetch_zip connected`);

// // IMPORT EXTERNALFUNCTIONS
import {search} from './searchInfo.js' // importing this allows access to DOM objects in external file
import {getLocationNameByZip} from './getLocationNameByZip.js'
import {getWeatherConditions} from "./getWeatherConditions.js"
import {renderConditions} from './renderConditions.js'

let conditions = document.getElementById("weather")
let cityName = document.getElementById(`cityName`)
let temp = document.getElementById(`temp`)
let current = document.getElementById(`current-conditions`)
let highTemp = document.getElementById(`high-temp`)
let lowTemp = document.getElementById(`low-temp`)
let alerts = document.getElementById(`alerts`)
let icon = document.getElementById(`icon`)
let feelsLike = document.getElementById(`feelsLike`)
// let userInput = document.getElementById(`x`)
// let zipCode = document.getElementById(`inputField`).value


// EVENTS

// add event listener to form (TESTING)
document.addEventListener("submit", (e) =>{
    e.preventDefault();
    const zipCode = document.getElementById("zipCodeField")

    // FORM VALIDATION
    if(zipCode.value !== ""){
        //calls search function (this will become a validation test for ZIP code)
        let x = search(zipCode.value)
        console.log(x)
    }
    else{
        conditions.innerText = "zip cannot be empty"
    }

    // Send validated ZIP code to get info package
    let obj = getLocationNameByZip(zipCode.value)

    obj.then((obj) =>{
        // console.log(obj.name); // City name being returned!
        let lattitude = JSON.stringify(obj.lat)
        let longitude = JSON.stringify(obj.lon)
        console.log(lattitude, longitude)

        // Call getWeatherConditions() passing locationName as argument to get conditions info for that location
        let conditions = getWeatherConditions(lattitude, longitude);
        console.log(conditions) // we ARE getting weather conditions- send this info to some function to be rendered to screen!

        renderConditions(conditions)
    })

    // SEND ZIP CODE TO formAction file for processing
    
})












// async function search(){
//     let zipCode = document.getElementById(`inputField`).value
    
//     // console.log(`${zipCode.value}`); DO NOT DELETE - TESTING!
  
//     // invoke getLocationNameByZip() + expect info to be returned
//     let responseObj = await getLocationNameByZip(zipCode);
//     // console.log(responseObj);

//     // getConditions(responseObj)

//     let currentConditionsObj = await showConditions(responseObj)
//     console.log(currentConditionsObj) // this needs to be in JSON format!!
//     renderInfo(currentConditionsObj)
// }





// getLocationNameByZip()
// async function showConditions(responseObj){
//     console.log(responseObj);
//     let current_conditions_url = `https://api.openweathermap.org/data/2.5/weather?lat=${responseObj.lat}&lon=${responseObj.lon}&units=imperial&appid=8fcd14240be7520f5b8428765ed5943b`

//     try{
//         let current_conditions_response = await fetch(current_conditions_url)
//         let current_conditions_data = current_conditions_response.json()
//         return current_conditions_data
//     }

//     catch (error){
//         weather.innerHTML = error;
//     }
    
// }



// renderInfo() - Makes init call to getLocationNameByZip() function!!


