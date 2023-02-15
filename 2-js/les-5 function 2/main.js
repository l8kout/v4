// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!

// 1 - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// let foo = (a, b) => a * b;
//
// console.log(foo(2, 3));

// 2 - створити функцію яка обчислює та повертає площу кола з радіусом r
// let foo = (a) => 3.14 * (a * a);
//
// console.log(foo(4));

// 3 - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// let foo = (h, r) => 2 * 3.14 * r * h;
//
// console.log(foo(2, 22));

// 4 - створити функцію яка приймає масив та виводить кожен його елемент
// let foo = (arr) => {
//     for (const arrElement of arr) {
//         console.log(arrElement)
//     }
// }
//
// foo([1, 2, 3]);

// 5 - створити функцію яка створює параграф з текстом. Текст задати через аргумент
//
// let foo = (text) => {
//     document.write(`<p>${text}</p>`);
// };
//
// foo('hello!');

// 6 - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let foo = (text) => {
//     document.write(`<ul><li>${text}</li><li>${text}</li><li>${text}</li></ul>`);
// };
//
// foo('hi');

// 7 - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let foo = (text, num) => {
//     document.write(`<ul>`);
//     let i = 0;
//     while (i < num) {
//         document.write(`<li>${text}</li>`);
//         i++;
//     }
//     document.write(`</ul>`);
// };
//
// foo('wow', 5);

// 8 - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let foo = (arr) => {
//     document.write(`<ol>`);
//     for (const arrElement of arr) {
//         document.write(`<li>${arrElement}</li>`);
//     }
//     document.write(`</ol>`);
// }
//
// foo([12, true, 'raw']);

// 9 - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let array = [
//     {
//         id: 1,
//         name: 'Vova',
//         age: 10
//     },
//     {
//         id: 2,
//         name: 'Ann',
//         age: 10
//     },
//     {
//         id: 3,
//         name: 'Ed',
//         age: 10
//     }
// ];
//
// let foo = (arr) => {
//     for (const arrElement of arr) {
//         document.write(`<div>
//             <div> id - ${arrElement.id}, age - ${arrElement.age}, name - ${arrElement.name}
//          </div>`);
//     }
// };
//
// foo(array);

// 10 - створити функцію яка повертає найменьше число з масиву
// let foo = (array) => {
//     let a = array[0];
//     for (const aElement of array) {
//         if (a > aElement) {
//             a = aElement;
//         }
//     }
//     return a
// };
//
// console.log(foo([1, -2, 3]));

// 11 - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
//
// let sum = (arr) => {
//     let a = 0;
//     for (const arrElement of arr) {
//         a = a + arrElement;
//     }
//     return a;
// };
//
// console.log(sum([1, 2, 3]));

// 12 - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// let swap = (arr, index1, index2) => {
//     let a = arr[index1]
//     arr[index1] = arr[index2]
//     arr[index2] = a;
//     return arr;
// };
//
// console.log(swap([1, 2, 3], 2, 1));

// 13 - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
//
// let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
//     for (const item of currencyValues) {
//         if (item.currency === exchangeCurrency) {
//             return sumUAH / item.value;
//         }
//     }
// };
//
//console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD'));