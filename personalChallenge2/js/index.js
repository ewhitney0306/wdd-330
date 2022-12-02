import {Country, getLocalStorage, setLocalStorage} from './countryClass.js';

let countryArray = new Array();

$(document).ready( function () {
    getCountries("https://restcountries.com/v3.1/all");    
    
} );

function onFavCheckBox(){
    let table = $("#myTable").DataTable();
    let favMarkers = table.column(0).nodes();
    let favCountryArray = getLocalStorage();
    if(favCountryArray == null){
        favCountryArray = new Array();
        for(let i = 0; i < favMarkers.length; i++){
            favMarkers[i].addEventListener('click', function(){
                let selectedCountry = table.row($(this).parents('tr')).data();
                let index = countryArray.findIndex((item) => item.code.includes(selectedCountry[2]));
                let newCountry = new Country(selectedCountry[1], selectedCountry[2], selectedCountry[3], selectedCountry[4], selectedCountry[5], countryArray[index].languages, countryArray[index].continents, countryArray[index].flag, countryArray[index].capLatLong, selectedCountry[0]);
                if(favMarkers[i].firstElementChild.checked){
                    newCountry.favMarker = 'true';
                    favCountryArray.push(newCountry);
                    setLocalStorage(favCountryArray);
                } else {
                    newCountry.favMarker = 'false';
                    let code = newCountry.code;
                    let index = favCountryArray.findIndex((item) => item.code.includes(code));
                    favCountryArray.splice(index, 1);
                    setLocalStorage(favCountryArray);
                }
            })
        }
    }else {
        for(let i = 0; i < favMarkers.length; i++){
            favMarkers[i].addEventListener('click', function(){
                let selectedCountry = table.row($(this).parents('tr')).data();
                let index = countryArray.findIndex((item) => item.code.includes(selectedCountry[2]));
                let newCountry = new Country(selectedCountry[1], selectedCountry[2], selectedCountry[3], selectedCountry[4], selectedCountry[5], countryArray[index].languages, countryArray[index].continents, countryArray[index].flag, countryArray[index].capLatLong, selectedCountry[0]);
                if(favMarkers[i].firstElementChild.checked){
                    newCountry.favMarker = 'true';
                    favCountryArray.push(newCountry);
                    setLocalStorage(favCountryArray);
                } else {
                    newCountry.favMarker = 'false';
                    let code = newCountry.code;
                    let index = favCountryArray.findIndex((item) => item.code.includes(code));
                    favCountryArray.splice(index, 1);
                    setLocalStorage(favCountryArray);
                }
            });    
        }
    }
}

function getCountries(url){
    let favCountryList = getLocalStorage();
    fetch(url)
    .then((response)=>{if(response.ok){
        return response.json();
        }
        throw Error(response.statusText);
    })
    .then((data) => {
        if(favCountryList == null){
            data.forEach(element => {
                let favMarker = 'false';
                let newCountry = new Country(element.name.common, element.cca2, element.capital, element.latlng, element.population, element.languages, element.continents, element.flags.svg, element.capitalInfo.latlng, favMarker);
                countryArray.push(newCountry)
            }); 
        }else {
            data.forEach(element => {
                let favMarker = 'false'
                let newCountry = new Country(element.name.common, element.cca2, element.capital, element.latlng, element.population, element.languages, element.continents, element.flags.svg, element.capitalInfo.latlng, favMarker);
                favCountryList.forEach(marker =>{
                    if(marker.code.includes(newCountry.code)){
                        newCountry.favMarker = 'true';
                    }
                })
                countryArray.push(newCountry)
            });
        }
        
      createDataTable(countryArray)  
    })
    .catch(error => console.log(error));
}

function createDataTable(requests){

    let tableData = []

    for(let i=0; i < requests.length; i++){
        tableData.push([requests[i].favMarker, requests[i].name, requests[i].code, requests[i].capital, requests[i].latLong, requests[i].population]);
    }

    let table = $("#myTable").DataTable({
        data: tableData,
        columns:[
            {
                data: tableData.favMarker,
                render: function(data, type, rowIdx){                    
                        if(data == 'true'){
                            var updatedBox = '<input id="'+ rowIdx[2].data + '" type="checkbox" class="editor-active favMarker" checked/>';
                            return updatedBox
                        }else if(data == 'false'){
                            return '<input type="checkbox" class="editor-active favMarker">';
                        } else {
                            return '<input type="checkbox" class="editor-active favMarker">';
                        }                    
                    return data;
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
                        return "N/A";
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

    onFavCheckBox();
}
