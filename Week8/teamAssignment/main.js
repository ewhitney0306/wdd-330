function fetchShips(url = "https://swapi.dev/api/planets"){
    fetch(url)
    .then(response => response.json())
    .then(data=>{
        console.log(data);
    });
}

fetchShips();