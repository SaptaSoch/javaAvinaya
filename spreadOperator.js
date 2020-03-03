const array1 = ['ram', 'shyam', 'gita']
const array2 = ['yogi','sagar','subash']

//required output ['ram', 'shyam', 'gita','lalit','yogi','sagar','subash']

//In ES5 we do it by following code 
let finalArray = [];
finalArray = finalArray.concat(array1);
finalArray.push('lalit');
finalArray = finalArray.concat(array2);
console.log(finalArray);



// In ES6 we do same thing by
const final = [...array1,'lalit', ...array2];
console.log(final);

//removing [] sign
console.log(...final);