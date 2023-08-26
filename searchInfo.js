


// let zipCode = document.getElementById(`inputField`).value
// console.log(zipCode)

// This does NOT need to be an asyncronous function 
// We are capturing user input value from input field!


// this will ultimately become a zip code validation service!
function search(zipCode){
    console.log(`search() called`)
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

export {search};

