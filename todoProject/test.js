class TodoItems{
    constructor(id, content, completed){
        this.id = id;
        this.content = content;
        this.completed = completed;
    }
}

let todoList = new Array();

function addNewItem(){
    let id = Date.now();
    let content = document.getElementById("addNewItem").value;
    let completed = false;

    let newItem = new TodoItems(id, content, completed);
    todoList.push(newItem);

    populateTable(todoList);
}

document.getElementById("addBtn").addEventListener("click", addNewItem);

function deleteItem(e){    
    let target = e.target;
    let sibling = target.previousSibling.innerText;
    let index = todoList.findIndex(arr => arr.content.includes(sibling));
    todoList.splice(index, 1);
    populateTable(todoList);
}

function onComplete(e){
    let target = e.target;
    let sibling = target.nextSibling;
    let siblingText = sibling.innerText;

    sibling.classList.add('completed');
    
    let index = todoList.findIndex(arr => arr.content.includes(siblingText));
    todoList[index].completed = true;
}

function populateTable(listArray){
    let table = document.getElementById("myTable");
    while(table.rows.length > 2){
        table.deleteRow(1);
    }
    listArray.map(item => {
        
        let row = table.insertRow(1);
        let cell = row.insertCell(0);

        if(item.completed == true){
            cell.innerHTML = "<form><input class='item' type='checkbox' onclick='onComplete(event)' checked/><label class='completed'>"+ item.content + 
            "</label><button type='button' class='deleteBtn' onclick='deleteItem(event)'>X</button></form>";
        } else {
            cell.innerHTML = "<form><input class='item' type='checkbox' onclick='onComplete(event)'/><label>"+ item.content + 
            "</label><button type='button' class='deleteBtn' onclick='deleteItem(event)'>X</button></form>";
        }
    });
}

function clickShowAll(){
    populateTable(todoList);
}

function clickActive(){
    let activeArray = todoList.filter(item => item.completed == false);
    populateTable(activeArray);
}

function clickCompleted() {
    let completedArray =  todoList.filter(item => item.completed == true);
    populateTable(completedArray);
}