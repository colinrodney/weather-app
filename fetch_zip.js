console.log(`fetch_zip connected`);

// // IMPORT EXTERNALFUNCTIONS
import {search} from './searchInfo.js' // importing this allows access to DOM objects in external file
import {fetchInfo} from './fetchInfo.js'

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
        search(zipCode.value)
    }
    else{
        conditions.innerText = "zip cannot be empty"
    }
    
        
  
    
    // const zipCode = form.input
    // console.log(zipCode)

    // let zipCode = document.getElementById(`inputField`).value
    // let x = search(zipCode)
    //console.log(zipCode)

    // SEND ZIP CODE TO formAction file for processing
    // fetchInfo(zipCode)
    
})

// let searchButton= document.getElementById(`searchButton`).addEventListener("click", (e) =>{
//     e.preventDefault();

//     // handle form submit
//     // let zipCode = document.getElementById(`inputField`).value
//     // console.log(zipCode)

//     let zipCode = search()
//     //console.log(zipCode)

//     // SEND ZIP CODE TO formAction file for processing
//     fetchInfo(zipCode)

    

// })











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


// API Call happens in fetchInfo() function
// async function fetchInfo(zipCode){
//     console.log(zipCode) // logs user entered ZIP code

//     let zip_code_url = `http://api.openweathermap.org/geo/1.0/zip?zip=${zipCode}&appid=8fcd14240be7520f5b8428765ed5943b`

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
