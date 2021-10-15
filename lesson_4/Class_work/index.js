// const value = -5;

// if (value>0) {
//     console.log("true");
// } else {
//     console.log("false");
// }

// console.log("start");

// const value = -5;
// if (value === 0) {
//   console.log(0, "=value");
// } else if (value > 1) {
//   console.log(value, "> 1");
// } else if (value < -1) {
//   console.log(value, "< -1");
// } else {
//   console.log(value);
// }

// console.log("finish");


// const age =12;
// const result = age >= 18 ? "Доступ разрешен" : "Доступ запрещен" ;
// console.log(result);

// switch ("Alex") {
//     case "Ivan":
//         console.log("IVAN");
//         break;
//     case "Alex":
//         console.log("ALEX");
//         break;
//     case "Max":
//         console.log("MAX");
//         break;
//     default:
//         console.log("Имени нет в списке");
// }

// ПРАКТИКА

// const a = 1;
// const b = 2;
// const c = 3;

// if(a>b) {
//     a>c ? console.log(a): console.log(c);
// } else {
//     b>c ? console.log(b) : console.log(c);
// }

// const userRole = "user";
// switch (userRole) {
//         case "user":
//             console.log("user info");
//             break;
//         case "admin":
//             console.log("admin info");
//             break;
//         case "manager":
//             console.log("manager info");
//             break;
//         default:
//             console.log("no info");
//     }

// Циклы

// console.log("start");
// while (true) {
//     console.log("loop");
// }

// console.log("end");

// let i=0;
// while (i < 10) {
// console.log(i);
// i += 1;
// }
// console.log("end");

// do {
//     console.log("work");
// } while (i) ;
//     console.log("end");

// ПРАКТИКА

let M = 100;
let N = 26;

let days = 0;

while (M >= N) {
    M/=2;
    days +=1;
}
console.log(days);