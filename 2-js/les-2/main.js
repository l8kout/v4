// 1 - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
//
// let array = [];
// array[array.length] = 1;
// console.log(array[0]);
// array[array.length] = 2;
// console.log(array[1]);
// array[array.length] = 'aaa';
// console.log(array[2]);
// array[array.length] = true;
// console.log(array[3]);
// array[array.length] = false;
// console.log(array[4]);
// array[array.length] = NaN;
// console.log(array[5]);
// array[array.length] = 0;
// console.log(array[6]);
// array[array.length] = 'string';
// console.log(array[7]);
// array[array.length] = 222;
// console.log(array[8]);
// array[array.length] = 333;
// console.log(array[9]);

// 2 - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
//
// let book1 = {title: 'book1', pageCount: 10, genre: 'roman'};
// let book2 = {title: 'book2', pageCount: 22, genre: 'picturebook'};
// let book3 = {title: 'book3', pageCount: 33, genre: 'comics'};

// 3 - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
//
// let book1 = {title: 'book1', pageCount: 10, genre: 'roman', authors: [{name: 'pavlo', age: 11}]};
// let book2 = {title: 'book2', pageCount: 22, genre: 'picturebook', authors: [{name: 'petro', age: 22}]};
// let book3 = {title: 'book3', pageCount: 33, genre: 'comics', authors: [{name: 'prokip', age: 33}]};
//
// console.log(book1);
// console.log(book2);
// console.log(book3);

// 4 - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
//
// let arr = [{name: 'ann', username: 'anakonda', password: 'ananans'},
//     {name: 'bob', username: 'bib', password: 123456789},
//     {name: 'tom', username: 'TT', password: '233yyy2'},
//     {name: 'chris', username: 'apple', password: 222},
//     {name: 'tim', username: 'tim100', password: 333},
//     {name: 'viktor', username: 'V', password: '444442d'},
//     {name: 'igor', username: 'IGOR', password: 112233},
//     {name: 'pavlo', username: 'pasha', password: 4442221},
//     {name: 'dima', username: 'dim', password: 'lololo1'},
//     {name: 'fred', username: 'bad', password: 911},
// ];
//
// console.log(arr[0].password);
// console.log(arr[1].password);
// console.log(arr[2].password);
// console.log(arr[3].password);
// console.log(arr[4].password);
// console.log(arr[5].password);
// console.log(arr[6].password);
// console.log(arr[7].password);
// console.log(arr[8].password);
// console.log(arr[9].password);

//Логічні розгалуження:

// 5 - Є змінна х, якій ви надаєте довільне числове значення.
// // Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
//
// let x = 0;
// if (x !== 0) {
//     console.log('вірно');
// } else {
//     console.log('не вірно');
// }

// 6 - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
//
// let time = +prompt('введіть число');
//
// if (x >= 0 && x <= 14) {
//     document.write('перша чверть')
// } else if (x >= 15 && x <= 29) {
//     document.write('друга чверть')
// } else if (x >= 30 && x <= 44) {
//     document.write('третя чверть')
// } else if (x >= 45 && x <= 59) {
//     document.write('четверта чверть')
// } else {
//     document.write('спробуй ще')
// }

// 7 - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
//
// let day = +prompt('введіть число');
//
// if ( day >= 1 && day <= 10) {
//     console.log('перша декада');
// } else if ( day >= 11 && day <= 20) {
//     console.log('друга декада');
// } else if ( day >= 21 && day <= 31) {
//     console.log('третя декада');
// } else {
//     console.log('спробуй ще');
// }

// 8 - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//
// let day = +prompt('введіть порядковий номер дня тижня');
//
// if (typeof day === "number") {
//     switch (day) {
//         case 1:
//             console.log('monday');
//             break;
//         case 2:
//             console.log('tuesday');
//             break;
//         case 3:
//             console.log('wednesday');
//             break;
//         case 4:
//             console.log('thursday');
//             break;
//         case 5:
//             console.log('friday');
//             break;
//         case 6:
//             console.log('saturday');
//             break;
//         case 7:
//             console.log('sunday');
//             break;
//         default:
//             console.log('прочитай умошу ще раз');
//     }
// }

// 9 - Користувач вводить або має два числа.
//Потрібно знайти та вивести максимальне число з тих двох .
//Також потрібно врахувати коли введені рівні числа.
//
// let a = -3;
// let b = 1;
//
// if (a === b) {
//     console.log('числа рівні');
// } else if (a > b) {
//     console.log(a + ' найбільше число');
// } else {
//     console.log(b + ' найбільше число');
// }

// 10 - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

// let x = ' ';
//
// if (typeof x === false) {
//     x = "default";
//     console.log(x);
// }
//


// 11 - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
//
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
//     if (coursesAndDurationArray[0].monthDuration > 5) {
//         console.log('супер');
//     }
//     if (coursesAndDurationArray[1].monthDuration > 5) {
//         console.log('супер');
//     }
//     if (coursesAndDurationArray[2].monthDuration > 5) {
//         console.log('супер');
//     }
//     if (coursesAndDurationArray[3].monthDuration > 5) {
//         console.log('супер');
//     }
//     if (coursesAndDurationArray[4].monthDuration > 5) {
//         console.log('супер');
//     }
//     if (coursesAndDurationArray[5].monthDuration > 5) {
//         console.log('супер');
//     }
