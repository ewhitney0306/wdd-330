let countriesArray = new Array();

function getCities(url){
    fetch(url)
    .then((response)=>{if(response.ok){
        return response.json();
        }
        throw Error(response.statusText);
    })
    .then((data) => {
        console.log(data)

        // let table = document.getElementById('countryTable');
        // let rowHeader = document.createElement('tr');
        // let nameHeader = document.createElement('th');
        // let nameText = document.createTextNode('Name');
        // let codeHeader = document.createElement('th');
        // let codeText = document.createTextNode('Population');

        // nameHeader.appendChild(nameText);
        // codeHeader.appendChild(codeText);
        // rowHeader.appendChild(nameHeader);
        // rowHeader.appendChild(codeHeader);
        // table.appendChild(rowHeader);

        data.forEach(element => {
            createTable(element.name.common, element.population);
        });

        console.log(countriesArray);
    })
    .catch(error => console.log(error));
}

getCities("https://restcountries.com/v3.1/all");

function createTable(name, code){
    let table = document.getElementById('countryTable');
    let row = document.createElement('tr');
    let cell1 = document.createElement('td');
    let text1 = document.createTextNode(name);
    let cell2 = document.createElement('td');
    let text2 = document.createTextNode(code);

    cell1.appendChild(text1);
    cell2.appendChild(text2);
    row.appendChild(cell1);
    row.appendChild(cell2);
    table.appendChild(row);
}
