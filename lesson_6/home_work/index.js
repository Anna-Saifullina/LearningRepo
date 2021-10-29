// 1. Напишите функцию stringToarray(str), которая преобразует строку в массив слов.

// var str = 'Каждый охотник желает знать';
// function stringToarray(str) {
//    return str.split (" ");
// };
// var arr = stringToarray(str);
// console.log(arr);

// 2. Удаление указанного количества символов из строки

// Напишите функцию delete_characters(str, length), которая возвращает подстроку, состоящую из указанного количества символов.

// var str = 'Каждый охотник желает знать';
// function delete_characters(str, length) {
//  console.log (str.substr (str,length));

// };
// delete_characters (str,10);

// 3. Вставить тире между словами строки

// Напишите функцию insert_dash(str), которая принимает строку str в качестве аргумента и вставляет тире (-) между словами. При этом все символы строки необходимо перевести в верхний регистр.

// var str = "HTML JavaScript PHP";

// function insert_dash(str) {
// let newStr = "";
//     for (let i = 0; i < str.length; i +=1) {
//         if (str[i]===" ") {
//             newStr += "-";
//         } else {
//             newStr += str[i];
//         }
//            };
//    return newStr.toUpperCase();
//     };
// console.log(insert_dash(str));

// 4. Сделать первую букву строки прописной

// Напишите функцию, которая принимает строку в качестве аргумента и преобразует регистр первого символа строки из нижнего регистра в верхний.

// var str = "string not starting with capital";

// function cursive_letter(str) {
// let newStr = "";
// for (let i = 0; i < str.length; i +=1) {
//     if (i == 0) {
//       newStr += str.charAt(i).toUpperCase();
//     } else {
//         newStr += str[i];
//     };
// };
// return newStr;
// };
// console.log(cursive_letter(str));

// 5. Первая буква каждого слова заглавная

// Напишите функцию capitalize(str), которая возвращает строку, в которой каждое слово начинается с заглавной буквы.

// var str = "каждый охотник желает знать";
// function capitalize(str) {
//     let newStr = "";
//     newStr = str[0].toUpperCase();
//     for (let i = 1; i < str.length; i +=1) {
//         if (str[i]===" ") {
//             newStr += (" " + str[i+1].toUpperCase());
//             i += 1;
//         } else {
//             newStr += str[i];
//         };
//        };
//     return newStr;
// }
// console.log(capitalize(str));

// 6. Смена регистра символов строки
// Напишите функцию change_register(str), которая принимает в качестве аргумента строку и и заменяет регистр каждого символа на противоположный. Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должно быть «кАжДыЙ оХоТнИк».

// var str = "КаЖдЫй ОхОтНиК жЕлАеТ зНаТь";
// function change_register(str) {
//     let newStr ="";
// for (let i = 0; i < str.length; i +=1) {
//     if (str[i] > str[i].toUpperCase()) {
// newStr += str[i].toUpperCase();
//     } else {
//         newStr += str[i].toLowerCase();
//     }
// }
// return newStr;
// }
//  console.log(change_register(str));

// 7. Удалить все не буквенно-цифровые символы
// Напишите функцию remove_char(str), которая возвращает строку, очищенную от всех не буквенно-цифровых символов.

// var str = "every., -/ hunter #! wishes ;: {} to $ % ^ & * know";
// function remove_char(str) {
//     let newStr = str.replace(/[^a-zа-яё\s]/gi,"");
//     return newStr;
// };
// console.log(remove_char(str));

// 8. Нулевое заполнение строки
// Напишите функцию zeros(num, len), которая дополняет нулями до указаной длины числовое значение с дополнительным знаком «+» или « -« в зависимости от передаваемого аргумента.
// function zeros (num, len, sign) {
//     let newNum = (sign + num.toFixed(len));
//     return newNum;
// };
// console.log(zeros(7,5,"-"));

// 9. Сравнение строк без учёта регистра
// Напишите функцию comparison(str1, str2), которая сравнивает строки без учёта регистра символов.

// function comparison(str1, str2) {
//     let rezult = str1.localeCompare(str2,'ru',{sensitivity:'base'});
//    if (rezult == 0) {
//        console.log(str1, '=', str2);
//    } else if (rezult == -1) {
//     console.log(str1, '<', str2);
//    } else {
//     console.log(str1, '>', str2);
//    }
// };
// comparison ('абв', 'АБВб');

// 10. Поиск без учета регистра
// Напишите функцию insensitive_search(str1, str2), которая осуществляет поиск подстроки str2 в строкеstr1 без учёта регистра символов.

// function insensitive_search(str1, str2) {
//    let newStr1 = str1.toUpperCase();
//     let newStr2 = str2.toUpperCase();
//     console.log(newStr1.includes(newStr2));
//    };
// insensitive_search ('hello World','world');

