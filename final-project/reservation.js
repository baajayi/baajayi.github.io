function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
    }
function selectResponse() {
    const s = document.querySelector("#selected")
    const sel = document.querySelector("#rentals");
    s.style.display = "block";
    s.textContent = sel.value;
    }
