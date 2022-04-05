let dataTable = document.createElement("table")
document.querySelector("div.rental-table").appendChild(dataTable)
let firstHeader = document.createElement("tr")
let tableTitle = document.createElement("th")
tableTitle.textContent = "Max Persons and Prices Chart"
firstHeader.appendChild(tableTitle)
let reservationRow = document.createElement("tr")
let emptyCell = document.createElement("th")
emptyCell.setAttribute("colspan", "2")
emptyCell.textContent = " "
reservationRow.appendChild(emptyCell)
let reservation = document.createElement("th")
reservation.setAttribute("colspan", "2")
reservation.textContent = "Reservation"
reservationRow.appendChild(reservation)
let walkIn = document.createElement("th")
walkIn.setAttribute("colspan", "2")
walkIn.textContent = "Walk-In"
reservationRow.appendChild(walkIn)
let rentalDetails = document.createElement("tr")
let rentalType = document.createElement("th")
rentalType.textContent = "Rental Type"
rentalDetails.appendChild(rentalType)
let personNumber = document.createElement("th")
personNumber.textContent = "Max Persons"
rentalDetails.appendChild(personNumber)
let halfDay = document.createElement("th")
halfDay.textContent = "Half Day(3Hours)"
rentalDetails.appendChild(halfDay)
let fullDay = document.createElement("th")
fullDay.textContent = "Full Day"
rentalDetails.appendChild(fullDay)
let whalfDay = document.createElement("th")
whalfDay.textContent = "Half Day(3Hours)"
rentalDetails.appendChild(whalfDay)
let wfullDay = document.createElement("th")
wfullDay.textContent = "Full Day"
rentalDetails.appendChild(wfullDay)
dataTable.appendChild(firstHeader)
dataTable.appendChild(reservationRow)
dataTable.appendChild(rentalDetails)
console.table(dataTable)





const rentalURL = "data/rentals.json"
fetch(rentalURL)
    .then(response => response.json())
    .then((jsObject) =>{
    console.table(jsObject)
   
    for (i=0; i < jsObject.rentals.length; i++) {
        let card = document.createElement('section');
        card.setAttribute("class", "rental-section")
        let h2 = document.createElement('h2');
        h2.textContent = "Scooter Name: " + jsObject.rentals[i].name
        card.appendChild(h2);
        let h3m = document.createElement("h3")
        h3m.textContent = "Maximum number of Occupants: " + jsObject.rentals[i].maximumPersons
        h3m.style.fontWeight = "normal"
        h3m.style.fontStyle = "italic"
        h3m.style.marginTop = "-25px"
        h3m.style.textAlign = "center"
        card.appendChild(h3m)
        document.querySelector("div.rentals").appendChild(card);
        card.appendChild(h2)
        card.appendChild(h3m)
        let img = document.createElement("img")
        img.setAttribute("src", jsObject.rentals[i].photo)
        img.setAttribute("alt", jsObject.rentals[i].name)
        img.style.width = "100%"
        img.style.height = "auto"
        card.appendChild(img)
        let particularRow = document.createElement("tr")
        let firstType = document.createElement("td")
        firstType.textContent = jsObject.rentals[i].name
        particularRow.appendChild(firstType)
        let maxPersons = document.createElement("td")
        maxPersons.textContent = jsObject.rentals[i].maximumPersons
        particularRow.appendChild(maxPersons)
        let rhalf = document.createElement("td")
        rhalf.textContent ="$" + jsObject.rentals[i].reservationHalfDay
        particularRow.appendChild(rhalf)
        let rfull = document.createElement("td")
        rfull.textContent ="$" + jsObject.rentals[i].reservationFullDay
        particularRow.appendChild(rfull)
        let whalf = document.createElement("td")
        whalf.textContent ="$" + jsObject.rentals[i].walkInHalfDay
        particularRow.appendChild(whalf)
        let wfull = document.createElement("td")
        wfull.textContent ="$" + jsObject.rentals[i].walkInFullDay
        particularRow.appendChild(wfull)
        dataTable.appendChild(particularRow)


    }
    })