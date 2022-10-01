class Person {
    constructor(fName, lName, age, favColor){
        this.fName = fName;
        this.lName = lName;
        this.age = age;
        this.favColor = favColor;
    }

    birthYear(){
        let year = new Date().getFullYear();
        return parseInt(year - age);
    }
}

let userInput = new Person();

function onSubmitClick(){
    userInput.fName = document.getElementById("firstName").value;
    userInput.lName = document.getElementById("lastName").value;
    userInput.age = document.getElementById("age").value;
    userInput.favColor = document.getElementById("favColor").value; 
}

console.log(userInput);