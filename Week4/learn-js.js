class Person {
    constructor(fullName, age){
        this.fullName = fullName;
        this.age = age; 
    }
    
    describe() {
        return this.fullName + ", " + this.age + " years old"; 
    }
}

var me = new Person("Emily Whitney", 28);

console.log(me.describe());

console.log(Person.prototype);

Person.prototype.birthYear = 1994;

console.log(me.birthYear);

var him = new Person("Brandon Whitney", 29);

him.birthYear = 1993;

console.log(him.birthYear);

console.log(him);

Person.prototype.job = "Technical Trainer";

console.log(me.job);

me.job = "Web Developer";
me.birthYear = 1994;

him.job = "Technical Trainer";

console.log(me);
console.log(him);