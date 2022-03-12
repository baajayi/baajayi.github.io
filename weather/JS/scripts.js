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
    document.body.insertBefore(banner,document.body.childNodes[0]).style.display = "block";
    document.body.insertBefore(banner,document.body.childNodes[0]).style.textAlign = "center";
	document.body.insertBefore(banner,document.body.childNodes[0]).style.fontFamily = "Josefin Sans"
    document.body.insertBefore(banner,document.body.childNodes[0]).style.fontWeight = "bold";

	
    
}