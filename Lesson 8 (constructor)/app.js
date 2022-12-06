// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// function User (id, name, surename, email, phone) {
//
//     this.id = id;
//     this.name = name;
//     this.surename = surename;
//     this.email = email;
//     this.phone = phone;
//
//     console.log(this);
//
// }
// let user1 = new User(119, 'Leanne', 'Graham', 'Sincere@april.biz', '1-770-736-8031 x56442')
// let user2 = new User(215, 'Ervin', 'Howell', 'Shanna@melissa.tv', '010-692-6593 x09125')
// let user3 = new User(354, 'Clementine', 'Bauch', 'Nathan@yesenia.net', '1-463-123-4447')
// let user4 = new User(415, 'Patricia', 'Lebsack', 'Julianne.OConner@kory.org', '493-170-9623 x156')
// let user5 = new User(662, 'Mrs. Dennis', 'Schulist', 'Karley_Dach@jasper.info', '1-477-935-8478 x6430')
// let user6 = new User(693, 'Kurtis', 'Weissnat', 'Telly.Hoeger@billy.biz', '210.067.6132')
// let user7 = new User(714, 'Nicholas', 'Runolfsdottir V', 'SSherwood@rosamond.me', '586.493.6943 x140')
// let user8 = new User(800, 'Glenna', 'Reichert', 'Chaim_McDermott@dana.io', '(775)976-6794 x41206')
// let user9 = new User(932, 'Chelsey ', 'Dietrich', 'Lucio_Hettinger@annie.ca', '(254)954-1289')
// let user10 = new User(101, 'Clementina', 'DuBuque', 'Padberg@karina.biz', '024-648-3804')
//
//
// let arrOfUsers = [];
// arrOfUsers.push(user1,user2,user3,user4,user5,user6,user7,user8,user9,user10)
// console.log(arrOfUsers);




//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// let sorted = arrOfUsers.filter(user => user.id % 2 === 0)
//
// console.log(sorted);
//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

//
// let sorted2 = arrOfUsers.sort((a,b) => a.id - b.id)
// console.log(sorted2);


//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)


// class Client {
//
//     constructor(id, name, surename, email, phone, orders ) {
//         this.id = id;
//         this.name = name;
//         this.surename = surename;
//         this.email = email;
//         this.phone = phone;
//         this.orders = orders
//
//         console.log(this);
//
//     }
//
// }
//
//
//
// let client1 = new Client(119, 'Leanne', 'Graham', 'Sincere@april.biz', '1-770-736-8031 x56442',['phone','laptop'])
// let client2 = new Client(215, 'Ervin', 'Howell', 'Shanna@melissa.tv', '010-692-6593 x09125',['monitor','playstation','router'])
// let client3 = new Client(354, 'Clementine', 'Bauch', 'Nathan@yesenia.net', '1-463-123-4447',['phone'])
// let client4 = new Client(415, 'Patricia', 'Lebsack', 'Julianne.OConner@kory.org', '493-170-9623 x156',['tv','phone','headphones','tablet'])
// let client5 = new Client(662, 'Mrs. Dennis', 'Schulist', 'Karley_Dach@jasper.info', '1-477-935-8478 x6430',['decktop','monitor','keyboard','mouse', 'router'])
// let client6 = new Client(693, 'Kurtis', 'Weissnat', 'Telly.Hoeger@billy.biz', '210.067.6132',['phoneCharger','phoneCase'])
// let client7 = new Client(714, 'Nicholas', 'Runolfsdottir V', 'SSherwood@rosamond.me', '586.493.6943 x140',['laptop','mouse','usbFlashMemory'])
// let client8 = new Client(800, 'Glenna', 'Reichert', 'Chaim_McDermott@dana.io', '(775)976-6794 x41206',['ssd','decktop','keyboard'])
// let client9 = new Client(932, 'Chelsey ', 'Dietrich', 'Lucio_Hettinger@annie.ca', '(254)954-1289',['phone','headphones','phoneCase'])
// let client10 = new Client(101, 'Clementina', 'DuBuque', 'Padberg@karina.biz', '024-648-3804',['xbox360','monitor','headphones'])


// створити пустий масив, наповнити його 10 об'єктами Client


// let arrOfClients = []
// arrOfClients.push(client1,client2,client3,client4,client5,client6,client7,client8,client9,client10)
// console.log(arrOfClients);


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// let sortedByOrders = arrOfClients.sort((a,b)=>a.orders.length - b.orders.length)
//
// console.log(sortedByOrders);


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

