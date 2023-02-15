// 1 - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
//
// function rectangleS(a, b) {
//     return a * b;
// }
// console.log(rectangleS(4, 4));

// 2 - створити функцію яка обчислює та повертає площу кола з радіусом r
//
// function circleS(b) {
//     return 3.14 * (b * b);
// }
// console.log(circleS(4));

// 3 - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//
// function cylinderS(h, r) {
//     return 2 * 3.14 * r * h;
// }
// console.log(cylinderS(2, 22));

// 4 - створити функцію яка приймає масив та виводить кожен його елемент
// let mas = [11, 22, 33];
//
// function printer(arrey) {
//     for (const arreyEl of arrey) {
//         console.log(arreyEl);
//     }
// }
//
// printer(mas);

// 5 - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function paragraf (text) {
//     document.write(`<p>${text}</p>`);
// }
//
// paragraf('hello!');

// 6 - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function foo(text) {
//     document.write(`<ul>`);
//     document.write(`<li> ${text} </li>`);
//     document.write(`<li> ${text} </li>`);
//     document.write(`<li> ${text} </li>`);
//     document.write(`</ul>`);
// }
//
// foo('hello!');

// 7 - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function print(text, num) {
//     document.write(`<ul>`);
//         let i = 0;
//         while (i < num) {
//             document.write(`<li> ${text} </li>`);
//             i++;
//         }
//     document.write(`</ul>`);
// }
//
// print('hi', 5);

// 8 - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let array = ['gg', 2, 3, true, false, 'hi'];
//
// function foo(arr) {
//     document.write(`<ol>`);
//         for (const arrElement of arr) {
//             document.write(`<li>${arrElement}</li>`);
//         }
//     document.write(`</ol>`);
// }
//
// foo(array);

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
// function foo(arr) {
//
//     for (const arrElement of arr) {
//         document.write(`<div> ID - ${arrElement.id}, NAME - ${arrElement.name}, AGE - ${arrElement.age} </div>`);
//     }
// }
//
// foo(array);

// 10 - створити функцію яка повертає найменьше число з масиву
// let array = [1, 2, 3, 44, 0];
//
// function min(arr) {
//     let x = arr[0];
//     for (const arrEl of arr) {
//         if ( x > arrEl) {
//             x = arrEl;
//         }
//     }
//     return x;
// }
//
// console.log(min(array));

// 11 - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// let array = [1, 2, -3, 44, 0];
//
// function sum(arr) {
//     let x = 0;
//     for (const arrEl of arr) {
//         x = x + arrEl;
//     }
//     return x;
// }
//
// console.log(sum(array));

// 12 - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// function swap(arr, index1, index2) {
//         let a = arr[index1];
//         let b = arr[index2];
//         arr[index2] = a;
//         arr[index1] = b;
//
//         return arr;
// }
//
// console.log(swap([11, 22, 33, 44], 1, 2));

// 13 - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
//
// function exchange(sumUAH, currencyValues, exchangeCurrency) {
//     let value;
//     for (const arrEl of currencyValues) {
//         if (arrEl.currency === exchangeCurrency) {
//             value = arrEl.value;
//         }
//     }
//     return sumUAH / value;
// }
//
// console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD'));

// function userCreator(name) {
//     let user = {name: name}
//     return {
//         getName: function () {
//             return user.name;
//         },
//         setName: function (name) {
//             if (typeof name === 'string') {
//                 user.name = name;
//             } else {
//                 console.log('wow');
//             }
//
//         },
//     }
// }
//
// let u1 = userCreator();
// u1.setName('Did');
// console.log(u1.getName());

function userCreator(name) {
    let user = {name: name}
    return {
        getName() {
            return user.name;
        },
        setName(name) {
            if (typeof name === 'string') {
                user.name = name;
            } else {
                console.log('wow');
            }
        },
    }
}

let u1 = userCreator();
u1.setName('fof');
console.log(u1.getName());
u1.setName('dod');
console.log(u1.getName());







