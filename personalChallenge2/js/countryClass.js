class Country {
    constructor(name, code, capital, latLong, population, favMarker){
        this.name = name;
        this.code = code;
        this.capital = capital;
        this.latLong = latLong;
        this.population= population;
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