var name = ['Avinaya']

var upName = name.map(function(names){
return names.concat(' Acharya');
}) ;

console.log(upName);

var upName = name.filter((yyu) =>{
return yyu == 'Aviaya';
});
console.log(upName); 

const full = 'Avinaya';
console.log(`hey I am ${name}`);



function Object(num1,num2){
    this.num1 = num1;
    this .num2 = num2;
}

const sum = new Object(20,30);

Object.prototype.calculate = function(){
    return (this.num1 * this.num2);
};

console.log(sum.calculate());
