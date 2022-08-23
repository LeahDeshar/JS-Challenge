/*******filter() method practice********/

// 1.Given an array of numbers, return a new array that has only the numbers that are 5 or greater.

const arr1 = [3, 6, 8, , 5, 7, 2];
const arr2 = arr1.filter(function (x) {
  if (x >= 5) {
    return x;
  }
});
console.log(arr2);

//2) Given an array of numbers, return a new array that only includes the even numbers.
const arr3 = arr1.filter(function (x) {
  if (x % 2 == 0) {
    return x;
  }
});
console.log(arr3);

//3) Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length

const str1 = ["apple", "banana", "cherry", "Fig"];

const str2 = str1.filter(function (x) {
  if (x.length <= 5) {
    return x;
  }
});
console.log(str2);

//4) Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.
const checkIfBelongs = [
  { name: "Angelina Jolie", member: true },
  { name: "Eric Jones", member: false },
  { name: "Paris Hilton", member: true },
  { name: "Kayne West", member: false },
  { name: "Bob Ziroll", member: true },
];

const belongsToClub = checkIfBelongs.filter(function (x) {
  if (x.member) {
    return x;
  }
});
console.log(belongsToClub);

//5) Make a filtered list of all the people who are old enough to see The Matrix (older than 18)

const ofAge = [
  { name: "Angelina Jolie", age: 80 },
  { name: "Eric Jones", age: 2 },
  { name: "Paris Hilton", age: 5 },
  { name: "Kayne West", age: 16 },
  { name: "Bob Ziroll", age: 100 },
];
const oldThan18 = ofAge.filter(function (x) {
  if (x.age > 18) {
    return x;
  }
});
console.log(oldThan18);

/****  MAP() method  ****/

//1) Make an array of numbers that are doubles of the first array
const singleNum = [1, 2, 3, 4, 5];

const doubleNum = singleNum.map((x) => Math.pow(x, 2));
console.log(doubleNum);

//2) Take an array of numbers and make them strings

//String constructor will turn each element into a string
const stringItUp = doubleNum.map(String);
console.log(stringItUp);
