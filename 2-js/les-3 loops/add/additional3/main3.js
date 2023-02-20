// 1. Створити пустий масив та :

//     a. заповнити його 50 парними числами за допомоги циклу.
//
// let mas = [];
//
// for (i = 1; i <= 100; i++) {
//     if (i % 2 === 0) {
//         mas.push(i);
//     }
// }
//
// console.log(mas)

//     b. заповнити його 50 непарними числами за допомоги циклу.
// let mas = [];
//
// for (let i = 1; i <= 100; i++) {
//     if (i % 2 !== 0) {
//         mas.push(i);
//     }
// }
//
// console.log(mas)

// c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
//
// let array = [];
//
// for (let i = 0; i < 20; i++) {
//     let nums = Math.round(Math.random() * 100);
//     array.push(nums);
// }
//
// console.log(array);

// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
//
// let array = [];
//
// for (let i = 1; i < 20; i++) {
//     let nums = Math.floor(Math.random() * 732 + 8);
//     array.push(nums);
// }
//
// console.log(array);

// 2. Вивести за допомогою console.log кожен третій елемен
// let array = [ 1, 2, 10, 5, 7, 22, 56, 8, 33 ];
// for (let i = 2; i < array.length; i = i + 3) {
//     const arrayEl = array[i];
//     console.log(arrayEl, i)
// }

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
// for (let i = 2; i < array.length; i = i + 3) {
//     const arrayEl = array[i];
//     if (arrayEl % 2 === 0) {
//         console.log(arrayEl);
//     }
// }

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
// let newArr = [];
//
// for (let i = 2; i < array.length; i = i + 3) {
//     const arrayEl = array[i];
//     if (arrayEl % 2 === 0) {
//         console.log(arrayEl);
//         newArr.push(arrayEl);
//     }
// }
//
// console.log(newArr)

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
//
// let arr = [1, 2, 3, 5, 7, 9, 56, 8, 67];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i - 1])
//     }
// }

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
// let array = [100, 250, 50, 168, 120, 345, 188];
// let sum = 0;
// for (const arrEl of array) {
//     sum = sum + arrEl;
// }
// let med = sum / array.length;
//
// console.log('середній чек -', med);

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// let arr = [];
// let brr = [];
//
// for (let i = 0; i < 10; i++) {
//     let nums = Math.round(Math.random() * 5)
//     arr.push(nums);
//     let x = arr[i] * 5;
//     brr.push(x);
// }
// console.log(arr)
// console.log(brr);

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
// let arr = [1, 2, 3, 'a', 'b', 'c', true, false, 4, NaN];
// let brr = [];
//
// for (const arrElement of arr) {
//     if (typeof arrElement === "number") {
//         brr.push(arrElement);
//     }
// }
//
// console.log(arr);
// console.log(brr);

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]

let usersWithId = [
        {id: 1, name: 'vasya', age: 31, status: false},
        {id: 2, name: 'petya', age: 30, status: true},
        {id: 3, name: 'kolya', age: 29, status: true},
        {id: 4, name: 'olya', age: 28, status: false}
    ];
let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

let usersWithCities = [];

citiesWithId.sort((a, b) => {
    return a.user_id - b.user_id;
});
console.log(citiesWithId);




// for (const userEl of usersWithId) {
//     usersWithCities.push(userEl);
// }
//
// let addres = [];
//
// for (const citiesEl of citiesWithId) {
//     addres.push(citiesEl);
// }
//
// usersWithCities.push(addres)
//
// console.log(usersWithCities)




// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
//
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
//
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.