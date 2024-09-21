// THIS FILE USES searchZip() function imported from functions.js fileto
// validate form ensuring user has entered a zip code
// Captures zip code such as to prepare to send zip code to retrieve weather forecast
//NOTE: THIS FILE INVOKES THE searchZip() FUNCTION AND CONTAINS ZIP CODE AS INPUT BY USER!

console.log(`displayWeather connected!`);

// // IMPORT EXTERNALFUNCTIONS
import {searchZip, getWeatherInfo, showWeather} from './functions.js' // importing this allows access to DOM objects in external file

let cityName = document.getElementById(`cityName`)
let temp = document.getElementById(`temp`)
let feelsLike = document.getElementById(`feelsLike`)
let conditions = document.getElementById("weather")
let icon = document.getElementById(`icon`)
let highTemp = document.getElementById(`high-temp`)
let lowTemp = document.getElementById(`low-temp`)
let alerts = document.getElementById(`alerts`)
let current = document.getElementById(`current-conditions`)
// let userInput = document.getElementById(`x`)
// let zipCode = document.getElementById(`inputField`).value

// var zipCode = "";
// console.log(`ZIP CODE SHOULD BE EMPTY!: ${zipCode}`)



// EVENT LISTENER 
document.addEventListener("submit", (e) =>{
    e.preventDefault();
    const zipCode = document.getElementById("zipCodeField")
    // console.log(zipCode)

    // FORM VALIDATION
    if(zipCode.value !== ""){
        console.log(`ZIP CODE SEARCHED IS ${zipCode.value}`)
    }
    else{
        conditions.innerText = "zip cannot be empty"
    }


    // INVOKE CALL to getWeatherInfo() function sending zipCode as parameter
    //  THIS HAS ALL INFO WE NEED TO SHOW INFO ON SCREEN!
    let currentWeatherData = getWeatherInfo(zipCode.value)

    
    // THIS FUNCTION UNPACKS OBJECT RETURNED FROM CALL TO getWeatherInfo()
    // and unpacks object properties using JavaScript object destructuring
    async function showWeather(){
        let response = await currentWeatherData
        console.log(response.name)
        
        // unpack elements via JavaScript object destructuring
        Object.entries(response).forEach(data =>{
            const [key, value] = data
            console.log(data)

            // DECISION STRUCTURE FOR DISPLAYING DATA
            switch (key){

                case `weather`:
                    current.innerText = `${JSON.stringify(value[0].description)}`
    
                    alerts.innerText = `${JSON.stringify(value[0].main)}`
                    icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${value[0].icon}.png">`
                    break;
    
                case `main`:
                    temp.innerText =`${JSON.stringify(value.temp)}`
                    highTemp.innerText = `${JSON.stringify(value.temp_max)}`
                    lowTemp.innerText = `${JSON.stringify(value.temp_min)}`
                    break;
                
                case`name`:
                    cityName.innerText = `${JSON.stringify(value)}`
                    break;
            }
    
        })
    }

    // CALL showWeather function
    showWeather()

    // console.log(currentWeatherData)
    // cityName.innerText = `${JSON.stringify(currentWeatherData)}`
})

//     Object.entries(currentWeatherData).forEach(data =>{
//         const [key, value] = data
//         // console.log(data)

//         switch (key){
//             case`name`:
//                 cityName.innerText = `${JSON.stringify(value)}`
//                 break;
//         }
//     })
// })


    // NOT WORKING - MAY NOT NEED THIS
    // let showForecast = showWeather(currentWeatherData)
    // console.log(showForecast)

    // let something = showWeather(currentWeatherData)
    // console.log(something);
   

//END MAIN CLOSURE SCOPE

// GET WEATHER DATA USING ZIP CODE INPUT BY USER -API Call happens in fetchInfo() function



 // let zip_code_url = `http://api.openweathermap.org/geo/1.0/zip?zip=${zipCode}&appid=8fcd14240be7520f5b8428765ed5943b`

//     try
//     {
//         let zip_code_response = await fetch(zip_code_url)
//         // let current_conditions_response = await fetch(current_codntions_url)

//         let zip_code_data = zip_code_response.json()
//         // let current_conditions_data = await current_conditions_response.json()

//         // console.log(zip_code_data)
//         // console.log(current_conditions_data)
//         return zip_code_data // Definitely must return data from this function!
//     }
    
//     catch (error){
//         weather.innerHTML = error;
//     } 

// }


// fetchConditions()
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



// renderInfo() - Makes init call to fetchInfo() function!!

// // async function renderInfo(currentConditionsObj){
// //     // let response = await fetchInfo();

// //     // let response = await getConditions();
    

// //     // console.log(response)

// //     // Iterate over response
// //     Object.entries(currentConditionsObj).forEach(data =>{
// //         const [key, value] = data

// //         switch (key){

// //             case `weather`:
// //                 current.innerText = `${JSON.stringify(value[0].description)}`

// //                 alerts.innerText = `${JSON.stringify(value[0].main)}`
// //                 icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${value[0].icon}.png">`
// //                 break;

// //             case `main`:
// //                 temp.innerText =`${JSON.stringify(value.temp)}`
// //                 feelsLike.innerText =`${JSON.stringify(value.feels_like)}`
// //                 highTemp.innerText = `${JSON.stringify(value.temp_max)}`
// //                 lowTemp.innerText = `${JSON.stringify(value.temp_min)}`
// //                 break;
            
// //             case`name`:
// //                 cityName.innerText = `${JSON.stringify(value)}`
// //                 break;

// //         }   

// //     // console.log(`render info function has been called` + ` ` + JSON.stringify(responseObj.name))

// //     // convert JSON object to array such that we can iterate -

   

    
// //     })
// }



// async function search(){
//     let zipCode = document.getElementById(`inputField`).value
    
//     // console.log(`${zipCode.value}`); DO NOT DELETE - TESTING!
  
//     // invoke fetchInfo() + expect info to be returned
//     let responseObj = await fetchInfo(zipCode);
//     // console.log(responseObj);

//     // getConditions(responseObj)

//     let currentConditionsObj = await showConditions(responseObj)
//     console.log(currentConditionsObj) // this needs to be in JSON format!!
//     renderInfo(currentConditionsObj)
// }