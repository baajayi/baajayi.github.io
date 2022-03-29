// function windchill(temp, speed) {
 
//     if (temp <= 50 && speed > 3){
//         return 35.74 + (0.6215 * temp) - (35.75 * (speed^0.16)) + (0.4275 * temp * (speed^0.16))
//     } else {
//        return "N/A"
//     }
//     }
// const prestonTemp = parseFloat(document.querySelector("#temp").innerHTML)
// const prestonSpeed = parseFloat(document.querySelector("#speed").innerHTML)
// document.querySelector("#chill").value = (windchill(prestonTemp, prestonSpeed))
// const fishTemp = parseFloat(document.querySelector("#fishtemp").innerHTML)
// const fishSpeed = parseFloat(document.querySelector("#fishspeed").innerHTML)
// document.querySelector("#fishchill").value = (windchill(fishTemp, fishSpeed))
// const sodaTemp = parseFloat(document.querySelector("#sodatemp").innerHTML)
// const sodaSpeed = parseFloat(document.querySelector("#sodaspeed").innerHTML)
// document.querySelector("#sodachill").value = (windchill(sodaTemp, sodaSpeed))
const temp = parseFloat(document.getElementById("temp").innerHTML, 10)
const speed = parseFloat(document.getElementById("speed").innerHTML, 10)
if (temp <= 50 && speed > 3){
    const chill = 35.74 + (0.6215 * temp) - (35.75 * (speed^0.16)) + (0.4275 * temp * (speed^0.16))
document.querySelector("#chill").innerHTML = chill.toFixed(2)
} else {
    document.querySelector("#chill").innerHTML = "N/A"
}



