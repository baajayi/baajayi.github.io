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
if (daysOfTheWeek[d.getDay()]==="Friday") {
    let banner = document.createElement("div")
    banner.className = "display"
    banner.innerHTML = "Preston Pancakes in the Park! 9:00 a.m. Saturday at the city park pavilion."
    document.body.insertBefore(banner,document.body.childNodes[0]).style.display = "block"
    document.body.insertBefore(banner,document.body.childNodes[0]).style.textAlign = "center"
	document.body.insertBefore(banner,document.body.childNodes[0]).style.fontFamily = "Josefin Sans"
    document.body.insertBefore(banner,document.body.childNodes[0]).style.fontWeight = "bold"   
}
const images = document.querySelectorAll("[data-src]")


function preloadImage(img) {
    const src = img.getAttribute("data-src")
    if (!src) {
        return;
    } 
    img.src = src
}

const imgOptions = {
    threshold: 1, 
    rootMargin: "0px 0px 200px 0px"
}
const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target)
        }
    })
}, imgOptions)

images.forEach(image => {
    imgObserver.observe(image)
})
function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}
function selectResponse() {
	const s = document.querySelector("#selected")
	const sel = document.querySelector("#stormregion");
	s.style.display = "block";
	s.textContent = sel.value;
}
const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json"

fetch(requestURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        const towns = jsonObject["towns"]
        for (let i=0; i < 3; i++) {
          let card = document.createElement('section');
          let h2 = document.createElement('h2');
          h2.textContent = towns[i].name
          card.appendChild(h2);
          let h3m = document.createElement("h3")
          h3m.textContent = towns[i].motto
          h3m.style.fontWeight = "normal"
          h3m.style.fontStyle = "italic"
          h3m.style.marginTop = "-25px"
          h3m.style.textAlign = "center"
          card.appendChild(h3m)
          document.querySelector('div.cards').appendChild(card);
          let h3y = document.createElement("h3");
          h3y.textContent = "Year Founded: " + towns[i].yearFounded
          h3y.style.textAlign = "center"
          card.appendChild(h3y)
          let h4p = document.createElement("h4");
          h4p.textContent = "Population: " + towns[i].currentPopulation
          card.appendChild(h4p)
          let h4ar = document.createElement("h4");
          h4ar.textContent = "Annual Rainfall: " + towns[i].averageRainfall
          card.appendChild(h4ar)
          let div = document.createElement("div")
          div.appendChild(h2)
          div.appendChild(h3m)
          div.appendChild(h3y)
          div.appendChild(h4ar)
          div.appendChild(h4p)
          card.appendChild(div)
          let img = document.createElement("img")
          img.setAttribute("src", "./images/town" + (i+1) +".jpg")
          img.setAttribute("alt", towns[i].name)
          card.appendChild(img)
         
         

        }
          
        });
// document.querySelector("#year").innerHTML = new Date().getFullYear()
// document.querySelector("#date").innerHTML = new Date(document.lastModified).toLocaleString()
        

const weatherInfo = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=7d47d03772d90da70906388fcab359b7"
const forecastInfo = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=7d47d03772d90da70906388fcab359b7"
fetch(weatherInfo)
    .then(response => response.json())
    .then((jsObject) => {
        
        console.log(jsObject)
        document.getElementById("currentweather").textContent = jsObject.weather[0].description
        document.getElementById("temp").textContent = jsObject.main.temp
        document.getElementById("speed").textContent = (jsObject.wind.speed * 2.237).toFixed(2)
        document.getElementById("humid").textContent = jsObject.main.humidity
    })
fetch(forecastInfo)
    .then(response => response.json())
    .then((jsObject) => {
        // console.log(jsObject)
    
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

