function Main(name, type){
    this.name = name;
    this.type = type;
}

const string = new Main('Avinay','Java Developer');

Main.prototype.method = function(){
return `My name is ${this.name} and I am ${this.type} at SaptaSoch.`;
}
console.log(string.method());