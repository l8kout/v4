 // Всі функції повинні бути описані стрілочним типом!!!!
 //  - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
//
//  let a = prompt('введи число');
//  console.log(a);
// let b = prompt('введи число');
//  console.log(b);
// let c = prompt('введи число');
//  console.log(c);
//
//  if (a < b && a < c) {
//   console.log('найменше число' + a);
//      } else if (b < a && b < c) {
//   console.log('найменше число' + b);
//      } else if (c < a && c < b) {
//   console.log('найменше число' + c);
//  } else {
//   console.log('спробуй ще');
//  }


//  let minNum = (a, b, c) => {
//     if (a < b && a < c) {
//         return a;
//     } else if (b < a && b < c) {
//         return b;
//     } else {
//         return c;
//     }
// };
//
// console.log(minNum(2, 110, 1));

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// let maxNum = (a, b, c) => {
//     if (a > b && a > c) {
//         return a;
//     } else if (b > a && b > c) {
//         return b;
//     } else {
//         return c;
//     }
// };
//
// console.log(maxNum(-1, -110, 1));

// - створити функцію яка повертає найбільше число з масиву

// let arr = [55, -2, 222, 22, 55];
//
// let maxNumArr = (array) => {
//     let first = array[0];
//     for (const arrEl of array) {
//         if (arrEl > first) {
//             first = arrEl;
//         }
//     }
//     console.log('найбільше число масиву ',first);
// }
//
// maxNumArr(arr);

// - створити функцію яка повертає найменьше число з масиву

// let array = [55, -2, -222, 22, 55];
//
// let minNumArr = (array) => {
//     let min = array[0];
//     for (const arrEl of array) {
//         if (arrEl < min) {
//             min = arrEl;
//         }
//     }
//     console.log('найменше число масиву ', min);
// };
//
// minNumArr(array);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let array = [1, 1, 1, -6];
//
// let sum = (array) => {
//     let sum = 0;
//     for (const arrEl of array) {
//         sum = arrEl + sum;
//     }
//     return sum;
// }
//
// console.log(sum(array));
//
// - Дано натуральное число n. Выведите все числа от 1 до n.

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
//
//
// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
//
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]