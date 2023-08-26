

// function fetchInfo(userInput){
//     console.log(`fetchInfo() function`)
//     console.log(userInput)
// }

// API Call happens in fetchInfo() function
async function fetchInfo(zipCode){
    console.log(`fetchInfo() called + ${zipCode}`) // logs user entered ZIP code

    let zip_code_url = `http://api.openweathermap.org/geo/1.0/zip?zip=${zipCode}&appid=8fcd14240be7520f5b8428765ed5943b`

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

export {fetchInfo}


