// 1 - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// function Constructor (id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let user = new Constructor(1, 'Ann', 'Grub', 'asd@ff.com', 123);
// console.log(user);

// 2 - створити пустий масив, наповнити його 10 об'єктами new User(....)
// function User (id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let array = [];
// for (let i = 0; i < 10; i++) {
//     array.push(new User(i+1, 'Ann', 'Grub', 'asd@ff.com', 123));
// }
//
// console.log(array);

// 3 - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// function User (id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let array = [];
// for (let i = 0; i < 10; i++) {
//     array.push(new User(i+1, 'Ann', 'Grub', 'asd@ff.com', 123));
// }
// console.log(array);
//
// console.log(array.filter(value => value.id % 2 === 0));

// 4 - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// function User (id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let array = [];
// for (let i = 0; i < 10; i++) {
//     array.push(new User(i+1, 'Ann', 'Grub', 'asd@ff.com', 123));
// }
//
// console.log(array.sort((a, b) => b.id - a.id));

// 5 - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
//
// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// console.log(new Client(1, 'did', 'bab', '123@a.a', '911', 'order-1'));

// 6 - створити пустий масив, наповнити його 10 об'єктами Client
//
// let client = [];
// client.push(new Client(1, 'did', 'bab', '123@a.a', '911', 'apple, tree, car, bus, fruits'));
// client.push(new Client(33, 'did', 'bab', '123@a.a', '911', 'apple, potato'));
// client.push(new Client(44, 'did', 'bab', '123@a.a', '911', 'juice, chicken, dog'));
// client.push(new Client(1234, 'did', 'bab', '123@a.a', '911', 'apple'));
// client.push(new Client(12, 'did', 'bab', '123@a.a', '911', 'apple'));
// client.push(new Client(21, 'did', 'bab', '123@a.a', '911', 'apple'));
// client.push(new Client(4, 'did', 'bab', '123@a.a', '911', 'apple'));
// client.push(new Client(71, 'did', 'bab', '123@a.a', '911', 'apple'));
// client.push(new Client(71, 'did', 'bab', '123@a.a', '911', 'apple, juice'));
// client.push(new Client(5, 'did', 'bab', '123@a.a', '911', 'dog, cat, whale, parrot, mouse, squirrel, horse'));
// console.log(client);

// 7 - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// console.log(client.sort((a, b) => b.order.length - a.order.length));

// 8 - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// function Car(model, producer, year, maxSpeed, volume) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.volume = volume;
//
//     // 9 -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     //
//     // this.drive = function () {
//     //     console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)
//     // };
//
//     // 10 -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     //
//     this.info = function () {
//         for (const arrKay in this) {
//                 console.log(`${arrKay} - ${this[arrKay]}`);
//             }
//     };
//
//     // 11 -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     //
//     // this.increaseMaxSpeed = function (newSpeed) {
//     //         this.maxSpeed = this.maxSpeed + newSpeed;
//     // };
//
//     // 12 -- changeYear (newValue) - змінює рік випуску на значення newValue
//     //
//     // this.changeYear = function (newValue) {
//     //     this.year = newValue;
//     // };
//
//     // 13 -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//     //
//     // this.addDriver = function (driver) {
//     //     this.driver = driver;
//     // };
//
// }

// let car = new Car('ford', 'usa', 1992, 100, '1,2');
// car.drive();
// car.info();
// car.increaseMaxSpeed(50);
// car.changeYear(12);
// car.addDriver({name: 'bob', age: 12, status: true});
// car.info();

// - (Те саме, тільки через клас)
// 14 -- Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//
// class Car {
//     constructor(model, producer, year, maxSpeed, volume) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.volume = volume;
//     }
// // 15 -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//
// // 16 -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//
//     info() {
//         for (const carKay in car) {
//             console.log(`${carKay} - ${car[carKay]}`);
//         }
//     }
//
// // 17 -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     increaseMaxSpeed(newSpeed) {
//         this.maxSpeed === 'number';
//         this.maxSpeed = this.maxSpeed + newSpeed;
//     }
//
// // 18 -- changeYear (newValue) - змінює рік випуску на значення newValue
//
//     changeYear(newValue) {
//         this.year = newValue;
//     }
//
// // 19 -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//     addDriver(driver) {
//         this.driver = driver;
//     }
//
// }
//
// let car = new Car('ford', 'usa', 1980, 123, '2.0');
// car.drive();
//
// car.drive();
// car.info();
// car.increaseMaxSpeed(500);
// car.changeYear(2000);
// car.addDriver({name: 'tom', age: 33});
//
// console.log(car.driver);

// 20 - створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
//
// class Cinderella {
//     constructor(name, age, footSize) {
//         this.name = 'Cinderella';
//         this.age = Math.floor(Math.random() * 9 + 16);
//         this.footSize = Math.floor(Math.random() * 10 + 28);
//     }
// }
//
// let cinderella = []
// for (let i = 0; i < 10; i++) {
//     cinderella.push(new Cinderella());
// }
//
// console.log(cinderella);

// 21 - Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//
// class Prince extends Cinderella {
//     constructor(name, age, findShoe, footSize) {
//         super(age, footSize);
//         this.findShoe = this.footSize;
//         this.name = 'Prince';
//     }
// }
//
// let prince = new Prince();
// console.log(prince)

// 22 - За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//
// let find = (arrCin, prince) => {
//     let a = 0;
//     for (let i = 0; i < arrCin.length; i++) {
//         cinEl = arrCin[i];
//         if (cinEl.footSize === prince.findShoe) {
//             console.log(`Prince find ${cinEl.name} number - ${i+1} with foot size - ${cinEl.footSize} and age - ${cinEl.age}`);
//             a = a + i;
//             // return `Prince find ${cinEl.name} number - ${i+1} with foot size ${cinEl.footSize} and age - ${cinEl.age}`; //// чомусь нічого не виводить тут
//         }
//     }
//
//     if (a === 0) {
//         console.log('Poor prince');
//     }
// };
//
// find(cinderella, prince);

// 23 - Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
// console.log(cinderella.find(value => value.footSize === prince.findShoe));