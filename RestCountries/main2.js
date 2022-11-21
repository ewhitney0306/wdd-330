class Country {
    constructor(name, code, capital, latLong, population, flagUrl, favMarker){
        this.name = name;
        this.code = code;
        this.capital = capital;
        this.latLong = latLong;
        this.population= population;
        this.flagUrl = flagUrl;
        this.favMarker = favMarker;
    }
}

let countryArray = new Array();

function getCities(url){
    fetch(url)
    .then((response)=>{if(response.ok){
        return response.json();
        }
        throw Error(response.statusText);
    })
    .then((data) => {
        let count = 0; 
        
        data.forEach(element => {
            let favMarker = false;
            let newCountry = new Country(element.name.common, element.cca2, element.capital, element.latlng, element.population, element.flags.svg, favMarker);
            countryArray.push(newCountry)
        });
      createDataTable(countryArray)  
    })
    .catch(error => console.log(error));
}
$(document).ready( function () {
    getCities("https://restcountries.com/v3.1/all");
    
    
} );

function createDataTable(requests){

    let tableData = []
    
    console.log(requests)

    for(let i=0; i < requests.length; i++){
        tableData.push([requests[i].favMarker, requests[i].name, requests[i].code, requests[i].capital, requests[i].latLong, requests[i].population]);
    }

    

    let table = $("#myTable").DataTable({
        data: tableData,
        columns:[
            {
                data: tableData.favMarker,
                render: function(data, type, rowIdx){
                    if(type ==='display'){
                        if(data == true){
                            var updatedBox = '<input type="checkbox" class="editor-active" checked/>';
                            return updatedBox
                        } else {
                            return '<input type="checkbox" class="editor-active">';
                        }
                    }
                }
            },
            {
                data: tableData.name
            },
            {
                data: tableData.code
            },
            {
                data: tableData.capital,
                render: function(data, type, rowIdx){
                    if(data == undefined){
                        return "n/a";
                    } else {
                        return data;
                    }
                }
            },
            {
                data: tableData.latLong
            },
            {
                data: tableData.population
            }
        ]
    });
}

