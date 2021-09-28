console.log("Hello world!");
let userName = "Anna";
const age = 32;
let isFemale = true;
let secondName = null;
let noName;

console.log(userName, age, isFemale, secondName);
console.log(noName);

let date = {
  startLearning: "18.09.2021",
  endLearning: "19.02.2022",
};
console.log(date);
console.log(date.startLearning);

let id = Symbol("id");
console.log(id);

const bigint = 1234567890123456789012345678901234567890n;
console.log(bigint);

console.log(typeof userName);
console.log(typeof date);

userName = "Alex";
date.startLearning = "05/09/1989";
console.log(userName, date.startLearning);

var adress = {
  learn: "Gagarina 23/2",
  office: 420,
};
console.log(adress);
adress.learn = "Gagarina 2/23";
console.log(adress.learn, adress.office);