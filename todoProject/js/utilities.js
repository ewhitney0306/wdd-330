import Todos from "./Todos.js";
import {loadList, saveList} from "./ls.js";

populateTable(loadList());

function onAddItem(){
    let todoListArray = loadList();
    if (todoListArray == null){
        let todoListArray = new Array();
        //set id (Timestamp)
        let id = Date.now();
        //call value of input for contents
        let content = document.getElementById("newItemInput").value;
        //set completed to false
        let completed = false;
        //create new todo item 
        let newItem = new Todos(id, content, completed);
        //push new item to listArray
        todoListArray.push(newItem);
        // listArray to local storage
        saveList(todoListArray);
        populateTable(todoListArray);
    } else {
        //set id (Timestamp)
        let id = Date.now();
        //call value of input for contents
        let content = document.getElementById("newItemInput").value;
        //set completed to false
        let completed = false;
        //create new todo item 
        let newItem = new Todos(id, content, completed);
        //push new item to listArray
        todoListArray.push(newItem);
        // listArray to local storage
        saveList(todoListArray);
        populateTable(todoListArray);
    }
}

document.getElementById("addNewItemBtn").addEventListener("click", onAddItem);

//function onDeleteItem()
function onDeleteItem(e){
    //call the item to be deleted
    let target = e.target;
    let todoItem = target. previousSibling.innerText;
    //find the item in the array
    let todoListArray = loadList();
    let index = todoListArray.findIndex(item => item.content.includes(todoItem));
    //delete item from array
    todoListArray.splice(index, 1);
    //remove table element from display area
    populateTable(todoListArray);
    //save listArray to local storage
    saveList(todoListArray);
}



//function showCompleted()
function showCompleted(){
    //pull array from local storage
    let todoArray = loadList();
    //filter array to pull only the completed 
    let filteredArray = todoArray.filter(item => item.completed == true);
    //adjust display to only display the completed tasks
    populateTable(filteredArray);
}

document.getElementById("completedBtn").addEventListener("click", showCompleted);
    
//function showActive()
function showActive(){
    //pull array from local storage
    let todoArray = loadList();
    //filter listArray to pull only the active tasks
    let filteredList = todoArray.filter(item => item.completed == false);
    //adjust display to only display the completed tasks
    populateTable(filteredList);
}

document.getElementById("activeBtn").addEventListener("click", showActive);

function showAll(){
    let todoList = loadList();
    populateTable(todoList);
}

document.getElementById("showAllBtn").addEventListener("click", showAll);

function populateTable(todoList){
    let itemCountText = "Item Count " + todoList.length;
    document.getElementById('itemCount').innerText = itemCountText;

    let table = document.getElementById("todoTable");

    while(table.rows.length >2){
        table.deleteRow(1);
    }

    let createList = todoList.map(todo => {
        let row = table.insertRow(1);
        let cell = row.insertCell(0);
        if(todo.completed == false){
            cell.innerHTML = '<input class="check" type="checkbox" /><label>' + todo.content + '</label><button type="button" class="deleteBtn">X</button>';
            document.querySelectorAll(".check").forEach(item => {item.addEventListener("click", onComplete)});
        } else {
            cell.innerHTML = '<input class="check" type="checkbox" checked readonly/><label class="completed">' + todo.content + '</label><button type="button" class="deleteBtn" >X</button>';
        }
    });
    document.querySelectorAll(".deleteBtn").forEach(item => {item.addEventListener("click", onDeleteItem)});
    
}

function onComplete(e){
    let todoList = loadList();
    let target = e.target;
    let sibling = target.nextSibling;
    let siblingText = sibling.innerText;

    sibling.classList.add("completed");

    let index = todoList.findIndex(item => item.content.includes(siblingText));
    todoList[index].completed = true;

    saveList(todoList);
}

