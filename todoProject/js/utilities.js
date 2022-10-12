import Todos from "./Todos.js";
import {loadList, saveList} from "./ls.js";

let listArray = new Array();

function onAddItem(){
    listArray = loadList();
    //set id (Timestamp)
    let id = Date.now();
    //call value of input for contents
    let content = document.getElementById("newItemInput").value;
    //set completed to false
    let completed = false;
    //create new todo item 
    let newItem = new Todos(id, content, completed);
    //push new item to listArray
    listArray.push(newItem);
    // listArray to local storage
    saveList(listArray);
}

document.getElementById("addNewItemBtn").addEventListener("click", onAddItem);

//function onDeleteItem()
function onDeleteItem(e){
    //call the item to be deleted
    let target = e.target;
    //find the item in the array
    
    //delete item from array
    //remove table element from display area
    //save listArray to local storage
}


//function showCompleted()
    //pull array from local storage
    //filter array to pull only the completed 
    //adjust display to only display the completed tasks

//function showActive()
    //pull array from local storage
    //filter listArray to pull only the active tasks
    //adjust display to only display the completed tasks

