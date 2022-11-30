class Country {
    constructor(name, code, capital, latLong, population, language, continent, flag, capLatLong, favMarker){
        this.name = name;
        this.code = code;
        this.capital = capital;
        this.latLong = latLong;
        this.population= population;
        this.languages = language;
        this.continents = continent;
        this.flag = flag;
        this.capLatLong = capLatLong;
        this.favMarker = favMarker;
    }
}

function getLocalStorage(){
    return JSON.parse(localStorage.getItem('favCountryList'));
}

function setLocalStorage(favCountryArray){
    localStorage.setItem('favCountryList', JSON.stringify(favCountryArray));
}

export {Country, getLocalStorage, setLocalStorage};