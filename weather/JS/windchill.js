let temp = parseInt(document.getElementById("temp").value)
let speed = parseInt(document.getElementById("speed").value)
let chill = 35.74 + (0.6215 * temp) - (35.75 * (speed^0.16)) + (0.4275 * temp * (speed^0.16))
document.querySelector("#chill").innerHTML = chill
