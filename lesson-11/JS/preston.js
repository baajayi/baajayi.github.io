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

const WeatherInfo = "https://api.openweathermap.org/data/2.5/weather?id=5585010&units=imperial&appid=7d47d03772d90da70906388fcab359b7"

const ForecastInfo = "https://api.openweathermap.org/data/2.5/forecast?id=5585010&units=imperial&appid=7d47d03772d90da70906388fcab359b7"
fetch(WeatherInfo)
    .then(response => response.json())
    .then((jsObject) => {
        
        // console.log(jsObject)
        document.getElementById("currentweather").textContent = jsObject.weather[0].description
        document.getElementById("temp").textContent = parseFloat(jsObject.main.temp)
        document.getElementById("speed").textContent = parseFloat((jsObject.wind.speed))
        document.getElementById("humid").textContent = jsObject.main.humidity
    })
fetch(ForecastInfo)
    .then(response => response.json())
    .then((jsObject) => {
        //  console.log(jsObject)
    
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
            document.querySelector("div.latercontent1").appendChild(card)
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
    let chill = 35.74 + (0.6215 * temp) - (35.75 * (speed^0.16)) + (0.4275 * temp * (speed^0.16))
    document.querySelector("#chill").innerHTML = fishchill.toFixed(2)
} else {
    document.querySelector("#chill").innerHTML = "N/A"
}
const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json"

fetch(requestURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonObject) {
          const towns = jsonObject["towns"]
          for (let i=0; i < 7; i++) {
            if (towns[i].name === "Preston" ){
                const card = document.createElement("section")
                const h3e = document.createElement("marquee")
                h3e.setAttribute("behavior", "scroll")
                h3e.setAttribute("direction", "left")
                h3e.style.marginTop = "-50px"
                h3e.style.marginBottom = "25px"
                h3e.textContent = "Upcoming Events: " + towns[i].events
                card.appendChild(h3e)
                document.querySelector("div.event").appendChild(card)


            }
      }})