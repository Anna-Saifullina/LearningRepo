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

const town = {
    townName: "Moskov",
    population: "15 млн",
    getTownName: function() {
    return this.townName
},
    getTownPopulation: function () {
        return this.population
},
setSomeValue: function (key, value) {
    this[key] = value;
},
};
console.log(town);
town.setSomeValue("townName", "Nizhny Novgorod");
town.setSomeValue("population", "1,3 млн")
console.log(town);