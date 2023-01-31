// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// - створити функцію яка приймає масив та виводить кожен його елемент

// let mas = [11, 22, 33];
//
// function printer(arrey) {
//     for (const arreyEl of arrey) {
//         console.log(arreyEl);
//     }
// }
//
// printer(mas);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// let paragraf = function (text) {
//     document.write(`<p>${text}</p>`);
// }
//
// paragraf('do you have some?');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let fun = function (li1, li2, li3) {
//     document.write(`<div>
//     <ul>
//     <li>${li1}</li>
//     <li>${li2}</li>
//     <li>${li3}</li>
// </ul>
// </div>`)
// };
//
// fun('hi', 'my', 'name');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//


// let fun2 = function (text, number) {
//     document.write(`<ul>`);
//     let i = 1;
//     while (i <= number) {
//         document.write(`<li>${text}</li>`);
//         i++;
//     }
//     document.write(`</ul>`);
// };
//
// fun2('foo', 2);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let array = [123, 222, 'rrr', false, 'abc'];
//
// let list = function (a) {
//         document.write(`<ol>`);
//              let i = 0;
//              while (i < a.length) {
//                  document.write(`<li>${a[i]}</li>`);
//                  i++;
//              }
//          document.write(`</ol>`);
// };
//
// list(array);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let array = [
//     {
//         id: 1,
//         name: 'Vova',
//         age: 10
//     },
//     {
//         id: 1,
//         name: 'Ann',
//         age: 10
//     },
//     {
//         id: 1,
//         name: 'Ed',
//         age: 10
//     }
// ];
//
// let printer = function (arrey) {
//     for (const arreyEl of arrey) {
//         document.write(`
//         <div>
//             <h3>id - ${arreyEl.id} name - ${arreyEl.name} </h3>
//             <h4>age - ${arreyEl.age}</h4>
//         </div>
//         `)
//     }
// };
//
// printer(array);

// - створити функцію яка повертає найменьше число з масиву

// let num = [6, 2, 5, -1, 0];
//
// let foo = function (arr) {
//     let min = arr[0];
//     for (const arrElement of arr) {
//         if (arrElement < min) {
//             min = arrElement;
//         }
//     }
//     return min;
// };
//
// console.log(foo(num));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let array = [1, 2, 10];
//
// let suma = function (array) {
//     let sum = 0;
//     for (const arrayElement of array) {
//         sum = sum + arrayElement;
//     }
//     return sum;
// };
//
// console.log(suma(array));

