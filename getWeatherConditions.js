async function getWeatherConditions(lat, lon){
    console.log(`getWeatherConditions{} called + ${lat} ${lon}`)

    let conditions_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=8fcd14240be7520f5b8428765ed5943b`

    try
    {
        let response = await fetch(conditions_url)
        
        let obj = response.json()
    
        return obj;
    }
    
    catch (error){
        weather.innerHTML = error;
    } 
    
}

export {getWeatherConditions}

// // async function renderInfo(currentConditionsObj){
// //     // let response = await fetchConditions();

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