class Country {
    constructor(name, code, capital, latLong, population, flagUrl){
        this.name = name;
        this.code = code;
        this.capital = capital;
        this.latLong = latLong;
        this.population= population;
        this.flagUrl = flagUrl;
        this.lat = convertLat(latLong);
        this.lng = this.convertLng(latLong);
    }

    convertLat(latLong){
        let coordinates = latLong.split(',');
        let lat = coordinates[0];
        return lat;
        
    }

    convertLng (latLong){
        let coordinates = latLong.split(',');
        let lng = coordinates[1];
        return lng;
    }
}

export{Country};