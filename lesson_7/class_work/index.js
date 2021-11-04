// const arr1 = new Array(1,2,3,4);
// console.log(arr1.length);

// const arr2 = new Array(4);
// console.log(arr2.length);

// const arr3 = [1,2,3,4,5];
// console.log(arr3);
// arr3 [0] = 10;
// console.log(arr3);

// const data = [
//     {
//         name: "Alex",
//         age: "18",
//     },
//     {
//         name: "Ivan",
//         age: "20",
//     },
//     {
//         name: "Max",
//         age: "22",
//     },
// ]
// console.log(data[0].name);

// const arr = [];
// console.log(arr);
// arr[0] = 'ноль';
// console.log(arr);
// arr[10] = 'десять';
// console.log(arr);

// const arr = [1,2,3,4,5,6,7,8];

// console.log(arr);
// arr.length = 2;
// console.log(arr);

// const arr = [];
// arr.push(1);
// arr.push(10);
// console.log(arr);

// const data = [{title: "First", writer: "Alex"}, 
// {title: "Second", writer: "Ivan"},
// {title: "Third", writer: "Alex"},
// {title: "Four", writer: "Max"},
// {title: "Five", writer: "Max"},
// {title: "Six", writer: "Ivan"},
// {title: "Seven", writer: "Alex"},]
// console.log(data);
// const filterData = data.filter ((el) => el.writer ==="Alex");
// console.log(filterData);

// const newData = data.map((el, i) => {
//     el.index = i;
//     return el;
// });
// console.log(newData);

// const newData = data.map((el) => el.title);
// console.log(newData);

// const testForEach = data.forEach ((el) => console.log(el.title));
// console.log(testForEach);


// const data = [
//     { value: 2, month: "январь"},
//     { value: 3, month: "февраль"},
//     { value: 5, month: "март"},

// ];
// const valueSum = data.reduce((acum, curValue) => acum + curValue.value, 0);
// console.log(valueSum);

// const data = [1,2,3];
// const valueSum = data.reduce((acum, curValue) => acum + curValue);
// console.log(valueSum);

// ПРАКТИКА
// 1. Написать функцию, которая будет принимать массив чисел, содержащий целые положительные и целые отрицательные числа, в качестве результата возвращать сумму четных 
// положительных элементов переданного массива.
// let arr = [1,-2,3,-5,6];
// const posSum = (arr) => 
// arr
// .filter((el) => el > 0 && el %2 === 0)
// .reduce((acum, value) => acum + value);
// console.log(posSum(arr));

// 2. Написать функцию, которая будет принимать массив чисел, и будет убирать повторяющиеся значения из переданного массива, 
// в качестве результата возвращать новый массив с уникальными значениями из исходного.


 const arr = [1,3,2,2,3,4,1,4,5,5];
//  ПЕРВЫЙ ВАРИАНТ
//  const uniqArr = (arr) => {
// const result = [];
// for (let i = 0; i < arr.length; i +=1) {
//     if (!result.includes(arr[i])) {
//         result.push(arr[i]);
//     }
// }
// return result;
//  };
//  console.log(uniqArr(arr));

 //  ВТОРОЙ ВАРИАНТ
//  const uniqArr = (arr) => {
//     const result = [];
//     arr.forEach((el) => {
//         if (!result.includes(el)) {
//             result.push(el);
//     }
// });
// return result;
//  };
// console.log(uniqArr(arr));

// 3. Написать функцию  которая будет принимать два массива, и будет сравнивать их, если они идентичны (элементы совпадают по значению и по индексу) 
// то функция возвращает true, в противном случае false.


// const arr1 = [1,2,3,4];
// const arr2 = [1,25,3,4];

// const isEqualArr = (arr1, arr2) => {
//     if (arr1.length !== arr2.length) {
//         return false;
//     }
//     return !arr1.map((el,i) =>el === arr2[i]).includes(false);
// };
// console.log(isEqualArr(arr1, arr2));
