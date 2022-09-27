const fruits = ["Banana", "Orange", "Apple", "Mango"];

const arrayString = fruits.toString();
//  'Banana,Orange,Apple,Mango'

const arrayJoin = fruits.join("_");
//  'Banana_Orange_Apple_Mango'

const count = fruits.push('Sapota', 'Guava');
console.log(count); // expected output: 6
console.log(fruits) // expected output: Array ["Banana", "Orange", "Apple", "Mango", "Sapota", "Guava"]

const popedEle = fruits.pop();
console.log(popedEle) // expected output: "Guava"
console.log(fruits) // expected output: Array ["Banana", "Orange", "Apple", "Mango", "Sapota"]

const unShiftedCount = fruits.unshift("Pineapple", "Grapes")
console.log(unShiftedCount) // expected output: 7
console.log(fruits) // expected output: ["Pineapple", "Grapes", "Banana", "Orange", "Apple", "Mango", "Sapota"]

const firstElement = fruits.shift();
console.log(firstElement) // expected output : "Pineapple"
console.log(fruits) // expected output : [ "Grapes", "Banana", "Orange", "Apple", "Mango", "Sapota" ]

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = ['g'];
const array = array1.concat(array2, array3);
console.log(array); // expected output: Array ["a", "b", "c", "d", "e", "f", "g"]
