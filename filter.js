//ES5
const numbers = [20,12,13,80];
const updatedNumber = numbers.filter(function(number){
return number > 18;
});
console.log(updatedNumber);

//ES6
const ages = [20,18,30,13,2,1,90];
const updatedAge = ages.filter(age => age < 18);
console.log(updatedAge);