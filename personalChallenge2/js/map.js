class FavCountry {
    constructor(capLat, capLong, code) {
        this.capLat = capLat;
        this.capLong = capLong,
        this.code  = code
    }
}

let favList = JSON.parse(localStorage.getItem('favCountryList'));

let capitalCoord = new Array();

var map = L.map('map').setView([0, 0], 2);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    noWrap: true
}).addTo(map);

function createMarkers(){
    if(favList != null){
        const favMap = favList.map(country => {    
            getCapitalCoords("https://restcountries.com/v3.1/name/" + country.name);
            var marker = L.marker([country.latLong[0], country.latLong[1]]).addTo(map);
            if(country.capital == undefined){
                marker.bindPopup("<h2>"+ country.name +"</h2><ul><li>Capital: "+ country.capital +"</li><li>Population: "+ country.population.toLocaleString("en-US") +"</li></ul>");
        
            } else {
                marker.bindPopup("<h2>"+ country.name +"</h2><ul><li>Capital: "+ country.capital +"</li><li>Population: "+ country.population.toLocaleString("en-US") +"</li></ul><hr><button id='" + country.code + "' class='zoomBtn' onclick='addZoomClick(" + country.code +")'>Zoom To Capital</button>");
            }
        });
    }    
}

createMarkers();

function getCapitalCoords(url){
    fetch(url)
    .then((response)=> {
        if(response.ok){
            return response.json();
        }
        throw error(response.statusText);
    })
    .then((data) => {
        let lat =data[0].capitalInfo.latlng[0];
        let long =  data[0].capitalInfo.latlng[1];
        let code = data[0].cca2;
        let favCountry = new FavCountry(lat, long, code);
        capitalCoord.push(favCountry);
    })
    .catch(error=> console.log(error));
}

function addZoomClick(code){
    
    let index = capitalCoord.findIndex((item) => item.code.includes(code.id));
        
    var latLng = L.latLng(capitalCoord[index].capLat, capitalCoord[index].capLong);
    map.flyTo(latLng, 10);
}

function resetMap(){
    map.flyTo([0,0], 2);
}