// function Car (model, manufacturer, year, maxSpeed, volumeOfEngine,){
//
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.volumeOfEngine = volumeOfEngine;
//
//     console.log(this);
//
//
//     // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     Car.showSpeed = function (){
//         console.log(`їдемо зі швидкістю ${maxSpeed} км на годину`)
//     }
//
//
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     Car.info = function () {
//         console.log(`model = ${model};
//          manufacturer = ${manufacturer};
//          year = ${year};
//          maxSpeed = ${maxSpeed};
//          volumeOfEngine = ${volumeOfEngine};`)
//     }
//
//
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//
//     Car.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed+=newSpeed
//         return `The new maxSpeed is ${newSpeed} km/h`
//     }
//
//
//     // -- changeYear (newValue) - змінює рік випуску на значення newValue
//     Car.changeYear = function (newValue){
//         this.year+=newValue
//         return `The new year is ${newValue} `
//     }
//
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//     Car.addDriver = function (driver){
//         this.driver = driver
//         return `The driver is ${driver} `
//     }
//
// }
//
// new Car('Volkswagen Golf IV', 'Volkswagen AG', 2004, 216, 1896)
// Car.showSpeed()
// Car.info()
// console.log(Car.increaseMaxSpeed(655));
// console.log(Car.changeYear(2000));
// console.log(Car.addDriver('Vin Diesel'));



//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

// class Car {
//
//     constructor(model, manufacturer, year, maxSpeed, volumeOfEngine) {
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.volumeOfEngine = volumeOfEngine;
//
//         console.log(this);
//     };
//     drive (){
//         return `їдемо зі швидкістю ${this.maxSpeed} км на годину`
//     };
//     info (){
//         console.log(`model = ${this.model};
//         manufacturer = ${this.manufacturer};
//         year = ${this.year};
//         maxSpeed = ${this.maxSpeed};
//         volumeOfEngine = ${this.volumeOfEngine};`)
//     };
//     increaseMaxSpeed (newSpeed) {
//         this.maxSpeed += newSpeed
//         return `The new maxSpeed is ${newSpeed} km/h`
//     };
//
//     changeYear(newValue){
//         this.year = newValue;
//         return`The new year is ${newValue} `
//     };
//
//     addDriver (driver){
//       this.newDriver = driver
//         return `The driver is ${driver} `
//     };
//
//
//
// }
//
//
// let car2 = new Car('Lada 2113', 'AutoVaz', 2007, 160, 1600)
// console.log(car2.drive())
// car2.info()
// console.log(car2.increaseMaxSpeed(600))
// console.log(car2.changeYear(2000))
// console.log(car2.addDriver('Paul Walker'));


// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//



//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.


class Sinderella {

    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;

    }
}

let Sinderella1 = new Sinderella('Olivia',20,36);
let Sinderella2 = new Sinderella('Emma',21,32)
let Sinderella3 = new Sinderella('Charlotte',19,30)
let Sinderella4 = new Sinderella('Amelia',25,31)
let Sinderella5 = new Sinderella('Ava',30,33)
let Sinderella6 = new Sinderella('Sophia',33,28)
let Sinderella7 = new Sinderella('Isabella',18,27)
let Sinderella8 = new Sinderella('Mia',26,29)
let Sinderella9 = new Sinderella('Evelyn',28,34)
let Sinderella10 = new Sinderella('Harper',35,40)

let arrOfGirls = []
arrOfGirls.push(Sinderella1,Sinderella2,Sinderella3,Sinderella4,Sinderella5,Sinderella6,Sinderella7,Sinderella8,Sinderella9,Sinderella10)
console.log(arrOfGirls);

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class Prince {

    constructor(name, age, foundShoe) {
        this.name = name;
        this.age = age;
        this.foundShoe = foundShoe;
    }
}
//
let prince = new Prince('Lancelot', 40, 34)
console.log(prince);

// let arrPrince = []
// arrPrince.push(prince);
// console.log(arrPrince);


//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

// for (const shoeOfGirl of arrOfGirls) {
//     for (const found of arrPrince) {
//         if(found.foundShoe === shoeOfGirl.footSize){
//             document.write(`<h2>${found.name}'s destiny is ${shoeOfGirl.name}</h2>`)
//         };
//
//     };
//
// };


//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


// let result = arrOfGirls.find((item)=>{
//     for (const found of arrPrince) {
//         if(item.footSize === found.foundShoe) console.log(item.name)
//     }
// })


//v2

let result2 = arrOfGirls.find((item)=>item.footSize === prince.foundShoe)
console.log(result2.name);