// function example (){
//     console.log(this);
// }
// example ()

// function getName () {
//     console.log(this.name);
// }
// const user = {
//     name: "Alex",
//     age: "25",
//     getUserName: getName,
// };
// user.getUserName();

// const admin = {
//     name: "Max",
//     age: "45",
//     getAdminName: getName,
// };
// admin.getAdminName();

// function example(){
//     console.log(this);
// }
// const testObject = {
//     testMethod: example,
// }
// testObject.testMethod();

// ПРИМЕР

// function startFight() {
//     return this.strange * this.agility;
// }
// const hero = {
//     name: "Jon",
//     strange: 20,
//     agility: 10,
//     health:100,
//     fight: startFight,
// };
// const dracula = {
//     name: "Vlad",
//     strange: 50,
//     agility: 7,
//     health:1000,
//     fight: startFight,
// };
// console.log(hero.fight(), dracula.fight());

// if (hero.fight()>dracula.fight()) {
//     console.log("Герой победил! УРА");
// } else {
//     console.log("Провал, вы погибли");
// }

// const startFight = () => {
//     return this.strange * this.agility;
// }
// const hero = {
//     name: "Jon",
//     strange: 20,
//     agility: 10,
//     health:100,
//     fight: startFight,
// };
// const dracula = {
//     name: "Vlad",
//     strange: 50,
//     agility: 7,
//     health:1000,
//     fight: startFight,
// };
// console.log(hero.fight(), dracula.fight());

// if (hero.fight()>dracula.fight()) {
//     console.log("Герой победил! УРА");
// } else {
//     console.log("Провал, вы погибли");
// }

// ПРАКТИКА

// const town = {
//     townName: "Moskov",
//     population: "15 млн",
//     getTownName: function() {
//     return this.townName
// },
//     getTownPopulation: function () {
//         return this.population
// },
// setSomeValue: function (key, value) {
//     this[key] = value;
// },
// };
// console.log(town);
// town.setSomeValue("townName", "Nizhny Novgorod");
// town.setSomeValue("population", "1,3 млн")
// console.log(town);

// МЕТОД РАБОТЫ С КОНТЕКСТОМ

// function sayFullName(firstName, lastName) {
//     return `${this.phrase} ${firstName} ${lastName}`; 
// }
// console.log(sayFullName("Alex", "Shirokov"));

// console.log(sayFullName.call({phrase:"Hello!"}, "Ivan", "Smirnov"));


// function sayFullName(firstName, lastName) {
//     return `${this.phrase} ${firstName} ${lastName}`; 
// }
// let boundFullName = sayFullName.bind({phrase: "Bye!"}, "Max", "Petrov")
// let bound2 = sayFullName.bind({phrase: "Hello!"}, "Kate", "Petrova");
// console.log(boundFullName());
// console.log(bound2());

// function sayFullName(firstName, lastName) {
//     return `${this.phrase} ${firstName} ${lastName}`; 
// }
// let boundFullName = sayFullName.bind({phrase: "Bye!"}, "Max", "Petrov")
// let bound2 = sayFullName.bind({phrase: "Hello!"}, "Kate");
// console.log(boundFullName());
// console.log(bound2("Petrova"));


// const town = {
//         townName: "Moskov",
//         population: "15 млн",
//         getTownName: function() {
//         return this.townName
//     },
//         getTownPopulation: function () {
//             return this.population
//     },
//     setSomeValue: function (key, value) {
//         this[key] = value;
//     },
//     };
// let town2 = {
//     townName: "Novgorod",
//     population: "1,3 млн", 
// };

// console.log(town.getTownName());
// console.log(town.getTownName.call(town2));
// console.log(town2);

/*const bound = town.setSomeValue.bind(town2, "townName", "Pavlovo");
bound();*/

// ИЛИ

// const bound = town.setSomeValue.bind(town2);
// bound("townName", "Pavlovo");
// bound("population", "0,3")
// console.log(town2);


// ЗАМЫКАНИЕ
// function getFullName () {
// const firstName = "Alex";
// function getSecondName (secondName) {
// return `${firstName} ${secondName}`;
// }
// return getSecondName;
// }

// const clouser = getFullName();
// console.log(clouser("Smirnov"));


// const getArea = (a) => {
//     return (b) => a*b;   /*вернули анонимную стрелочную ф-ю*/
// };

// const areaWithTen = getArea (10);
// console.log(areaWithTen(5));
// console.log(areaWithTen(10));
// console.log(areaWithTen(230));

// const areaWithFour = getArea(4);
// console.log(areaWithFour(3));
// console.log(areaWithFour(21));


// ПРАКТИКА
const getVolume = (a) => {
    return (b,c) => a*b*c;   /*вернули анонимную стрелочную ф-ю*/
};

const volumeHeigthTen = getVolume (10);
console.log(volumeHeigthTen(3,2));