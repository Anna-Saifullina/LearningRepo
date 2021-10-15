/* РАБОТА С if-else*/

/*  1.Если переменная a равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3*/
// let a = -3;
// if (a==0) {
//   console.log("верно");
// } else {
//   console.log("неверно");
// }

/* 2.Если переменная a больше нуля, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.*/
// let a = -3;
// if (a>0) {
//   console.log("верно");
// } else {
//   console.log("неверно");
// }

/* 3.Если переменная a меньше нуля, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.*/
// let a = -3;
// if (a<0) {
//   console.log("верно");
// } else {
//   console.log("неверно");
// }

/* 4.Если переменная a больше или равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.*/
// let a = 0;
// if (a>=0) {
//   console.log("верно");
// } else {
//   console.log("неверно");
// }

/* 5.Если переменная a меньше или равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.*/
// let a = 1;
// if (a<=0) {
//   console.log("верно");
// } else {
//   console.log("неверно");
// }

/* 6.Если переменная a не равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.*/
// let a = 0;
// if (a!=0) {
//   console.log("верно");
// } else {
//   console.log("неверно");
// }

/* 7.Если переменная a равна 'test', то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 'test', 'тест', 3. */
// let a = "test";
// if (a=="test") {
//   console.log("верно");
// } else {
//   console.log("неверно");
// }

/* 8.Если переменная a равна '1' и по значению и по типу, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном '1', 1, 3.*/
// let a = 3;
// if (a==="1") {
//   console.log("верно");
// } else {
//   console.log("неверно");
// }

/* РАБОТА С ЛОГИЧЕСКИМИ ПЕРЕМЕННЫМИ */

/* 1.Если переменная test равна true, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при test, равном true, false. Напишите два варианта скрипта - с короткой записью и с длинной.*/
// let test = false;
// if (test == 1) {
//   console.log("верно");
// } else {
//   console.log("неверно");
// }

// let result = test == 1 ? console.log("верно"): console.log("неверно");

/* 2.Если переменная test не равна true, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при test, равном true, false. Напишите два варианта скрипта - с короткой записью и с длинной.*/
// let test = false;
// if (test != 1) {
//   console.log("верно");
// } else {
//   console.log("неверно");
// }

// let result = test != 1 ? console.log("верно"): console.log("неверно");

/* РАБОТА C && (И) И || (ИЛИ) */

/* 1.Если переменная a больше нуля и меньше 5-ти, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 5, 0, -3, 2.*/
// let a = 2;
// if (a>0 && a<5) {
//   console.log("верно");
// } else {
//   console.log("неверно");
// }

/* 2.Если переменная a равна нулю или равна двум, то прибавьте к ней 7, иначе поделите ее на 10. Выведите новое значение переменной на экран. Проверьте работу скрипта при a, равном 5, 0, -3, 2.*/
// let a = 2;
// if (a==0 || a==2) {
//   console.log(a+7);
// } else {
//   console.log(a/10);
// }

/* 3.Если переменная a равна или меньше 1, а переменная b больше или равна 3, то выведите сумму этих переменных, иначе выведите их разность (результат вычитания). Проверьте работу скрипта при a и b, равном 1 и 3, 0 и 6, 3 и 5.*/
// let a = 3;
// let b = 5;
// if (a <= 1 && b >= 3) {
//   console.log(a + b);
// } else {
//   console.log(a - b);
// }

/* 4.Если переменная a больше 2-х и меньше 11-ти, или переменная b больше или равна 6-ти и меньше 14-ти, то выведите 'Верно', в противном случае выведите 'Неверно'.*/
// let a = 0;
// let b = 6;
// if (a > 2 && a < 11 || b >= 6 && b < 14) {
//   console.log("верно");
// } else {
//   console.log("неверно");
// }

/* НА SWITCH-CASE */

/* Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1', то в переменную result запишем 'зима', если имеет значение '2' – 'весна' и так далее. Решите задачу через switch-case.*/
// let num = 4;
// switch (num) {
//   case 1:
//     result = "зима";
//     console.log(result);
//     break;
//   case 2:
//     result = "весна";
//     console.log(result);
//     break;
//   case 3:
//     result = "лето";
//     console.log(result);
//     break;
//   case 4:
//     result = "осень";
//     console.log(result);
//     break;
// }

/* ОБЩИЕ ЗАДАЧИ */

/* 1.В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).*/

// let day = 5;                         //при условии, что day - число из интервала от 1 до 31
// if (day >= 1 && day <= 10) {
//   console.log("1ая декада месяца");
// } else if (day > 10 && day <= 20) {
//   console.log("2я декада месяца");
// } else {
//   console.log("3я декада месяца");
// }

/* 2.В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).*/

