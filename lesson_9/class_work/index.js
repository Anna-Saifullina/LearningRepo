// ПРОТОТИПЫ

// const people = {
// getName: function () {
//     return this.name;
// }
// };
// const user ={
//     name: "Alex",
//     __proto__: people,
// }
// const admin ={
//     name: "Vasya",
//     __proto__: people,
// }
// // console.log(people.getName());
// console.log(user.getName());
// console.log(admin.getName());

// ФУНКЦИИ КОНСТРУКТОР
// function CreateUser() {
//     console.log("User CREATE");
// }
// const user = new CreateUser();
// console.log(user);

// function CreateUser(name, age) {
//         this.userName = name;
//         this.userAge = age;
//         this.sayHi = function (){
//             return `Hello! My name is ${this.userName}`;
//         }
//     }
//     const userOne = new CreateUser("Alex", "25");
//     const userTwo = new CreateUser("Max", "30");

//     // console.log(userOne);
//     // console.log(userTwo);
// console.log(userOne.sayHi());


// function CreateUser(name, age) {
//     this.userName = name;
//     this.userAge = age;
// }
// console.log(CreateUser.prototype);
// CreateUser.prototype.sayHi = function () {
//     return `Hello! My name is ${this.userName}`; 
// }
// const userOne = new CreateUser("Alex", "25");
// const userTwo = new CreateUser("Max", "30");

// console.log(userOne);
// console.log(userTwo);
// console.log(userOne.sayHi());


// ПРАКТИКА
/*Реализовать функцию конструктор для создания открыток. Функция должна создавать объект открытки со свойствами from, to и метод show(). Метод должен возвращать строку в которой будут указаны значения свойств  from и to.
Добавить в prototype создаваемого объекта метод заменяющий текущее значение  свойства from на новое переданное значение.*/

// function CreatePostCard (from, to) {
//     this.from = from;
//     this.to = to;
// }
// CreatePostCard.prototype.show = function (){
//     console.log(`${this.from} отправил открытку ${this.to}`);
// }
// CreatePostCard.prototype.setFromValue = function (newFrom) {
//     this.from = newFrom;
// }
// const firstCard = new CreatePostCard ("Alex", "Ivan");
// console.log(firstCard);
// firstCard.show();
// firstCard.setFromValue("Max");
// console.log(firstCard);
// firstCard.show();

// КЛАССЫ
// class Parent {
//     constructor(name) {
//         this.name = name;
//     }
//     sayName () {
//         return `Привет, мое имя ${this.name}`;
//     }
// }
// const firstParent = new Parent ("Max");
// console.log(firstParent);
// console.log(firstParent.sayName());

/*Вызвать родительский конструктор*/
// class Child extends Parent {
//     constructor(name,lastName) {
//         super (name);
//         this.lastName= lastName;
//     }
//     sayFullNme () {
//         return `Мое полное имя: ${this.lastName} ${this.name}`;
//     }
// }
// const firstChild = new Child("Ivan","Petrov");
// console.log(firstChild);
// console.log(firstChild.sayFullNme());
// console.log(firstChild.sayName());

/*Вызвать родительский метод*/
// class Child extends Parent {
//     constructor(name,lastName) {
//         super (name);
//         this.lastName= lastName;
//     }
//     sayName() {
//         console.log("Это внутренний метод");
//     }
//     sayFullName () {
//         const nameString = `${super.sayName()} ${this.lastName}`
//         return nameString;
//     }
// }
// const firstChild = new Child("Ivan","Petrov");
// console.log(firstChild);
// console.log(firstChild.sayFullName());
// firstChild.sayName();

/*ГЕТТЕР/СЕТТЕР */ 

// class Child extends Parent {
//         constructor(name,lastName) {
//             super (name);
//             this.lastName= lastName;
//         }
//         sayName() {
//             console.log("Это внутренний метод");
//         }
//         sayFullName () {
//             const nameString = `${super.sayName()} ${this.lastName}`
//             return nameString;
//         }
//         get lastName () {
//             return this._lastName;
//         }
//         set lastName (newValue) {
//             this._lastName = newValue;
//         }
//         getLastName (){
//             return this.lastName;
//         }
//         setlastName (newValue) {
//             this.lastName = newValue;
//         }
//     }
//     const firstChild = new Child("Ivan","Petrov");
//     console.log(firstChild);
//     console.log(firstChild.getLastName());
//     console.log(firstChild.lastName);
    

// ПРАКТИКА

class People {
        constructor(name, surname) {
            this.name = name;
            this.surname = surname;
        }
        getFullName () {
            return `Имя:${this.name}, Фамилия:${this.surname}`;
        }
    }
    const firstPeople = new People ("Max", "Petrov");
    console.log(firstPeople.getFullName());

    class Worker extends People {
        constructor (name, surname, rate, day) {
        super (name, surname);  
        this.rate = rate;
        this.day = day;  
        }
        getSalary() {
            return `${this.getFullName()} зарплата:${this.rate*this.day}руб.`;
        }
    }
    const firstWorker = new Worker ("Ivan", "Ivanov", 10, 5);
    console.log(firstWorker.getSalary());
    const secondWorker = new Worker ("Petr", "Petrovich", 100, 5);
    console.log(secondWorker.getSalary());