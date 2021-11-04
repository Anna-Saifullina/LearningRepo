// 1. Используя метод map() напишите код, который получает из массива строк новый массив, содержащий их длины.

// let vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
// let vegetableLength = vegetables.map(el => el.length);

// console.log(vegetableLength);

// 2. Имеется массив простых чисел: numbers = [2, 3, 5, 7, 11, 13, 17, 19]. Использую метод reduce() напишите функцию currentSums(numbers), которая возвращает новый массив из такого же числа элементов, в котором на каждой позиции будет находиться сумма элементов массива numbers до этой позиции включительно.

// let numbers = [2, 3, 5, 7, 11, 13, 17];

// let currentSums = (numbers) => {
// let newNumbers = [];
// numbers.reduce ((sum,current) => {
// // console.log(sum, current);
// newNumbers.push ( sum + current);
// return sum + current;

// }, 0);
// console.log(newNumbers);
// };
// currentSums (numbers);

// 3. Напишите код, который получает из массива чисел новый массив, содержащий пары чисел, которые в сумме должны быть равны семи: (0:7), (1:6) и т.д.

// let arr = [0, 1, 2, 3, 4, 5, 6, 7];
// function sumSeven (arr) {
//  let sumSevenArr = [];
// for (let i = 0; i < arr.length/2; i += 1)  {
// for (let j = 0; j < arr.length; j+=1) {
// if (arr [i] + arr [j] === 7) {
//    sumSevenArr.push("("+arr[i] + ':' + arr[j]+")")
// }
// }
// };
// return sumSevenArr;
// }
// console.log(sumSeven (arr));

//4. Перед вами переменная, содержащая строку. Напишите код, создащий массив, который будет состоять из первых букв слов строки str.

// var str = "Каждый охотник желает знать, где сидит фазан.";
// function foo(str) {
//   let newStr = "";
//   newStr = str[0];
//   for (let i = 0; i < str.length; i += 1) {
//     if (str[i] === " ") {
//       newStr += str[i + 1];
//       i += 1;
//     }
//   }
//   return newStr.split("");
// }
// console.log(foo(str));
// [К,о,ж,з,г,с,ф]

//5. Перед вами переменная, содержащая строку. Напишите код, создащий массив, который будет состоять из строк, состоящих из предыдущего, текущего и следующего символа строки str.
// var str = "JavaScript";
// let arr = str.split('');
// function foo (arr) {
// let newArr = [];
// for (let i = 0; i < arr.length; i += 1) {
// if (i === 0) {
// newArr.push(arr [i] + arr [i+1]);
// } else if (i > 0 && i <=  (arr.length-2)) {
//     newArr.push(arr[i-1] + arr[i] + arr[i+1])
// }
// else if (i = (arr.length-1)) {
// newArr.push(arr [i-1] + arr [i])
// }
// }
// return newArr;
// }
// console.log(foo(arr));

// 6.Напишите код, преобразующий массив цифр, которые располагаются неупорядоченно, в массив цифр расположенных по убыванию их значений.

// var numerics = [5, 7, 2, 9, 3, 1, 8];
// let foo = (numerics) => {
// console.log(numerics.sort((a,b) => b - a));
// }

// foo(numerics); // [9,8,7,5,3,2,1]

// 7. Напишите код, объединяющий три массива цифр, и располагающий цифры, в полученном массиве, в порядке убывания их значений через пробел.

// var a = [1,2,3];
// var b = [4,5,6];
// let c = [7,8,9];
// function getArr(a, b, c) {
//     let newArr = a.concat(b,c);
//     newArr.sort((a,b) => b -a);
//     newArr = newArr.join(" ");
//     newArr = newArr.split("");
// console.log(newArr);
// }

// getArr(a, b, c); // [9 8 7 6 5 4 3 2 1]

//8.  Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным. Показать решение.

// let arr =[[1, 2, 3], [4, 5],[6]];
// let sumArr = 0;
// for (let i = 0; i < arr.length; i +=1) {
//         for (let j = 0; j < arr[i].length; j += 1) {
//              sumArr += arr[i][j];
//     }
// }
// console.log(sumArr);

//9. Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.
// let arr = [[[1, 2],[3, 4]],[[5, 6],[7, 8]]];
// let sumArr = 0;
// for (let i = 0; i < arr.length; i += 1) {
//   for (let j = 0; j < arr[i].length; j += 1) {
//     for (let n = 0; n < arr[j].length; n += 1) {
//       sumArr += arr[i][j][n];
//     }
//   }
// }
// console.log(sumArr);

// 10. Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.
// let arr = [5, 7, 2, 9, 3, 1, 8];
// let newArr = [];
// for (let i = (arr.length -1); i >= 0; i-= 1) {
//     newArr.push(arr[i]);
// }
// console.log(newArr);

// 11. Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.
// let arr = [1,2,5, 7, 2, 9, 3, 1, 8];
// let sum = 0;
// for (let i = 0; i < arr.length; i += 1) {
//     sum += arr[i];
// if (sum > 10) {break}
// console.log(i);
// }


// 13. Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив, 
// а вторым - сколько элементов должно быть в массиве. Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].
// function arrayFill(str,n) {
//     let newStr = str.repeat(n).split('');

// return newStr;
// }
// console.log(arrayFill('x',5));
