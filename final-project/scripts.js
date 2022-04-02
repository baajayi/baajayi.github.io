let d = new Date()
let daysOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    
]
const weatherInfo = "https://api.openweathermap.org/data/2.5/weather?id=3530103&units=imperial&appid=7d47d03772d90da70906388fcab359b7"
const forecastInfo = "https://api.openweathermap.org/data/2.5/forecast?id=3530103&units=imperial&appid=7d47d03772d90da70906388fcab359b7"
fetch(weatherInfo)
    .then(response => response.json())
    .then((jsObject) => {
        
        console.log(jsObject)
        document.getElementById("currentweather").textContent = jsObject.weather[0].description
        document.getElementById("temp").textContent = jsObject.main.temp
        document.getElementById("speed").textContent = (jsObject.wind.speed).toFixed(2)
        document.getElementById("humid").textContent = jsObject.main.humidity
    })
fetch(forecastInfo)
    .then(response => response.json())
    .then((jsObject) => {
        console.log(jsObject)
    
        // for (let x = 0; x < jsObject["list"].length; x++){
        const datesOfWeather = jsObject["list"].filter((climate) =>{
        if (climate.dt_txt.includes(" 12:00:00")){
            return climate
        }})
        for (let x = 0; x < datesOfWeather.length; x++) {
            let card = document.createElement("section")
            card.setAttribute("class", "day-weather")
            let h3d = document.createElement("span")
            h3d.textContent = daysOfTheWeek[new Date(datesOfWeather[x].dt_txt).getDay()]
            h3d.setAttribute("class", "dayname")
            card.appendChild(h3d)
            document.querySelector("div.forecast").appendChild(card)
            let img = document.createElement("img")
            img.setAttribute("src", 'https://openweathermap.org/img/w/' + datesOfWeather[x].weather[0].icon + '.png')
            img.setAttribute("alt", datesOfWeather[x].weather[0].description)
            img.setAttribute("id", "dayimg")
            card.appendChild(img)
            let h4t = document.createElement("span")
            h4t.textContent = datesOfWeather[x].main.temp + "°F"
            h4t.setAttribute("class", "day-label")
            card.appendChild(h4t)
           

    
        }
    }
        // const dayname = new Date(datesOfWeather.dt_txt).getDay()
        // console.log(datesOfWeather)

        // const dateOfWeather = jsObject.list[x].dt_txt
        // return dateOfWeather

                       // for (let x = 0; x < 5; x++) {
        //     document.getElementsByClassName("dayname").textContent = jsObject[x].
        // }
    )

    const temp = parseFloat(document.getElementById("temp").innerHTML, 10)
    const speed = parseFloat(document.getElementById("speed").innerHTML, 10)
    if (temp <= 50 && speed > 3){
        const chill = 35.74 + (0.6215 * temp) - (35.75 * (speed^0.16)) + (0.4275 * temp * (speed^0.16))
    document.querySelector("#chill").innerHTML = chill.toFixed(2)
    } else {
        document.querySelector("#chill").innerHTML = "N/A"
    }
const rentalURL = "data/rentals.json"
fetch(rentalURL)
    .then(response => response.json())
    .then((jsObject) =>{
    console.table(jsObject)
    for (i=0; i < jsObject.length; i++) {
        
    }
    })