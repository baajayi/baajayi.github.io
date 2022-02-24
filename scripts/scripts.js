document.querySelector("#year").innerHTML = new Date().getFullYear()
document.querySelector("#date").innerHTML = new Date(document.lastModified).toLocaleString()
