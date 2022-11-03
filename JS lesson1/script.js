
<!-- - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.-->
<!--Вивести кожну змінну за допомогою: console.log-->

// let hello = 'hello';
// let owu = 'owu';
// let com = 'com';
// let love = 'ua';
// let num = 1;
// let num2 = 10;
// let num3 = -999;
// let num4 = 123;
// const pi = 3.14;
// let num5 = 2.7;
// let num6 = 16;
// let yes = true;
// let no = false;
//
// console.log(`${hello} ${owu} ${com} ${love}`)
// console.log(pi);
// console.log(`${num} ${num2} ${num3} ${num4} ${num5} ${num6}`)
// console.log(yes);
// console.log(no);


<!-- - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)-->

// const firstName = 'Maksym';
// const middleName = 'O.';
// const lastName = 'Kulikov';
//
// let person = `${firstName} ${middleName} ${lastName}`
// console.log(person);

<!-- - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.-->

// let a = 100;
// // let b = '100'
// // let c = true;
// //
// // console.log(typeof a);
// // console.log(typeof b);
// // console.log(typeof c);




<!--Додаткове для тих хто цікавився prompt`oм-->
<!-- - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль-->



 let firstName = prompt('Your first name');
 let middleName = prompt('Your middle name');
 let lastName = prompt('Your last name');
 let age = prompt('Your age?')

 let person = `${firstName} ${middleName} ${lastName}`
console.log(person);
console.log(+age);
