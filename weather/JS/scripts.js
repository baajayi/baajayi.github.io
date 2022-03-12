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
const temp = parseFloat(document.getElementById("temp").innerHTML, 10)
const speed = parseFloat(document.getElementById("speed").innerHTML, 10)
if (temp <= 50 && speed > 3){
    const chill = 35.74 + (0.6215 * temp) - (35.75 * (speed^0.16)) + (0.4275 * temp * (speed^0.16))
document.querySelector("#chill").innerHTML = chill.toFixed(2)
} else {
    document.querySelector("#chill").innerHTML = "N/A"
}
