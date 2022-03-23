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
document.querySelector("#year").innerHTML = new Date().getFullYear()
document.querySelector("#date").innerHTML = new Date(document.lastModified).toLocaleString()
        