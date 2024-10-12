// DOM objects used in showWeather function
// let cityName = document.getElementById(`cityName`)


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
// RETURNS PROMISE OBJECT W/ WEATHER INFO
async function getWeatherInfo(zipCode){
    console.log(`ZIP CAPTURED IN GET WEATHER INFO FUNCTION ${zipCode}`) // logs user entered ZIP code

    // let zip_code_url = `http://api.openweathermap.org/geo/1.0/zip?zip=${zipCode}&appid=8fcd14240be7520f5b8428765ed5943b`
    let zip_code_url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=8fcd14240be7520f5b8428765ed5943b&units=imperial`

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
// IF THIS FUNCTION STAYS IT NEEDS TO USE ASYNC/AWAIT TO
// ALLOW PROPER HANDLING OF RETURNED PROMISE OBJECT
async function showWeather(x){
    console.log(x); // <-- THIS LOOKS TO BE WORKING! PROMISE OBJECT RETURNED!

    Object.entries(x).forEach(data =>{
        const [key, value] = data
        console.log(data)

        switch (key){
            case`name`:
                return cityName.innerText = `${JSON.stringify(value)}`
                //break;
        }
    })
}

// async function renderInfo(){
//     let response = await fetchInfo();

//     Object.entries(response).forEach(data =>{
//         const [key, value] = data

//         switch (key){

//             case `weather`:
//                 current.innerText = `${JSON.stringify(value[0].description)}`

//                 alerts.innerText = `${JSON.stringify(value[0].main)}`
//                 icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${value[0].icon}.png">`
//                 break;

//             case `main`:
//                 temp.innerText =`${JSON.stringify(value.temp)}`
//                 highTemp.innerText = `${JSON.stringify(value.temp_max)}`
//                 lowTemp.innerText = `${JSON.stringify(value.temp_min)}`
//                 break;
            
//             case`name`:
//                 cityName.innerText = `${JSON.stringify(value)}`
//                 break;

            

//         }   


//     // convert JSON object to array such that we can iterate -

   

    
//     })
// }











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

// FUNCTION TO RUN AJAX CALL TO UPDATE WEATHER CONDITIONS EVERY n
// AJAX + FUNCTION HERE

function updateConditions(){
    let number_of_updateCalls = 0;
    const xhttp = newXMLHttpRequest();

        xhttp.onload = function(){
            document.getElementById("testing").innerText = this.responseText;
            console.log(number_of_updateCalls);
        }

        xhttp.open(GET, "https://jsonplaceholder.typicode.com/todos/1", true)
        xhttp.send()
        number_of_updateCalls += 1;
}

export { searchZip, getWeatherInfo, showWeather, updateConditions };
