async function renderConditions(conditions){
    conditions.then(function(conditions){
        console.log(conditions) // TESTING

        Object.entries(conditions).forEach(data =>{
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
                currentConditions.innerText = (`${JSON.stringify(value[0].description)}`)

                
        
        
        }
        })

})
}

export {renderConditions}

// // async function renderInfo(currentConditionsObj){
// //     // let response = await fetchConditions();

// //     // let response = await getConditions();
    

// //     // console.log(response)

// //     // Iterate over response
//     Object.entries(currentConditionsObj).forEach(data =>{
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