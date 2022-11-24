let favList = JSON.parse(localStorage.getItem('favCountryList'));
console.log(favList);

var map = L.map('map').setView([0, 0], 3);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


const favMap = favList.map(country => {
    getCapitalCoords("https://restcountries.com/v3.1/name/" + country.name);
    var marker = L.marker([country.latLong[0], country.latLong[1]]).addTo(map);
    marker.bindPopup("<h2>"+ country.name +"</h2><br><button>Zoom</button>").openPopup();
});

function getCapitalCoords(url){
    fetch(url)
    .then((response)=> {
        if(response.ok){
            return response.json();
        }
        throw error(response.statusText);
    })
    .then((data) => {
        console.log(data);
    })
    .catch(error=> console.log(error));
}