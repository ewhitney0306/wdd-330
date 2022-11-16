import {Country} from '/personalChallenge2/js/countryClass.js';

let countryArray = new Array();
let favCountryArray = new Array();

$(document).ready( function () {
    getCountries("https://restcountries.com/v3.1/all");    
    
} );

function onFavCheckBox(){
    let table = $("#myTable").DataTable();
    let favMarkers = document.querySelectorAll(".favMarker");
    favMarkers.forEach((element, event) => element.addEventListener('click', function(){  
        let selectedCountry = table.row(event.currentTarget).data();
        let newCountry = new Country(selectedCountry[1], selectedCountry[2], selectedCountry[3], selectedCountry[4], selectedCountry[5], selectedCountry[0])
        if(element.checked == true){
            newCountry.favMarker = 'true';
            favCountryArray.push(newCountry);
            console.log(favCountryArray);
        } else {
            newCountry.favMarker = 'false';
            let code = newCountry.code;
            let index = favCountryArray.indexOf(item => item.code.includes(code));
            console.log(index);
        }
    }));    
}


function getCountries(url){
    fetch(url)
    .then((response)=>{if(response.ok){
        return response.json();
        }
        throw Error(response.statusText);
    })
    .then((data) => {
        let count = 0; 
        
        data.forEach(element => {
            let favMarker = 'false';
            let newCountry = new Country(element.name.common, element.cca2, element.capital, element.latlng, element.population ,favMarker);
            countryArray.push(newCountry)
        });
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
