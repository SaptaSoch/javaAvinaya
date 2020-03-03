// In ES5 we create object by 

const person = {
    name : "avinaya",
    age :20
};
console.log(person);

//In ES6 we create object and define protype method by

function Person(name,age){     
    this.name = name;
    this.age = age;
};
const avinaya = new Person('Avinaya', 20);
console.log(avinaya);

//we create prototype method by
Person.prototype.speak = function(){
    console.log(`My name is ${this.name} and I am ${this.age} old.`);
}
avinaya.speak();