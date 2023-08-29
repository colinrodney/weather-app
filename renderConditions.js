import {currentConditions} from "./fetch_zip.js"

async function renderConditions(weatherConditions){
    weatherConditions.then(function(weatherConditions){
        console.log(weatherConditions) // TESTING

        Object.entries(weatherConditions).forEach(data =>{
        const [key, value] = data
        
        switch (key){
            case "name":
                cityName.innerText = `${JSON.stringify(value)}`
                break;

            case `main`:
                temp.innerText =`${JSON.stringify(value.temp)}`
                feelsLike.innerText =`${JSON.stringify(value.feels_like)}`
                // highTemp.innerText = `${JSON.stringify(value.temp_max)}`
                // lowTemp.innerText = `${JSON.stringify(value.temp_min)}`
                break;

            case `weather`:
                currentConditions.innerText = `${JSON.stringify(value[0].description)}`
                // console.log(currentConditions)

                
        
        
        }
        })

})
}

export {renderConditions}

// // async function renderInfo(currentweatherConditionsObj){
// //     // let response = await fetchweatherConditions();

// //     // let response = await getweatherConditions();
    

// //     // console.log(response)

// //     // Iterate over response
//     Object.entries(currentweatherConditionsObj).forEach(data =>{
//         const [key, value] = data

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