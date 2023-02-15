//  1 - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
//
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

// 2 - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
//
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

// 3 - створити функцію яка повертає найбільше число з масиву
//
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

// 4 - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let array = [10, 20, 2, 1, 2];
//
// function foo(arr) {
//     let sum = 0;
//     for (const arrEl of arr) {
//         sum = arrEl + sum;
//     }
//     return sum / arr.length;
// }
//
// console.log(foo(array));

// 5 - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
//
// function foo(arr) {
//     let a = arr[0];
//     let b = arr[0];
//     for (const arrEl of arr) {
//         if (a > arrEl) {
//             a = arrEl;
//         }
//         if (b < arrEl) {
//             b = arrEl;
//             document.write(`найбільше число - ${b}`);
//         }
//     }
//     return console.log('найменше чило - ',a);
// }
//
// foo([10, 3, -333, 2, 111]);

// 6 - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
//
// let array = [];
//
// function foo() {
//     let arr = [];
//     for (let i = 0; i < 5; i++) {
//         arr.push(Math.round(Math.random() * 100));
//     }
//     return arr;
// }
//
// console.log(foo(array));

// 7 - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// function foo(num, limit) {
//     let arr = [];
//     for (let i = 0; i < num; i++) {
//         arr.push(Math.round(Math.random() * limit));
//     }
//     return arr;
// }
//
// console.log(foo(5, 10));

// 8 - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let array = [1, 2, 3];
//
// function reverse(arr) {
//     let x = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         const arrElement = arr[i];
//         x.push(arrElement);
//     }
//     return x;
// }
//
// console.log(reverse(array));

// 9 - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
// function foo(a,...x) {
//     if (x) {
//         console.log(a + x);
//     } else {
//         console.log(a);
//     }
// }
//
// foo(123, 'HI!');

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
//

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
// let asd = [{name: 'Dima', age: 13}, {model: 'Camry'}];
//
// function index(arr) {
//     let x = [];
//     for (const arrEl of arr) {
//         for (const arrKey in arrEl) {
//             x.push(arrKey)
//         }
//     }
//
//     return x;
// }
//
// console.log(index(asd));

//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
//
// let array = [{name: 'Dima', age: 13}, {model: 'Camry'}];
//
// function obj(arr) {
//     let x = [];
//     for (const arrElement of arr) {
//         for (const arrElementElement in arrElement) {
//             x.push(arrElement[arrElementElement]);
//
//         }
//     }
//     return x
// }
//
// console.log(obj(array));