// 11. ВерблюжийРегистр (CamelCase)
// Напишите функцию initCap(str), которая преобразует стиль написания составных слов строки в CamelCase, при котором несколько слов пишутся слитно без пробелов, при этом каждое слово внутри строки пишется с заглавной буквы.

// str = "hEllo woRld";
// function initCap(str) {
//   let newStr = "";
//   newStr = str[0].toUpperCase();
//   for (let i = 1; i < str.length; i += 1) {
//     if (str[i] === " ") {
//       newStr += str[i + 1].toUpperCase();
//       i += 1;
//     } else {
//       newStr += str[i].toLowerCase();
//     }
//   }
//   return newStr;
// }
// console.log(initCap(str));

// 12. Змеиный_регистр (snake_case)
// Напишите функцию initSnake(str), которая преобразует стиль написания составных слов строки из CamelCase в snake_case, при котором несколько слов разделяются символом подчеркивания (_), причём каждое слово пишется с маленькой буквы.
// str = "CamelCase";
// function initSnake(str) {
//   let newStr = "";
//   newStr = str[0].toLowerCase();
//   for (let i = 1; i < str.length; i += 1) {
//     if (str[i] === str[i].toUpperCase()) {
//       newStr += "_" + str[i].toLowerCase();
//     } else {
//       newStr += str[i].toLowerCase();
//     }
//   }
//   return newStr;
// }
// console.log(initSnake(str));

// 13. Повторить строку n раз
// Напишите функцию repeatStr(str, n), которая возвращает строку повторяемую определённое количество раз.

// function repeatStr(str, n) {
//     let newStr = str.repeat(n);
//     return newStr;
// };
// console.log(repeatStr("hello", 5));

// 14. Получить имя файла
// Напишите функцию path(pathname), которая возвращает имя файла (подстрока после последнего символа "\" ) из полного пути к файлу.

// var pathname = "/home/user/dir/file.txt";

// function path(pathname) {
//  return pathname.slice(pathname.lastIndexOf("/")+1);

// };
// console.log(path(pathname));

// 15. Заканчивается ли строка символами другой строки
// Создайте метод объекта String endsWith(), который сравнивает подстроку str1 с окончанием исходной строки str и определяет заканчивается ли строка символами подстроки.

// var str = "Каждый охотник желает знать";
// var str1 = "скрипт";
// var str2 = "знать";

// String.prototype.endsWith = function(substring) {
//   if (str1 === str.slice(str.lastIndexOf(" ")+1)) {
//       console.log("yes");
//   } else {
//       console.log("no");
//     }
// };
// String.prototype.endsWith (str);

// 16. Подстрока до/после указанного символа
// Напишите функцию getSubstr(str, char, pos), которая возвращает часть строки, расположенную после или до указанного символа char в зависимости от параметра pos.

// var str = 'Астрономия — Наука о небесных телах';
// function getSubstr(str, char, pos) {
//     return str.substring(char,pos);
// };
// console.log(getSubstr(str, "-", 7));

// 17. Вставить подстроку в указанную позицию строки
// Напишите функцию insert(str, substr, pos), которая вставляет подстроку substr в указанную позицию pos строки str. По умолчанию подстрока вставляется в начало строки.
// var str = "Каждый охотник желает знать";
// function insert(str, substr, pos = 0) {
//     let arr = str.split(" ");
//     arr.splice(pos, 0, substr);
//     return arr.join("");
// };
// console.log(insert(str, "где"));

// 18. Ограничить длину строки
// Напишите функцию limitStr(str, n, symb), которая обрезает строку, если она длиннее указанного количества символов n. Усеченная строка должна заканчиваться троеточием «...» (если не задан параметр symb) или заданным символом symb.
// var str = "Каждый охотник желает знать";
// function limitStr(str, n, symb = "...") {
//    let newStr = (str.substr(0, n) + symb);
//    return newStr;
// };
// console.log(limitStr(str, 12, "$"));

// 19. Количество вхождений символа в строке
// Напишите функцию count(str, stringsearch), которая возвращает количество символов stringsearch в строке str.

// var symb = "о";
// str = "Астрономия это наука о небесных объектах";
// function count(str, symb) {
//   let newStr = "";
//   for (let i = 0; i < str.length; i += 1) {
//     if (str[i] === symb) {
//       newStr += str[i];
//     }
//   }
//   return newStr.length;
// }
// console.log(count(str, symb));


// 21. Удалить лишние пробелы из строки
// Напишите функцию strip(str), которая удаляет все лишние пробелы из строки str.

var str = "    Max is a good      boy     "; 
function strip(str) {
    ...ваш код...
};

