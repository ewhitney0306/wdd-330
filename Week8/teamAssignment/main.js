function getShips(url="https://swapi.dev/api/starships/"){
    fetch(url)
    .then((response)=>response.json())
    .then((data)=>{
        for(var i =0; i < data.results.length; i++){
            //console.log(data.results[i]);
            displayShip(data.results[i]);
        }
    });
}
getShips();

function displayShip(dataResult){
    let paragraph = document.createElement("p");
    let text = dataResult.name;
    paragraph.innerText = text;
    document.body.appendChild(paragraph);
}