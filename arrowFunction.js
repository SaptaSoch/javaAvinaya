//string concat of array using arrow function 
const name = ['avinaya','acharya'];
const updatedString = name.map((string) =>{
    // (explicit return)
return string.concat('yogi');
});

console.log(updatedString);

//update number with arrow function
const number =[1,2,3,4];
//implicit return type 
const updatedNumber = number.map((integer) => integer += 1);
console.log(updatedNumber);
