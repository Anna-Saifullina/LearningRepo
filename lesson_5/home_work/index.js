// 1.Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.

// function calcSquare (a) {
// return a**2;
// }
// console.log(calcSquare (4));

// 2.Сделайте функцию, которая возвращает сумму двух чисел.

// function calcSum (a,b) {
//     return a+b;
//     }
//     console.log(calcSum (4,1));

// 3.Сделайте функцию, которая отнимает от первого числа второе и делит на третье.

// function calcDifference (a,b,c) {
//     console.log((a-b)/c);
// }
// calcDifference (7,3,2);

// 4.Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.

// function checkDayWeek (a) {
//     if (a === 1) {console.log("понедельник")}
//     else if (a === 2) {console.log("вторник")}
//     else if (a === 3) {console.log("среда")}
//     else if (a === 4) {console.log("четверг")}
//     else if (a === 5) {console.log("пятница")}
//     else if (a === 6) {console.log("суббота")}
//     else {console.log("воскресенье")}
// }
// checkDayWeek (3);

// 5.Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true, а если не равны - false.

// let getCheck = (a,b) => {
//     if (a === b) { return true}
//     else {return false}
// }
// console.log(getCheck  (4,2));

// 6.Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма больше 10 - пусть вернет true, а если нет то - false.

// let checkSum = (a,b) => {
//     if ((a+b)>10) { return true}
//     else {return false}
// }
// console.log(checkSum (4,7));

// 7.Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет. Если отрицательное - пусть функция вернет true, а если нет - false.

// function checkNegative (a) {
//     if (a > 0) { return true}
//     else {return false}
// }
// console.log(checkNegative(-2));

// 8.Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.

// function isNumberInRange (a) {
//     if (a > 0 && a < 10) {return true}
//     else {return false}
// }
// console.log(isNumberInRange (-5));

// 9.Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти. Для этого используйте вспомогательную функцию isNumberInRange из предыдущей задачи.

// let arr = [1,5,-7,12,43,9,3];
// function isNumberInRange (arr) {
//     for (let i = 0; i < arr.length; i += 1 ) {
//         if (arr[i] > 0 && arr[i] < 10) {console.log(arr[i])}
//     }
// }
// isNumberInRange (arr);

// 10.Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.

// function getDigitsSum (a) {
//       let digit = String (a);
//       let sum =0;
//     for (let i = 0; i < digit.length; i +=1) {
//         sum += +digit[i] }
//     return sum;
// }
// console.log(getDigitsSum (249));

// 11.Найдите все года от 1 до 2020, сумма цифр которых равна 13. Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.
// let a = 1;
// function getDigitsSum (a) {
//           let digit = String (a);
//           let sum =0;
//         for (let i = 0; i < digit.length; i +=1) {
//             sum += +digit[i] }
//         return sum;
//     }
// for (;a < 2020; a += 1) {
//     if (getDigitsSum (a)=== 13) {
//         console.log(a);
//     }
// }
   
// 12. Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.

// function isEven (a) {
//     if (a%2 == 0) {return true}
//     else {return false}
// }
// console.log(isEven (457));

// 13.Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function isEven (a) {
//     if (a % 2 == 0) {return true}
//     else {return false}
// }
// let newArr = [];
// for (let i = 0; i < arr.length; i += 1) {
//   if (isEven(arr[i])) {
//     newArr.push(arr[i]);
//   }
// }
// console.log(newArr);

// 14. Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число).
// let arr = [];
// function getDivisors (a) {
//     for (let i = 1; i <= a; i += 1) {
//     if (a % i == 0) {
//         arr.push(i);
//     }
//     } 
// }
// getDivisors (24);
// console.log(arr);

// 15.  Дан массив с числами. Выведите последовательно его элементы.

// 16. Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее).
// let num = 123456;
// function getDigitsSum (num) {
//           let digit = String (num);
//           let sum =0;
//         for (let i = 0; i < digit.length; i +=1) {
//             sum += +digit[i] }
//         return sum;
//     }

//     while (getDigitsSum (num) > 9) {
//         num = getDigitsSum (num)
//     }
//     console.log(getDigitsSum (num));