// let month = 9;                           //при условии, что month - число из интервала от 1 до 12
// if (month >= 3 && month <= 5) {
//   console.log("весна");
// } else if (month >= 6 && month <= 8) {
//   console.log("лето");
// } else if (month >= 9 && month <= 11) {
//   console.log("осень");
// }  else {
//   console.log("зима");
// }

/* 3.Дана строка, состоящая из символов, например, 'abcde'. Проверьте, что первым символом этой строки является буква 'a'. Если это так - выведите 'да', в противном случае выведите 'нет'.*/
// let str = "bcde";
// let result = str[0] == "a"? console.log("да"): console.log("нет");

/* 4.Дана строка с цифрами, например, '12345'. Проверьте, что первым символом этой строки является цифра 1, 2 или 3. Если это так - выведите 'да', в противном случае выведите 'нет'.*/
// let str = "12345";
// // let result = str[0] == (1 || 2 || 3) ? console.log("да"): console.log("нет");
// if (str[0] <= 3) {
//   console.log("да");
// } else {console.log("нет")};

/* 5.Дана строка из 3-х цифр. Найдите сумму этих цифр. То есть сложите как числа первый символ строки, второй и третий.*/
// let str ="153"
// console.log(+str[0] + +str[1] + +str[2]);

/* 6.Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.*/
// let str = "735456";
// if (+str[0] + +str[1] + +str[2] == +str[3] + +str[4] + +str[5]) {
//   console.log("да");
// } else {
//   console.log("нет");
// }

/* ЦИКЛЫ WHILE И FOR */

/* 1.Выведите столбец чисел от 1 до 100.*/
// let num = 1;
// while (num <= 100) {
//   console.log(num);
//   num += 1;
// }

// for (num; num <= 100; num += 1) {
// console.log(num);
// }

/* 2.Выведите столбец чисел от 11 до 33. */
// let num = 1;
// while (num < 33) {
//   num += 1;
//   if (num >= 11) {
//   console.log(num);}
// }

// for (num; num < 33; num += 1) {
//   if (num >= 11) {
//     console.log(num);}
//   }

/* 3.Выведите столбец четных чисел в промежутке от 0 до 100.*/
// let a = 0;
// while (a < 100) {
//   a += 1;
//   if (a%2 == 0) {
//     console.log(a);
//   }
// }

// for (a; a <= 100; a += 1) {
//   if (a%2 == 0) {
//   console.log(a)}
// }

/* 4.С помощью цикла найдите сумму чисел от 1 до 100.*/
// let a = 1;
// let sum = 0;
// while (a <= 100) {
//   sum += a;
//   a += 1;
// } console.log(sum)

// for (a; a <= 100; a += 1)
// { sum += a;
// } console.log(sum)

/* РАБОТА С FOR ДЛЯ МАССИВОВ*/
/* 1.Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран. */
//  let arr = [1,2,3,4,5];
// for (let a = 0; a < arr.length; a += 1) {
//   console.log(arr[a]);
// }

/* 2. Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for найдите сумму элементов этого массива. Запишите ее в переменную result.*/
// let arr = [1, 2, 3, 4, 5];
// let result = 0;
// for (let a = 0; a < arr.length; a += 1) {
//   result +=  +arr [a];
// } 
// console.log(result);

/* ЗАДАЧИ ОБЩИЕ */
/* 1.Дан массив с элементами 2, 5, 9, 15, 0, 4. С помощью цикла for и оператора if выведите на экран столбец тех элементов массива, которые больше 3-х, но меньше 10.*/
// let arr = [2,5,9,15,0,4];
// for (let a = 0; a < arr.length; a += 1) {
//   if (+arr [a] > 3 && +arr [a] < 10) {
//     console.log(arr[a]);
//   }
// }

/* 2.Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива. */
// let arr = [2,-5,9,-15,3,-4];
// let sum = 0;
// for (let a = 0; a < arr.length; a += 1) {
//   if (+arr [a] > 0 ) {
//     sum += +arr[a];
//   }
// } console.log(sum);

/* 3.Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. С помощью цикла for и оператора if проверьте есть ли в массиве элемент со значением, равным 4. Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо.*/
// let arr = [1,2,5,9,4,13,4,10];
// for (let a = 0; a < arr.length; a += 1) {
//   if (+arr[a] == 4) {
//     console.log("Есть");
//    break; }
//   }

  /* 4.Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.*/
  // let arr = [10,20,30,50,235,3000];
//   for (let i = 0; i < arr.length; i += 1) {
//     let numb = String (arr[i]);
//     if (numb [0] == "1" || numb [0] == "2" || numb [0] == "5") {
//      console.log(arr[i]); 
//     }
// }

/* 5.Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'.*/
//  let arr = [1,2,3,4,5,6,7,8,9];
//     for (let i = 0; i < arr.length; i += 1) {
//    console.log("-" + arr[i]);
//  }

 /* 6. Составьте массив дней недели. С помощью цикла for выведите все дни недели, а выходные дни выведите жирным.*/