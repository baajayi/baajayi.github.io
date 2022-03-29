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
let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",

]
let dayname = daysOfTheWeek[d.getDay()]
let monthname = months[d.getMonth()]
document.querySelector("#year").innerHTML = new Date().getFullYear()
document.querySelector("#dateofnow").innerHTML = `${dayname}, ${d.getDate()} ${monthname} ${d.getFullYear()}`

function toggleMenu() {
	document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
    
}
const sodaWeatherInfo = "https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&appid=7d47d03772d90da70906388fcab359b7"

const sodaForecastInfo = "https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&appid=7d47d03772d90da70906388fcab359b7"
    fetch(sodaWeatherInfo)
        .then(response => response.json())
        .then((jsObject) => {
            
            console.log(jsObject)
            document.getElementById("sodacurrentweather").textContent = jsObject.weather[0].description
            document.getElementById("sodatemp").textContent = jsObject.main.temp
            document.getElementById("sodaspeed").textContent = (jsObject.wind.speed).toFixed(2)
            document.getElementById("sodahumid").textContent = jsObject.main.humidity
        })
    fetch(sodaForecastInfo)
        .then(response => response.json())
        .then((jsObject) => {
            console.log(jsObject)
        
            // for (let x = 0; x < jsObject["list"].length; x++){
            const datesOfWeather = jsObject["list"].filter((climate) =>{
            if (climate.dt_txt.includes(" 18:00:00")){
                return climate
            }})
            for (let x = 0; x < datesOfWeather.length; x++) {
                let card = document.createElement("section")
                card.setAttribute("class", "day-weather")
                let h3d = document.createElement("span")
                h3d.textContent = daysOfTheWeek[new Date(datesOfWeather[x].dt_txt).getDay()]
                h3d.setAttribute("class", "dayname")
                card.appendChild(h3d)
                document.querySelector("div.sodalatercontent1").appendChild(card)
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
        })
const sodatemp = parseFloat(document.getElementById("sodatemp").innerHTML, 10)
const sodaspeed = parseFloat(document.getElementById("sodaspeed").innerHTML, 10)
if (sodatemp <= 50 && sodaspeed > 3){
    const sodachill = 35.74 + (0.6215 * sodatemp) - (35.75 * (sodaspeed^0.16)) + (0.4275 * sodatemp * (sodaspeed^0.16))
document.querySelector("#sodachill").innerHTML = sodachill.toFixed(2)
} else {
    document.querySelector("#sodachill").innerHTML = "N/A"
}
