//function LoadList
//pulls from the local storage to populate utilities array
function loadList(){
    return JSON.parse(localStorage.getItem('listArray'));
}

//function SaveList
//pulls the updated array from utilities and saves it to the local storage
function saveList(listArray){
    localStorage.setItem('listArray', JSON.stringify(listArray));
}

//function displayList
//takes the loaded list and adds it to the html table 


export {loadList, saveList};