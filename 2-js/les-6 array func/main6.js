// 1 - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
//
// let strL = (str) => {
//     return str.length;
// }
//
// console.log('hello world', strL('hello world'));
// console.log('lorem ipsum', strL('lorem ipsum'));
// console.log('javascript is cool', strL('javascript is cool'));

// 2 - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
//
// let up = (str) => {
//     return str.toUpperCase();
// };
//
// console.log(up('hello world'));
// console.log(up('lorem ipsum'));
// console.log(up('javascript is cool'));

// 3 - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
//
// let low = (str) => {
//     return str.toLowerCase();
// }
//
// console.log(low('HELLO WORLD'));
// console.log(low('LOREM IPSUM'));
// console.log(low('JAVASCRIPT IS COOL'));

// 4 - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let foo = (str, a,b) => {
//     return str.substring(a, b);
// };
//
// let str = ' dirty string   '
// console.log(foo(str, 1, 13));

// 5 - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Ревуть воли як ясла повні';
//
// let stringToarray = (str) => {
//     return str.split(' ');
// }
//
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
// console.log(arr);

// 6 є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
//console.log([10, 8, -7, 55, 987, -1011, 0, 1050, 0].map(value => value.toString()));

// 7 - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// let sortNums = (nums, direction) => {
//     if (direction === 'ascending') {
//         return nums.sort((a, b) => a - b);
//     } else if (direction === 'descending') {
//         return nums.sort((a, b) => b - a);
//     }
// };
//
// console.log(sortNums(nums,'ascending')); // [3,11,21]
// console.log(sortNums(nums, 'descending'));// [21,11,3]

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// 8 -- відсортувати його за спаданням за monthDuration
// console.log(coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration));

// 9 -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// console.log(coursesAndDurationArray.filter(value => value.monthDuration > 5));

// 10 -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
//
// let map = coursesAndDurationArray.map(function (value, index) {
//     let mapU = {
//         id: index + 1,
//         title: value.title,
//         monthDuration: value.monthDuration
//     }
//     return mapU;
//
//     // return {id: index + 1, ...value, };
// });
//
// console.log(map)

//   описати колоду карт (від 6 до туза без джокерів)
// let cards = [
//     {cardSuit: 'clubs', value: 'Ace', color: 'black'},
//     {cardSuit: 'clubs', value: 6, color: 'black'},
//     {cardSuit: 'clubs', value: 7, color: 'black'},
//     {cardSuit: 'clubs', value: 8, color: 'black'},
//     {cardSuit: 'clubs', value: 9, color: 'black'},
//     {cardSuit: 'clubs', value: 10, color: 'black'},
//     {cardSuit: 'clubs', value: 'Jack', color: 'black'},
//     {cardSuit: 'clubs', value: 'Queen', color: 'black'},
//     {cardSuit: 'clubs', value: 'King', color: 'black'},
//
//     {cardSuit: 'diamonds', value: 'Ace', color: 'red'},
//     {cardSuit: 'diamonds', value: 6, color: 'red'},
//     {cardSuit: 'diamonds', value: 7, color: 'red'},
//     {cardSuit: 'diamonds', value: 8, color: 'red'},
//     {cardSuit: 'diamonds', value: 9, color: 'red'},
//     {cardSuit: 'diamonds', value: 10, color: 'red'},
//     {cardSuit: 'diamonds', value: 'Jack', color: 'red'},
//     {cardSuit: 'diamonds', value: 'Queen', color: 'red'},
//     {cardSuit: 'diamonds', value: 'King', color: 'red'},
//
//     {cardSuit: 'hearts', value: 'Ace', color: 'red'},
//     {cardSuit: 'hearts', value: 6, color: 'red'},
//     {cardSuit: 'hearts', value: 7, color: 'red'},
//     {cardSuit: 'hearts', value: 8, color: 'red'},
//     {cardSuit: 'hearts', value: 9, color: 'red'},
//     {cardSuit: 'hearts', value: 10, color: 'red'},
//     {cardSuit: 'hearts', value: 'Jack', color: 'red'},
//     {cardSuit: 'hearts', value: 'Queen', color: 'red'},
//     {cardSuit: 'hearts', value: 'King', color: 'red'},
//     {value: 'Joker', color: 'red'},
//
//     {cardSuit: 'spades', value: 'Ace', color: 'black'},
//     {cardSuit: 'spades', value: 6, color: 'black'},
//     {cardSuit: 'spades', value: 7, color: 'black'},
//     {cardSuit: 'spades', value: 8, color: 'black'},
//     {cardSuit: 'spades', value: 9, color: 'black'},
//     {cardSuit: 'spades', value: 10, color: 'black'},
//     {cardSuit: 'spades', value: 'Jack', color: 'black'},
//     {cardSuit: 'spades', value: 'Queen', color: 'black'},
//     {cardSuit: 'spades', value: 'King', color: 'black'},
//     {value: 'Joker', color: 'black'}];

// 11 - знайти піковий туз
// console.log(cards.find(value => value.cardSuit === 'diamonds' && value.value === 'Ace'));

// 12 - всі шістки
// console.log(cards.filter(value => value.value === 6));

// 13 - всі червоні карти
// console.log(cards.filter(value => value.color === 'red'));

// 14 - всі буби
// console.log(cards.filter(value => value.cardSuit === 'hearts'));

// 15 - всі трефи від 9 та більше
// let red = cards.reduce((accumulator, value) => {
//     if (value.cardSuit === 'clubs') {
//         if (value.value >= 9) {
//             accumulator.filtered.push(value);
//         } else if (typeof value.value === 'string') {
//             accumulator.filtered.push(value);
//         }
//     }
//
//     return accumulator;
// }, {filtered:[]});
//
// console.log(red);

// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// =========================

// 16 - Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
//
// let redu = cards.reduce((accumulator, value) => {
//     if (value.cardSuit === 'spades') {
//         accumulator.spades.push(value);
//     } else if (value.cardSuit === 'diamonds') {
//         accumulator.diamonds.push(value);
//     } else if (value.cardSuit === 'hearts') {
//         accumulator.hearts.push(value);
//     } else if (value.cardSuit === 'clubs') {
//         accumulator.clubs.push(value);
//     }
//
//     return accumulator;
//
// }, {spades: [], diamonds: [], hearts: [], clubs: []});
//
// console.log(redu);

// 17 - взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration:  5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];

// 18 - написати пошук всіх об'єктів, в який в modules є sass
// console.log(coursesArray.filter(value => value.modules.includes('sass') === true));

// 19 - написати пошук всіх об'єктів, в який в modules є docker
// console.log(coursesArray.filter(value => value.modules.includes('docker') === true));