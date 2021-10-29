// let num1 = 1;
// let num2 = num1;
// console.log(num1, num2);

// num1 = 2;

// console.log(num1, num2);

// const obj1 = {
//   name: "Alex",
// };

// const obj2 = obj1;
// console.log(obj1, obj2);
// obj1.name = "Ivan";

// console.log(obj1, obj2);

// ОБЪЕКТ И ЕГО СВОЙСТВА
// const obj = {};
// console.log(obj);

// obj.age = "12";
// obj["name"] = "Ivan";
// console.log(obj);

// console.log(obj.age, obj["name"]);

// obj.age = "18";
// obj.name = "Max";

// console.log(obj);

// УДАЛЕНИЕ СВОЙСТВА
// console.log(obj.age);
// delete obj.age;
// console.log(obj.age);

// МЕТОД ФУНКЦИИ

// const obj = {
//   sayHi: function () {
//     console.log("HI USER");
//   },
// };
// obj.sayHi();

// const obj = {
//   sayHi: function (name) {
//     console.log("HI USER", name);
//   },
// };
// obj.sayHi("Anna");

// ПРАКТИКА

// const myFavoriteFilm = {
//   name: "Джанго",
//   dateRelease: "08/06/2016",
//   nameProducer: "Квентин",
//   country: "США",
// };
// console.log(myFavoriteFilm);

// myFavoriteFilm.cash = "10000000";

// console.log(myFavoriteFilm);

// myFavoriteFilm.getName = function nameFilm() {
//   console.log("Джанго");
// };

// myFavoriteFilm.getName();

// delete myFavoriteFilm.dateRelease;

// console.log(myFavoriteFilm);

// const str = "string";
// console.log(str);
// str[0] = "S";
// console.log(str);

// 1

// const getRandomNumber = (min, max) => {
//   const rand = Math.random() * (max - min);
//   const result = min + rand;
//   console.log(result);
//   return Math.round(result);
// };
// console.log(getRandomNumber(1, 100));

// 2

// const getRegistr = (str, n) => {
//   if (n > str.length) {
//     console.log("неверные параметры");
//   }
//   if (str[n] === str[n].toUpperCase()) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// };
// getRegistr("Ivan LEXA", 3);

// 3
