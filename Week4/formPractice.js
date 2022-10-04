class Person {
    constructor(fName, lName, age, favColor){
        this.fName = fName;
        this.lName = lName;
        this.age = age;
        this.favColor = favColor;
    }

    birthYear(){
        let year = new Date().getFullYear();
        return parseInt(year - this.age);
    }
}

let personArray = new Array();

function onSubmitClick(){
    let fname = document.getElementById("firstName");
    let lname = document.getElementById("lastName");
    let age = document.getElementById("age");
    let favColor = document.getElementById("favColor");
    let userInput = new Person();
    userInput.fName = fname.value;
    userInput.lName = lname.value;
    userInput.age = age.value;
    userInput.favColor =  favColor.value;

    personArray.push(userInput);
    
    fname.value = "";
    lname.value = '';
    age.value =  '';
}

function showArray(){
    const node = document.createElement("ul");

    const firstNames = personArray.map((people)=> {
        const liNode = document.createElement('li'); 
        const textNode = document.createTextNode(people.fName + " " + people.birthYear());
        liNode.appendChild(textNode)
        node.appendChild(liNode);
    });


    document.getElementById("inputDisplay").appendChild(node);
    
}
