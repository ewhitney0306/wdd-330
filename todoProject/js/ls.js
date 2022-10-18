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
function displayList(){
    let todoList = loadList();
    if(todoList != null){
        let itemCountText = "Item Count " + todoList.length;
        document.getElementById('itemCount').innerText = itemCountText;
        let table = document.getElementById("todoTable");
        while(table.rows.length >2){
            table.deleteRow(1);
        }
        let createList = todoList.map(todo => {
            let row = table.insertRow(1);
            let cell = row.insertCell(0);
            cell.classList.add("item");
            if (todo.completed == true){
                cell.classList.add("completed");
            }
            cell.innerHTML = '<input type="checkbox" />' + todo.content + '<button type="button" class="deleteBtn">X</button>';
        });
    }
}

export {loadList, saveList, displayList};