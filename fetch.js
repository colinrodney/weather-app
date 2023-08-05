console.log(`fetch connected`);


let cityName = document.getElementById(`cityName`)
let temp = document.getElementById(`temp`)
let current = document.getElementById(`current-conditions`)
let highTemp = document.getElementById(`high-temp`)
let lowTemp = document.getElementById(`low-temp`)
let alerts = document.getElementById(`alerts`)
let icon = document.getElementById(`icon`)
let x = document.getElementById(`x`)

function search(){
    document.getElementById(`searchButton`).value
    let query = location.search;
    console.log(`${x.value}`);
    console.log(query);

}


async function fetchInfo(){
    try
    {
        let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=30.460&lon=-91.165&units=imperial&appid=8fcd14240be7520f5b8428765ed5943b`)
        // let res = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=London&limit=2&appid=8fcd14240be7520f5b8428765ed5943b`)
        let data = await res.json()
        // let arrayData = Object.entries(data);
        return data

    }
    catch (error){
        weather.innerHTML = error;
    } 
}

// renderInfo()

async function renderInfo(){
    let response = await fetchInfo();

    Object.entries(response).forEach(data =>{
        const [key, value] = data

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


    // convert JSON object to array such that we can iterate -

   

    
    })
}


renderInfo()
