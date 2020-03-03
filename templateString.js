//In ES5  to concat string we use by this method
const name = "avinaya";
const age = "24";
const full = 'my name is '+ name + ', and I am '+age+' years old.';
console.log(full);


//In ES6 to concat string we use template String 
const naam = "Avinaya Acharya";
const barsha = "22";
const sentences = `my name is ${naam}, and I am ${barsha} old`;
console.log(sentences);


// we can also modify values in tempalte String like 
const salary = 20000;
const upSalary = `My updated salary is ${salary*2}`;
console.log(upSalary);