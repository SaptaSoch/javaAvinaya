class Person{

    constructor(name,age,childrent){
        this.name = name;
        this.age = age;
        this.childrent = childrent;
    }

    speak(){
        console.log(`My name is ${this.name} and I am ${this.age} years old.`)
    }

    birth(child){
        this.childrent.push(child);
        return this.childrent;
    }
}

const obj = new Person('Avinaya Acharya',20,['ram','sita']);
obj.speak();
console.log(obj.birth('gita'));