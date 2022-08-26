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

//3) Capitalize each of an array of names
const names = ["john", "JACOB", "jinGleHeimer", "schmidt"];

const capitalizeWord = names.map(function (x) {
  let result = x.toUpperCase();
  return result;
});
console.log(capitalizeWord);

// 4) Make an array of strings of the names

const person = [
  {
    name: "Angelina Jolie",
    age: 80,
  },
  {
    name: "Eric Jones",
    age: 2,
  },
  {
    name: "Paris Hilton",
    age: 5,
  },
  {
    name: "Kayne West",
    age: 16,
  },
  {
    name: "Bob Ziroll",
    age: 100,
  },
];
const nameOnly = person.map(function (x) {
  return x.name;
});
console.log(nameOnly);

const canOrNot = person.map(function (x) {
  if (x.age > 50) {
    return x.name + " can go to The matrix";
  } else {
    return x.name + " is under age!";
  }
});
console.log(canOrNot);

// 6) Make an array of the names in h1's, and the ages in h2's

const modify = person.map(function (x) {
  return `<h1>${x.name}</h1>
 <h2>${x.age}</h2>`;
});
console.log(modify);

/*------------REDUCE()---------------- */
//1) Sum of every positive element
const input = [1, -4, 12, 0, -3, 29, -150];
const result = input
  .filter(function (x) {
    return x > 0;
  })
  .reduce(function (acc, item) {
    return acc + item;
  });
console.log(result);
// 2) Turn an array of numbers into a long string of all those numbers.
const stringConcat = [1, 2, 3];
const result1 = stringConcat.reduce(function (acc, item) {
  return acc + item;
});
console.log(result1);

// 3) Turn an array of voter objects into a count of how many people voted
const voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];

const total = voters.reduce(function (acc, item) {
  if (item.voted) {
    //reduce will go through all the item of an array
    //check the truthy value if true
    return acc + 1; //add 1 each time to get the length
  } else {
    return acc; //if false just return acc value as it is
  }
}, 0);
console.log(`There are ${total} voters.`);
//display the length

//4) Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once

const wishlist = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 },
];

const pick = wishlist.reduce(function (acc, item) {
  return acc + item.price;
}, 0);

console.log(pick);

// 5) Given an array of arrays, flatten them into a single array
const arrays = [["1", "2", "3"], [true], [4, 5, 6]];

const singleArray = arrays.reduce(function (a, c) {
  return a.concat(c);
});
console.log(singleArray);

//6) Given an array of potential voters, return an object representing the results of the vote
//Include how many of the potential voters were in the ages 18-25,
// how many from 26-35, how many from 36-55, and how many of each of those age ranges actually voted.
// The resulting object containing this data should have 6 properties.

//Implementation
// -- > we need to check where the peer group belongs to based on the age
// -- > also increase the voting data for their corresponding group if they voted.

const voter = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];
const initialVotes = {
  numYoungVotes: 0,
  numYoungPeople: 0,
  numMidVotesPeople: 0,
  numMidPeople: 0,
  numOldVotesPeople: 0,
  numOldPeople: 0,
};
const potential_voters = voter.reduce(function (acc, item) {
  if (item.age >= 18 && item.age <= 25) {
    return acc.numYoungPeople++;
  }
  if (item.age >= 26 && item.age <= 35) {
    return acc.numMidPeople++;
  }
  if (item.age >= 36 && item.age <= 55) {
    return acc.numOldPeople++;
  }
  return { ...acc };
});
console.log(potential_voters);
