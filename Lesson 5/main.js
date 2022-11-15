// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function S (a,b){
//     let result = a*b;
//     console.log(result);
// }
//
// S(5,6)

// - створити функцію яка обчислює та повертає площу кола з радіусом r


// function circle (radius){
//     let result = Math.PI * Math.pow(radius,2)
//     return result;
//
// }
//
// let x = circle(52)
// console.log(x);


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r


// function cylinder (r,h){
//     let result = 2 * Math.PI * r * (h+r);
//     return result;
//
//
// }
//
// let y = cylinder(4,14)
// console.log(y);


// - створити функцію яка приймає масив та виводить кожен його елемент v1

// function arrIterator (arr){
//     for (const item of arr) {
//         console.log(item);
//     }
// }
//
// arrIterator([10,15,true,'dddd'])


// - створити функцію яка приймає масив та виводить кожен його елемент v2

// let randomArr = [10,15,true,'dddd'];
//
// function arrayLog (array){
//     for (const items of array) {
//         console.log(items);
//     }
// }
// arrayLog(randomArr)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function html (text){
//
//     document.write(`<p>${text}</p>`)
//
// }
//
// html(`Hello world`)


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function list (text){
//     document.write(`
//         <ul>
//         <li>${text}</li>
//         <li>${text}</li>
//         <li>${text}</li>
//         </ul>
//
//     `)
//
// }
// list(`Hello JS`)


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function creator(text, conut) {
//     document.write(`<ul>`);
//
//     for (let i = 0; i < conut; i++) {
//         document.write(`<li>${text}</li>`)
//
//     };
//
//
//
//     document.write(`</ul>`);
// }
// creator('sdsdds',8)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список


// let arr = [10,15,true,'dddd'];
//
// function listOfItems (array){
//     document.write(`<ol>`)
//
//     for (const items of arr) {
//
//         document.write(`
//
//         <li>${items}</li>
//
//         `)
//
//     }
//
//     document.write(`</ol>`)
// }
//
//
// listOfItems(arr)


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.


// let users = [
//           {id: 1, name: 'vasya', age: 31, status: false},
//           {id: 2, name: 'petya', age: 30, status: true},
//           {id: 3, name: 'kolya', age: 29, status: true},
//           {id: 4, name: 'olya', age: 28, status: false}
//         ];
//
// function usersList(array){
//
//     for (const item of array) {
//
//         document.write(`
//
//         <div class="users-box">
//
//         <h3>ID: ${item.id}</h3>
//
//         <h2>Name: ${item.name}</h2>
//
//         <p>Age: ${item.age}</p>
//
//
//
//        </div>
//
//
//
//
//         `)
//
//
//
//
//
//     }
// };
//
// usersList(users)


// - створити функцію яка повертає найменьше число з масиву

// let numbers = [121,55,246,4552,261,22,356,34]
//
// function minNum(array){
//     let min = array[0];
//     for (let i = 0; i < array.length; i++) {
//         if(array[i]<min){
//             min = array[i]
//         }
//
//     }
//
//     console.log(min);
//
// }
//
// minNum(numbers)


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

//   let arrayOfNumbers = [100,250,50,168,120,345,188];
//
// function summary (array){
//     let sum = 0;
//     for (const number of array) {
//       sum += number
//
//    }
//     let result = sum+array.length
//     console.log(result);
//
// }
//
//
//
//
// summary(arrayOfNumbers)













