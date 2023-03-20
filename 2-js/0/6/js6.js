 // - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let a = 'hello world';
// let b = 'lorem ipsum';
// let c = 'javascript is cool';
//
// let strLength = (str) => {
//     return str.length
// };
//
// console.log(a, strLength(a));
// console.log(b, strLength(b));
// console.log(c, strLength(c));
//
// // or
//
// console.log(a.length);
// console.log(b.length);
// console.log(c.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let a = 'hello world';
// let b = 'lorem ipsum';
// let c = 'javascript is cool';
//
// console.log(a.toUpperCase());
// console.log(b.toUpperCase());
// console.log(c.toUpperCase());


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let a = 'HELLO WORLD';
// let b = 'LOREM IPSUM';
// let c = 'JAVASCRIPT IS COOL';
//
// console.log(a.toLowerCase());
// console.log(b.toLowerCase());
// console.log(c.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
// let str = ' dirty string   ';
//
// console.log(str.substring(1, 13));


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//
// let str = 'Ревуть воли як ясла повні';
//
// console.log(str.split(' '));

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let array = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
//
// let map = array.map(value => value.toString());
// console.log(map);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// let nums = [11,21,3, 1, 0];
//
// let sortNums = (nums, x) => {
//     if (x === 'ascending') {
//         nums = nums.sort((u1, u2) => u1 - u2);
//         console.log('ascending', nums)
//     } else if ( x === 'descending') {
//         nums = nums.sort((a, b) => b - a);
//         console.log('descending', nums)
//     }
//
// };
//
// sortNums(nums, 'ascending');

// - є масив
// -- відсортувати його за спаданням за monthDuration
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// let monthDuration = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
//
// console.log(monthDuration);


// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// console.log(coursesAndDurationArray.filter(value => value.monthDuration > 5));

//
// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

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
// - знайти піковий туз
// console.log(cards.filter(value => value.value === 'Ace'));
// - всі шістки
// console.log(cards.filter(value => value.value === 6));
// - всі червоні карти
// console.log(cards.filter(value => value.color === 'red'));
// - всі буби
// console.log(cards.filter(value => value.cardSuit === 'diamonds'));
// - всі трефи від 9 та більше

 // let red = cards.reduce((previousValue, currentValue) => {
 //     if (currentValue.cardSuit === 'clubs') {
 //         if (currentValue.value >= 9) {
 //             previousValue.filtered.push(currentValue);
 //         } else if (currentValue.value === 'Joker') {
 //             previousValue.filtered.push(currentValue);
 //         } else if (currentValue.value === 'Ace') {
 //             previousValue.filtered.push(currentValue);
 //         } else if (currentValue.value === 'Jack') {
 //             previousValue.filtered.push(currentValue);
 //         } else if (currentValue.value === 'Queen') {
 //             previousValue.filtered.push(currentValue);
 //         } else if (currentValue.value === 'King') {
 //             previousValue.filtered.push(currentValue);
 //         }
 //     }
 //
 //     return previousValue;
 // }, {filtered:[]})
 //
 // console.log(red);

// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let reduce = cards.reduce((previousValue , currentValue) => {

    if (currentValue.cardSuit === 'spades') {
        previousValue.spade.push(currentValue);
    } else if (currentValue.cardSuit === 'hearts') {
        previousValue.heart.push(currentValue);
    } else if (currentValue.cardSuit === 'diamonds') {
        previousValue.diamond.push(currentValue);
    } else if (currentValue.cardSuit === 'clubs') {
        previousValue.club.push(currentValue);
    }
    return previousValue;

}, {spade:[], diamond:[], heart:[], club:[]})

console.log(reduce);