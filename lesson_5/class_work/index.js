// function helloWord() {
//   console.log("Hello Word");
// }

// helloWord();

// const isUser = true;
// function chekAccess() {
//   if (isUser) {
//     console.log("Доступ есть");
//   } else {
//     console.log("Доступа нет");
//   }
// }
// chekAccess();

// function writeMessage () {
//    if (isUser) {
//     console.log("Привет пользователь");
// } else {
//     console.log("Доступа нет");
// }
// }
// writeMessage ();

// function sum(a, b) {
//   console.log(a + b);
// }
// sum(1, 0);
// sum(16, 4);

// function getName(name) {
//   console.log("до ретерн");
//   return name;
//   console.log("после ретерн");
// }
// const userName = getName("Ivan");
// console.log(userName);

// function getName(name) {}
// const userName = getName("Ivan");
// console.log(userName);

// let name = "Alex";

// function getName(userName) {
//   return userName;
// }
// const nameUser = getName(name);
// console.log(nameUser);

// name = "Ivan";
// const nameUserTwo = getName(name);
// console.log(nameUserTwo);

// let name = "Alex";
// console.log(name, "1");
// function sayHi() {
//   name = "Peter";
//   console.log(name, "function");
// }
// sayHi();
// console.log(name, "2");

// let name = "Alex";
// console.log(name, "1");
// function sayHi(userName) {
//   //   userName = "Peter";
//   console.log(userName, "function");
// }
// sayHi(name);
// console.log(name, "2");

/*ЧИСТАЯ ФУНКЦИЯ*/

// let a = 0;
// let b = 0;
// function sum() {
//   a += 1;
//   b += 1;
//   console.log(a + b);
// }
// sum();
// sum();
// sum();
// sum();

// function sum() {
//   const a = 0;
//   const b = 1;
//   console.log(a + b);
// }
// sum();
// sum();
// sum();
// sum();

/*ПРАКТИКА*/

// const name = "Anna";
// function userName(name) {
//   if (name) {
//     console.log("Привет", `${name}`);
//   } else {
//     console.log("Привет гость");
//   }
// }
// userName(name);
// userName();

// function math(a, b = 1) {
//   let c = a ** b;
//   console.log(c);
// }
// math(5);
// math(1, 2);
// math(2, 2);
// math(2, 3);

// function mass(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i += 1) {
//     sum += arr[i];
//   }
//   return sum / arr.length;
// }
// console.log(mass([1, 2, 3]));

/*Создание функций*/

// const sayName = function (name) {
//   return name;
// };
// console.log(sayName("name"));

// const getName = function () {
//   console.log("Alex");
// };

// const getUserInfo = function (callBack) {
//   console.log("User Info");
//   callBack();
// };
// getUserInfo(getName);

// test();
// function test() {
//   console.log("test");
// }
// test2();

// const test2 = function () {
//   console.log("test2");
// };

/*СТРЕЛОЧНАЯ ФУНКЦИЯ*/
// const myFirstArrowFunc = () => console.log("!!");

// const test1 = (name, age) => {
//     return name:
// };
// console.log(test1("Alwx"));

//FD
// function example1(param) {
//   return param;
// }
// example1(1);

// //FE
// const example2 = function (param) {
//   return param;
// };
// example2(2);

// //AF-1
// const example3 = (param) => param;
// example3(3);

// //AF-2
// const example4 = (param) => {
//   //big body
//   return param;
// };
// example4(4);

// const getStr = (str, count) => {
//   for (let i = 0; i < count; i += 1) {
//     console.log(str);
//   }
// };
// getStr("Ivan", 3);

// let letter = (str) => {
//   if (str === "а" || str === "е" || str === "и" || str === "о") {
//     console.log("true");
//   } else {
//     console.log("false");
//   }
// };
// letter("а");

// let text = (str) => {
//   console.log(str.reverse);
//   return str;
// };
// text("окно");

// ПАЛИНДРОМ

const isPalindrom = (str) => {
    let newStr = "";
    for (let i = 0; i < str.length; i += 1) {
      newStr += str[str.length - i - 1];
    }
    if (newStr === str) {
      return true;
    } else {
      return false;
    }
  };
  
  console.log(isPalindrom("abgba"));
  