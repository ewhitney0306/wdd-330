import Todos from "./Todos.js";
import {loadList, saveList, displayList} from "./ls.js";

displayList();

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
    }
    displayList();
}

document.getElementById("addNewItemBtn").addEventListener("click", onAddItem);

//function onDeleteItem()
function onDeleteItem(e){
    //call the item to be deleted
    let target = e.target;
    let todoItem = target. previousSibling.innerText;
    //find the item in the array
    let todoListArray = loadList();
    let arr = todoListArray.findIndex(arr => arr.includes(todoItem));
    console.log(arr);
    //delete item from array
    //remove table element from display area
    //save listArray to local storage
}

let delBtn = document.querySelectorAll(".deleteBtn");

delBtn.forEach(function(btn){
    btn.addEventListener("click", onDeleteItem);
});

//function showCompleted()
    //pull array from local storage
    //filter array to pull only the completed 
    //adjust display to only display the completed tasks

//function showActive()
    //pull array from local storage
    //filter listArray to pull only the active tasks
    //adjust display to only display the completed tasks

