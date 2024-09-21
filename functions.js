// ALL FUNCTIONS REQUIRED TO RUN APPLICATION ARE EXPORTED FROM THIS FILE
// AND IMPORTED INTO THEIR RESPECTIVE FILES
// SEARCH FUNCTION

function searchZip(zipCode){
    console.log(`search() called + ${zipCode}`)
    return zipCode
    
    // console.log(`${zipCode.value}`); //DO NOT DELETE - TESTING!
  
    // invoke fetchInfo() + expect info to be returned
    // let responseObj = await fetchInfo(zipCode);
    // console.log(responseObj);

    // getConditions(responseObj)

//     let currentConditionsObj = await showConditions(responseObj)
//     console.log(currentConditionsObj) // this needs to be in JSON format!!
//     renderInfo(currentConditionsObj)
// 
}


// getWeatherInfo() function
// USER ENTERED ZIP CODE SENT IN API Call
async function getWeatherInfo(zipCode){
    console.log(`ZIP CAPTURED IN GET WEATHER INFO FUNCTION ${zipCode}`) // logs user entered ZIP code

    // let zip_code_url = `http://api.openweathermap.org/geo/1.0/zip?zip=${zipCode}&appid=8fcd14240be7520f5b8428765ed5943b`
    let zip_code_url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},&appid=8fcd14240be7520f5b8428765ed5943b`

    try
    {
        let zip_code_response = await fetch(zip_code_url)
        // let current_conditions_response = await fetch(current_codntions_url)

        let zip_code_data = zip_code_response.json()
        // let current_conditions_data = await current_conditions_response.json()

        // console.log(zip_code_data)
        // console.log(current_conditions_data)
        return zip_code_data // Definitely must return data from this function!
    }
    
    catch (error){
        weather.innerHTML = error;
    } 

}


// showWeather() function
function showWeather(){}











//Get Weather based on user entered zip code:
// async function getWeather(zipCode){
//     console.log("user entered zip code is" + zipCode) // logs user entered ZIP code

//     // API Call happens in fetchInfo() function
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

export { searchZip, getWeatherInfo };
