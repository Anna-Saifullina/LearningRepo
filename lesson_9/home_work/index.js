/*1. Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя), surname (фамилия), rate (ставка за день работы), days (количество отработанных дней). 
Также класс должен иметь метод getSalary(), который будет выводить зарплату работника. Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days. 
И метод getFullName() - имя и фамиля работника.*/

class Worker {
  constructor(name, surname, rate, days) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
  }
  getSalary() {
    return this.rate * this.days;
  }
  getFullName() {
    return `${this.name} ${this.surname}`;
  }
}

const worker = new Worker("Иван", "Иванов", 10, 31);
console.log(worker.name);
console.log(worker.surname);
console.log(worker.getFullName());
console.log(worker.rate);
console.log(worker.days);
console.log(worker.getSalary());

/*2. Напишите новый класс Boss, этот класс наследуется от класса Worker и прошлого задания. Появляется новые свойство: workers - количество работников. 
И зарплата считается по другому: произведение (умножение) ставки rate на количество отработанных дней и на количество работников.*/

class Boss extends Worker {
  constructor(name, surname, rate, days, workers) {
    super(name, surname, rate, days);
    this.workers = workers;
  }
  getSalary() {
    return this.rate * this.days * this.workers;
  }
}
const boss = new Boss("Максим", "Максимов", 10, 31, 10);
console.log(boss.name);
console.log(boss.surname);
console.log(boss.getFullName());
console.log(boss.rate);
console.log(boss.days);
console.log(boss.workers);
console.log(boss.getSalary());

/*3.Модифицируйте класс Worker из предыдущей задачи следующим образом: сделайте все его свойства приватными, а для их чтения сделайте методы-геттеры.*/

class Worker {
  constructor(name, surname, rate, days) {
    this._name = name;
    this._surname = surname;
    this._rate = rate;
    this._days = days;
  }
  getName() {
    return this._name;
  }
  getSurname() {
    return this._surname;
  }
  getRate() {
    return this._rate;
  }
  getDays() {
    return this._days;
  }
  getSalary() {
    return this._rate * this._days;
  }
}
const worker = new Worker("Иван", "Иванов", 10, 31);

console.log(worker.getName());
console.log(worker.getSurname());
console.log(worker.getRate());
console.log(worker.getDays());
console.log(worker.getSalary());

/*4.Модифицируйте класс Worker из предыдущей задачи следующим образом: для свойства rate и для свойства days сделайте еще и методы-сеттеры.*/
class Worker {
  constructor(name, surname, rate, days) {
    this._name = name;
    this._surname = surname;
    this._rate = rate;
    this._days = days;
  }
  getName() {
    return this._name;
  }
  getSurname() {
    return this._surname;
  }
  getRate() {
    return this._rate;
  }
  setRate(newRate) {
    this._rate = newRate;
  }
  getDays() {
    return this._days;
  }
  setDays(newDays) {
    this._days = newDays;
  }
  getSalary() {
    return this._rate * this._days;
  }
}
const worker = new Worker("Иван", "Иванов", 10, 31);

console.log(worker.getRate());
console.log(worker.getDays());
console.log(worker.getSalary());

worker.setRate(20);
worker.setDays(10);
console.log(worker.getSalary());

/*5. Реализуйте класс MyString, который будет иметь следующие методы: метод reverse(), который параметром принимает строку, а возвращает ее в перевернутом виде, 
метод ucFirst(), который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной и метод ucWords, который принимает строку 
и делает заглавной первую букву каждого слова этой строки.*/

class MyString {
  constructor(str) {
    this.str = str;
  }
  reverse() {
    return this.str.split("").reverse().join("");
  }
  ucFirst() {
    let newStr = "";
    for (let i = 0; i < this.str.length; i += 1) {
      if (i == 0) {
        newStr += this.str.charAt(i).toUpperCase();
      } else {
        newStr += this.str[i];
      }
    }
    return newStr;
  }
  ucWords() {
    let newStr = "";
    newStr = this.str[0].toUpperCase();
    for (let i = 1; i < this.str.length; i += 1) {
      if (this.str[i] === " ") {
        newStr += " " + this.str[i + 1].toUpperCase();
        i += 1;
      } else {
        newStr += this.str[i];
      }
    }
    return newStr;
  }
}

const str = new MyString("abcde");
const strTwo = new MyString("abcde abcde abcde");
console.log(str.reverse());
console.log(str.ucFirst());
console.log(strTwo.ucWords());

/*6. Реализуйте класс Validator, который будет проверять строки. К примеру, у него будет метод isEmail параметром принимает строку и проверяет, 
является ли она корректным емейлом или нет. Если является - возвращает true, если не является - то false. Кроме того, класс будет иметь следующие методы: 
метод isDomain для проверки домена, метод isDate для проверки даты и метод isPhone для проверки телефона.*/

class Validator {
  constructor(str) {
    this.str = str;
  }
  setIsEmail(string) {
    this.str = string;
    if (string.includes("@mail.ru" || "@gmail.com" || "yandex.ru", 1)) {
      return true;
    } else {
      return false;
    }
  }
  setIsDomain(string) {
    this.str = string;
    if (string.includes(".net", 1)) {
      return true;
    } else {
      return false;
    }
  }
  setIsDate(string) {
    this.str = string;
    if (string[2] == "." && string[5] == "." && string.length == 10) {
      return true;
    } else {
      return false;
    }
  }
  setIsPhone(string) {
    this.str = string;
    if (/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(string)) {
      return true;
    } else {
      return false;
    }
  }
}

const validator = new Validator();
console.log(validator.setIsEmail("phphtml@mail.ru"));
console.log(validator.setIsDomain("phphtml.net"));
console.log(validator.setIsDate("10.05.2020"));
console.log(validator.setIsPhone("+77528176892"));

/*Реализуйте класс Student (Студент), который будет наследовать от класса User, подобно тому, как это сделано в теоретической части урока. Этот класс должен иметь 
следующие свойства: name (имя, наследуется от User), surname (фамилия, наследуется от User), year (год поступления в вуз). Класс должен иметь метод getFullName() 
(наследуется от User), с помощью которого можно вывести одновременно имя и фамилию студента. Также класс должен иметь метод getCourse(), который будет выводить 
текущий курс студента (от 1 до 5). Курс вычисляется так: нужно от текущего года отнять год поступления в вуз. Текущий год получите самостоятельно.*/

class User {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  getFullName() {
    return this.name + " " + this.surname;
  }
}

class Student extends User {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }
  getCourse() {
    const yearNow = new Date().getFullYear();
    if (yearNow - this.year >= 1 && yearNow - this.year <= 5) {
      return yearNow - this.year;
    } else {
      return "ошибка";
    }
  }
}
const student = new Student("Иван", "Иванов", 2018);

console.log(student.getFullName());
console.log(student.getCourse());
