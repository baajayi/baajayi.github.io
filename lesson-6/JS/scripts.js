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
        // console.table(jsonObject);  // temporary checking for valid response and data parsing
        const towns = jsonObject["towns"]
        for (let i=0; i < 7; i++) {
            if (towns[i].name == "Preston" || towns[i].name === "Fish Haven" || towns[i].name == "Soda Springs"){
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
          document.querySelector("div.cards").appendChild(card);
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
          img.style.width = "100%"
          img.style.height = "auto"
          card.appendChild(img)
         
         

        }
        
    } 
        });




    