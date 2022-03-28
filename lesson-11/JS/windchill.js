const temp = parseFloat(document.getElementById("temp").innerHTML, 10)
const speed = parseFloat(document.getElementById("speed").innerHTML, 10)
if (temp <= 50 && speed > 3){
    const chill = 35.74 + (0.6215 * temp) - (35.75 * (speed^0.16)) + (0.4275 * temp * (speed^0.16))
document.querySelector("#chill").innerHTML = chill.toFixed(2)
} else {
    document.querySelector("#chill").innerHTML = "N/A"
}

